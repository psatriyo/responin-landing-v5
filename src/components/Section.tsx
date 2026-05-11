import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  tone?: "default" | "muted" | "dark";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  tone = "default",
}: SectionProps) {
  return (
    <section
      className={`section section--${tone}`}
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <div className="section__header">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 id={id ? `${id}-title` : undefined}>{title}</h2>
        {description ? (
          <p className="section__description">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
