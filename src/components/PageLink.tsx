import type { MouseEvent, ReactNode } from "react";
import { pathForPage } from "../utils/routes";

/**
 * A link to one of the site's pages.
 *
 * A real <a href>, so search engines can follow it from page to page and a
 * visitor can open it in a new tab; a plain click still navigates in place
 * without reloading the bundle.
 */
export function PageLink({
  page,
  onNavigate,
  className,
  children,
}: {
  page: string;
  onNavigate: (page: string) => void;
  className?: string;
  children: ReactNode;
}) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    // New tab, new window, download: leave those to the browser.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate(page);
  };
  return (
    <a href={pathForPage(page)} onClick={onClick} className={className}>
      {children}
    </a>
  );
}
