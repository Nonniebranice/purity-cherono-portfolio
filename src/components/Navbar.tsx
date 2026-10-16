import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { content } from "../data/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const brandInitial = content.name.trim().slice(0, 1) || "P";

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#top" aria-label="Home">
          <span className="brand-mark">{brandInitial}</span>
          <span className="brand-text">{content.name}</span>
        </a>
        <button
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
              Say hello <ArrowUpRight size={13} style={{ verticalAlign: "middle" }} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
