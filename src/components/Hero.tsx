import { ArrowRight, ArrowUpRight } from "lucide-react";
import { content } from "../data/content";

export function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-grid">
        <div className="hero-image-side reveal delay-1">
          <div className="hero-image-wrapper">
            <img
              src="/Purity%20cherono-photo.jpg.jpeg"
              alt="Portrait of Purity Cherono"
              className="hero-section-photo"
            />
            <div className="photo-gradient" />
          </div>
        </div>
        <div className="hero-text-side reveal delay-2">
          <div className="hero-label">Portfolio — {content.availability}</div>
          <h1 className="hero-headline">
            PURITY CHERONO
            <span className="serif">· Health Informatics Student &amp; Developer</span>
          </h1>
          <p className="hero-sub">{content.heroIntro}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              View my work <ArrowRight size={14} />
            </a>
            <a className="btn btn-ghost" href="#contact">
              Say hello <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <span className="dot" aria-hidden="true" />
              {content.location}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
