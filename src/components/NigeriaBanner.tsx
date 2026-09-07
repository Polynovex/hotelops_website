import { useEffect, useState } from "react";
import { X } from "lucide-react";

const DISMISSED_KEY = "hotelopx.nigeriaBannerDismissed";

/**
 * A one-line statement of who this product is for, above everything else.
 *
 * It sits above the navigation because it answers the question a visitor
 * arriving from a search result asks first — "is this for a hotel like mine,
 * here?" — and answers it before they have read anything else.
 *
 * Dismissible, and the choice is remembered. A permanent bar is a permanent
 * tax on vertical space for a returning visitor who has already read it, which
 * matters most on the phones this audience mostly browses on.
 */
export function NigeriaBanner() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    // Read in an effect, not during render: a private window or blocked
    // storage throws, and that must not take the page down with it.
    try {
      setDismissed(window.localStorage.getItem(DISMISSED_KEY) === "1");
    } catch {
      setDismissed(false);
    }
  }, []);

  if (dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      window.localStorage.setItem(DISMISSED_KEY, "1");
    } catch {
      // Storage unavailable — the banner simply returns on the next visit.
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 py-2 text-center">
          <p className="text-xs sm:text-sm font-medium leading-snug">
            <span aria-hidden="true">🇳🇬</span> Built for Nigerian hotels — ₦
            Naira payments, local support, offline capability
          </p>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss banner"
            className="flex-shrink-0 -mr-1 p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
