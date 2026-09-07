import { trackEvent } from "../utils/analytics";

/**
 * The WhatsApp business number, without the leading + or any spaces, as
 * wa.me requires.
 */
const WHATSAPP_NUMBER = "2348134393554";

const PREFILLED_MESSAGE =
  "Hi HotelOpX, I'd like to learn more about your hotel management system.";

/**
 * Persistent WhatsApp contact.
 *
 * For this audience WhatsApp is not a fallback channel, it is the default one:
 * a hotel owner who will not fill in a form will happily send a message. So it
 * follows the visitor down the whole page rather than living only on Contact.
 *
 * Bottom right, deliberately. It was previously bottom left, which on a phone
 * is where the browser's own back affordance and the iOS system gesture area
 * sit — the two places a floating control should not be.
 *
 * The mark is the real WhatsApp glyph rather than a generic chat bubble,
 * because the recognisability is the entire point of putting it there.
 */
export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    PREFILLED_MESSAGE,
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_clicked", { location: "floating_button" })}
      aria-label="Chat with HotelOpX on WhatsApp"
      className="group fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] motion-reduce:transition-none motion-reduce:hover:scale-100"
      /* WhatsApp brand green, and a 56px target — comfortably above the 44px
         minimum for something used one-handed. */
      style={{ backgroundColor: "#25D366", width: 56, height: 56 }}
    >
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7"
        fill="#FFFFFF"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.73 6.42L3.2 28.8l6.55-1.7a12.74 12.74 0 0 0 6.25 1.62h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8Zm0 23.3h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.55 10.55 0 0 1-1.62-5.64c0-5.86 4.77-10.63 10.63-10.63 2.84 0 5.5 1.11 7.51 3.12a10.55 10.55 0 0 1 3.11 7.52c0 5.86-4.77 10.63-10.63 10.63Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.18-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
      </svg>

      {/* Sits to the left of the button so it can never run off-screen. */}
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:block motion-reduce:transition-none">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
