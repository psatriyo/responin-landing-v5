import { HERO, SAFE_METRICS, SITE } from "../lib/constants";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-section__content">
        <p className="eyebrow">{HERO.eyebrow}</p>
        <h1 id="hero-title">{HERO.title}</h1>
        <p className="hero-section__description">{HERO.description}</p>
        <div
          className="hero-section__actions"
          aria-label="Landing page calls to action"
        >
          <Button href="#pilot">{SITE.primaryCta}</Button>
          <Button href="#process" variant="secondary">
            {SITE.secondaryCta}
          </Button>
        </div>
        <ul className="hero-section__proof" aria-label="Responin proof points">
          {HERO.proofPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="hero-panel" aria-label="Responin workflow preview">
        <div className="hero-panel__bar">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-panel__body">
          <p className="hero-panel__label">Today’s operations queue</p>
          <div className="workflow-card workflow-card--active">
            <span>Invoice follow-up draft</span>
            <strong>Needs approval</strong>
          </div>
          <div className="workflow-card">
            <span>Customer escalation triage</span>
            <strong>Routed to owner</strong>
          </div>
          <div className="workflow-card">
            <span>Daily business summary</span>
            <strong>Ready</strong>
          </div>
        </div>
      </div>
      <div className="metric-strip" aria-label="Safe landing page metrics">
        {SAFE_METRICS.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <p>{metric.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
