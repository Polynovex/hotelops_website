import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

interface SwipeDeckProps {
  /** The cards. Rendered once — the layout switches in CSS, not by cloning. */
  children: ReactNode;
  /**
   * Grid classes for md and up, e.g. "md:grid-cols-2 lg:grid-cols-4 gap-6".
   * Below md the .swipe-deck rules in index.css override display and gap.
   */
  desktopClass?: string;
  /** Two cards per screen instead of one, for short cards. */
  compact?: boolean;
  /** Names the deck for screen readers, e.g. "Pricing plans". */
  label: string;
  className?: string;
}

/**
 * A card grid that becomes a swipeable deck on phones.
 *
 * The marketing pages collapse their grids to a single column below md, which
 * is what made the home page around twenty-four screens tall — long enough
 * that reaching the footer or a call to action was a chore. The same cards
 * side by side turn each of those sections into roughly one screen.
 *
 * The scrolling itself is native: CSS scroll-snap, no touch handlers and no
 * slider library, so it keeps the platform's own momentum and rubber-banding
 * and adds nothing to the bundle. The only JavaScript here is what the dots
 * need to know which card is showing.
 */
export function SwipeDeck({
  children,
  desktopClass = "md:grid-cols-2 lg:grid-cols-3 gap-6",
  compact = false,
  label,
  className = "",
}: SwipeDeckProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  /**
   * Whether the track actually has somewhere to go.
   *
   * A deck of two cards fits whole on a small tablet, and dots under something
   * that cannot move are a control that does nothing — they promise more
   * content than exists.
   */
  const [scrollable, setScrollable] = useState(false);
  const count = Children.count(children);

  const syncActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    // Derived from the first card's real width rather than a constant, so the
    // dots stay correct whatever the breakpoint or card size.
    const first = track.firstElementChild as HTMLElement | null;
    if (!first) return;

    const stride = first.offsetWidth + 16;
    if (stride <= 0) return;

    const index = Math.round(track.scrollLeft / stride);
    setActive(Math.max(0, Math.min(count - 1, index)));
  }, [count]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Passive: this only reads scroll position and must never delay it.
    track.addEventListener("scroll", syncActive, { passive: true });

    const measure = () => setScrollable(track.scrollWidth > track.clientWidth + 2);
    measure();

    // Rechecked on resize because the layout changes at md, and on content
    // size because some decks are filled from the API after first paint.
    const observer = new ResizeObserver(measure);
    observer.observe(track);

    return () => {
      track.removeEventListener("scroll", syncActive);
      observer.disconnect();
    };
  }, [syncActive]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return;

    track.scrollTo({
      left: index * (first.offsetWidth + 16),
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        ref={trackRef}
        role="group"
        aria-label={label}
        className={`swipe-deck ${compact ? "swipe-deck-compact" : ""} md:grid ${desktopClass} ${className}`}
      >
        {children}
      </div>

      {/*
        Position indicator, phones only. Buttons rather than plain dots so the
        deck can be driven without a swipe — by a keyboard, by a switch, or by
        anyone who finds a horizontal drag awkward.
      */}
      {count > 1 && scrollable && (
        <div className="md:hidden flex justify-center items-center gap-2 mt-6">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show card ${index + 1} of ${count}`}
              aria-current={index === active}
              // 44px of tappable area around a small visual dot: the dot is a
              // cue, not a target you should have to aim at.
              className="p-3 -m-1.5 group"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  index === active
                    ? "w-6 h-2 bg-blue-600"
                    : "w-2 h-2 bg-slate-300 group-hover:bg-slate-400"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </>
  );
}
