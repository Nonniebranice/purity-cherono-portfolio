import { content } from "../data/content";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="site">
      <div className="container footer-inner">
        <div>&copy; {CURRENT_YEAR} {content.name}. {content.footer}</div>
        <div style={{ display: "flex", gap: "1rem", color: "var(--muted-2)" }}>
          <span>Portfolio - V1</span>
        </div>
      </div>
    </footer>
  );
}