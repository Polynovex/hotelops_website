import { useEffect, useRef, useState } from "react";

/**
 * A video that costs nothing until someone is about to see it.
 *
 * A `<video src>` in the markup is fetched during page load whether or not the
 * viewer ever scrolls to it, and this clip is 908 KB — comfortably more than
 * the rest of the page put together. So the source is withheld until an
 * IntersectionObserver says the element is approaching the viewport, which
 * keeps it off the critical path entirely for anyone who bounces from the
 * hero.
 *
 * It also respects `prefers-reduced-motion`. Looping video is exactly the kind
 * of thing that setting exists to stop, so a viewer who has asked for less
 * motion gets the first frame held still and a control to start it themselves.
 *
 * The aspect ratio is reserved up front, so nothing below shifts when the
 * video arrives.
 */

interface Props {
  src: string;
  /** Intrinsic size. Only the ratio is used, to hold layout before load. */
  width: number;
  height: number;
  className?: string;
  /** Described for screen readers, which get no value from the frames. */
  label: string;
}

export function LazyVideo({ src, width, height, className = "", label }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);

    const onChange = (event: MediaQueryListEvent) => setReduceMotion(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    // No observer support: load it rather than show an empty box forever.
    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      // Starts fetching a screen-height early, so it is usually ready by the
      // time it is actually on screen.
      { rootMargin: "600px 0px" }
    );

    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  const start = () => {
    void videoRef.current?.play().then(() => setPlaying(true)).catch(() => undefined);
  };

  return (
    <div
      ref={hostRef}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {/*
        A gradient rather than a poster image: it matches the section it sits
        in, costs no request, and is already painted before the video decodes,
        so there is never an empty rectangle.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100"
      />

      {shouldLoad && (
        <video
          ref={videoRef}
          className="relative h-full w-full object-cover"
          // Muted is not a preference here: browsers refuse to autoplay a
          // video with sound, and this clip is decoration nobody asked to hear.
          muted
          loop
          playsInline
          autoPlay={!reduceMotion}
          preload="metadata"
          aria-label={label}
          onPlaying={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {shouldLoad && reduceMotion && !playing && (
        <button
          type="button"
          onClick={start}
          className="absolute inset-0 flex items-center justify-center bg-slate-900/20 transition-colors hover:bg-slate-900/30"
          aria-label={`Play: ${label}`}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-slate-900" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
