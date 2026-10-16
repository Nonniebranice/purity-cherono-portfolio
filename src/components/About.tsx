import { Section } from "./Section";
import { content } from "../data/content";

export function About() {
  return (
    <Section
      id="about"
      label="01 — Introduction"
      title="About"
      aside="A short, honest read on who I am and how I work."
    >
      <div className="about-layout">
        <div className="about-image-wrapper reveal delay-1">
          <img
            src="/about-photo.jpg.jpg"
            alt="Purity Cherono"
            className="section-photo"
          />
          <div className="photo-gradient" />
        </div>
        <div className="about-content reveal delay-2">
          <div className="about-body">
            {content.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="about-stats">
            {content.highlights.map((h) => (
              <div key={h.label} className="stat-item">
                <div className="stat-label">{h.label}</div>
                <div className="stat-value">{h.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      label="02 — Capabilities"
      title="Skills & tooling"
      aside="Technologies and capabilities I work with."
    >
      <div className="skills-layout">
        <div className="skills-content reveal delay-1">
          <div className="skills-grid">
            {content.skills.map((g) => (
              <div key={g.title} className="skill-group">
                <h3>{g.title}</h3>
                <div className="chips">
                  {g.items.map((it) => (
                    <span className="chip" key={it}>
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-image-wrapper reveal delay-2">
          <img
            src="/skills-photo.jpg.jpeg"
            alt="Purity Cherono"
            className="section-photo"
          />
          <div className="photo-gradient" />
        </div>
      </div>
    </Section>
  );
}
