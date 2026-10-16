import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  aside?: ReactNode;
  children: ReactNode;
};

export function Section({ id, label, title, aside, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="section-head reveal">
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="section-label">{label}</div>
            <h2 className="section-title">{title}</h2>
          </div>
          {aside && <p className="section-aside">{aside}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}