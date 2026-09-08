import { useEffect, useState } from "react";
import { apiService, type PlatformMetricRecord } from "../services/api";

/**
 * The headline figures, from the one place that owns them.
 *
 * The super admin edits these in the dashboard and the site reads them live,
 * so a number can be corrected without a deploy. This hook exists because the
 * fetch was written inline on the home page and the About page carried its own
 * hardcoded copy — which is how About came to claim "500+ Hotels" and "50+
 * Cities" long after the home page had been corrected to 7 and 3. Two places
 * holding the same figure is two places to disagree.
 *
 * Keep the fallbacks below in step with DEFAULTS in the backend's
 * platformMetric.controller: they are what a visitor sees when the API cannot
 * be reached, so they must be values the business can stand behind rather than
 * aspirational ones.
 */
const FALLBACK: Record<string, { value: string; label: string }> = {
  hotels_served: { value: "7", label: "Hotels Served" },
  uptime: { value: "99.9%", label: "Uptime" },
  cities: { value: "3", label: "Cities" },
  support: { value: "24/7", label: "Support" },
};

const FALLBACK_ORDER = ["hotels_served", "uptime", "cities", "support"];

export interface PlatformMetrics {
  /** Published metrics in the order the super admin arranged them. */
  all: Array<{ key: string; value: string; label: string }>;
  /**
   * One figure by key, falling back to the bundled value when the API is
   * unreachable or the metric has been unpublished.
   */
  metric: (key: string) => { value: string; label: string };
}

export function usePlatformMetrics(): PlatformMetrics {
  const [live, setLive] = useState<PlatformMetricRecord[] | null>(null);

  useEffect(() => {
    let active = true;
    apiService
      .getPlatformMetrics()
      .then((rows) => {
        if (active) setLive(rows);
      })
      .catch(() => {
        if (active) setLive([]);
      });
    return () => {
      active = false;
    };
  }, []);

  const hasLive = Boolean(live && live.length > 0);

  const all = hasLive
    ? live!.map((row) => ({ key: row.key, value: row.value, label: row.label }))
    : FALLBACK_ORDER.map((key) => ({ key, ...FALLBACK[key] }));

  const metric = (key: string) => {
    const found = all.find((row) => row.key === key);
    if (found) {
      return { value: found.value, label: found.label };
    }
    // Unpublished, or a key this page asks for that the editor does not hold.
    return FALLBACK[key] ?? { value: "—", label: key };
  };

  return { all, metric };
}
