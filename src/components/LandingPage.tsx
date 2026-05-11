import {
  FAQS,
  PILLARS,
  PROBLEMS,
  SITE,
  TRUST_CONTROLS,
  USE_CASES,
  WORKFLOW_STEPS,
} from "../lib/constants";
import { Button } from "./Button";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Section } from "./Section";

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Section
          eyebrow="The operating drag"
          title="Your best people are doing your least important work."
          description="Responin is built for teams where business context is scattered across chats, spreadsheets, dashboards, and human memory."
          id="problems"
        >
          <div className="problem-grid">
            {PROBLEMS.map((problem, index) => (
              <article className="card problem-card" key={problem}>
                <span aria-hidden="true">0{index + 1}</span>
                <p>{problem}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Product principles"
          title="A reliable operations worker, not another chatbot."
          description="The landing message map points to three pillars: memory, action, and control."
          id="workflows"
          tone="muted"
        >
          <div className="pillar-grid">
            {PILLARS.map((pillar) => (
              <article className="card pillar-card" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="How it works"
          title="From trigger to approved action."
          description="Responin separates reasoning from system control: AI drafts and recommends; the platform authorizes, meters, executes, and logs."
          id="process"
        >
          <ol className="timeline">
            {WORKFLOW_STEPS.map((step, index) => (
              <li className="timeline__item" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          eyebrow="First workflows"
          title="Start narrow, prove value, then expand."
          description="The system design docs recommend beginning with one repeatable workflow that can be measured and governed."
          id="use-cases"
          tone="muted"
        >
          <div className="use-case-grid">
            {USE_CASES.map((useCase) => (
              <article className="card use-case-card" key={useCase.title}>
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Trust model"
          title="Sensitive actions stay human-approved, logged, and scoped."
          description="Responin avoids over-autonomy by making approval, memory boundaries, auditability, and usage controls part of the product story."
          id="trust"
          tone="dark"
        >
          <ul className="trust-list">
            {TRUST_CONTROLS.map((control) => (
              <li key={control}>{control}</li>
            ))}
          </ul>
        </Section>

        <Section
          eyebrow="Buyer questions"
          title="Clear answers before the pilot starts."
          description="These answers reflect the system design guardrails and keep public claims conservative until measured evidence exists."
          id="faq"
        >
          <div className="faq-list">
            {FAQS.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </Section>

        <section className="pilot-cta" id="pilot" aria-labelledby="pilot-title">
          <p className="eyebrow">30-day pilot motion</p>
          <h2 id="pilot-title">Pick one messy workflow. Make it measurable.</h2>
          <p>
            Responin is designed to start with a focused operational workflow,
            report what changed, and expand only after the business case is
            clear.
          </p>
          <div className="hero-section__actions">
            <Button href="mailto:hello@responin.ai?subject=Responin%20workflow%20pilot">
              Start a workflow pilot
            </Button>
            <Button
              href={SITE.repo}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              Review system design
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
