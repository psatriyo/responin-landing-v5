import { NAV_ITEMS, SITE } from "../lib/constants";
import { Button } from "./Button";

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Responin home">
        <span className="brand__mark" aria-hidden="true">
          R
        </span>
        <span>{SITE.name}</span>
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <Button href="#pilot" className="site-header__cta">
        {SITE.primaryCta}
      </Button>
    </header>
  );
}
