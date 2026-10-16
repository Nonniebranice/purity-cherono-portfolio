import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { content } from "../data/content";

export function Projects() {
  return (
    <Section
      id="work"
      label="03 — Selected work"
      title="Projects"
      aside="A selection of recent projects. Each entry links to a live demo and source when available."
    >
      <div className="projects-layout">
        <div className="projects-content reveal delay-1">
          <div className="projects-list">
            {content.projects.length === 0 ? (
              <div className="project-empty">
                No projects yet. Add your real projects to <code>src/data/content.ts</code>.
              </div>
            ) : (
              content.projects.map((p) => (
                <article key={p.number} className="project">
                  <div className="project-index">{p.number}</div>
                  <h3 className="project-title">{p.title}</h3>
                  <div className="project-meta">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <p className="project-desc">{p.description}</p>
                  <div className="project-links">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer">
                        Live <ExternalLink size={12} />
                      </a>
                    )}
                    {p.code && (
                      <a href={p.code} target="_blank" rel="noopener noreferrer">
                        Source <Code2 size={12} />
                      </a>
                    )}
                    <a href="#contact">
                      Case study <ArrowUpRight size={12} />
                    </a>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
        <div className="projects-image-wrapper reveal delay-2">
          <img
            src="/work-photo.jpg.jpeg"
            alt="Purity Cherono"
            className="section-photo"
          />
          <div className="photo-gradient" />
        </div>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      label="04 — Background"
      title="Experience"
      aside="Academic background and professional development."
    >
      <div className="experience-layout">
        <div className="experience-content reveal delay-1">
          <div className="timeline">
            {content.experience.length === 0 ? (
              <p style={{ color: "var(--text-muted)" }}>
                No entries yet. Add your real experience to <code>src/data/content.ts</code>.
              </p>
            ) : (
              content.experience.map((r, i) => (
                <div key={i} className="tl-item">
                  <div className="tl-role">{r.title}</div>
                  <div className="tl-org">{r.org}</div>
                  <div className="tl-period">{r.period}</div>
                  <ul>
                    {r.points.map((pt, k) => (
                      <li key={k} style={{ marginBottom: "0.4rem" }}>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="experience-image-wrapper reveal delay-2">
          <img
            src="/experience-photo.jpg.jpeg"
            alt="Purity Cherono"
            className="section-photo"
          />
          <div className="photo-gradient" />
        </div>
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" label="05 — Get in touch" title="Contact" aside="A brief note on the best way to reach me.">
      <div className="contact-layout">
        <div className="contact-image-wrapper reveal delay-1">
          <img
            src="/contact-photo.jpg.jpeg"
            alt="Purity Cherono"
            className="section-photo"
          />
          <div className="photo-gradient" />
        </div>
        <div className="contact-card reveal delay-2">
          <h3 className="contact-title">
            Let's build something <em>meaningful.</em>
          </h3>
          <p className="contact-note">{content.contactNote}</p>
          <div className="contact-actions">
            {content.email && !content.email.includes("REPLACE") ? (
              <>
                <a className="contact-row" href={`mailto:${content.email}`}>
                  <ArrowUpRight size={15} /> {content.email}
                </a>
                <a className="btn btn-primary" href={`mailto:${content.email}`} style={{ marginTop: "0.5rem", width: "fit-content" }}>
                  Send an email <ArrowUpRight size={14} />
                </a>
              </>
            ) : null}
          </div>
          <div className="socials">
            {content.socials.length > 0 ? (
              content.socials.map((s) => (
                <a
                  key={s.label}
                  className="social-chip"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label} <ArrowUpRight size={12} />
                </a>
              ))
            ) : null}
          </div>
        </div>
      </div>
    </Section>
  );
}
