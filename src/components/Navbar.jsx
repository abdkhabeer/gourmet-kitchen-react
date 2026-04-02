import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home',    href: '#hero' },
  { label: 'About',   href: '#about' },
  { label: 'Menu',    href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <a
            className="nav-logo"
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
          >
            The Gourmet Kitchen
          </a>

          <ul className="nav-links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} onClick={(e) => handleNavClick(e, href)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="hamburger"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`mobile-nav${mobileOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="mobile-close"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        >
          ✕
        </button>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={(e) => handleNavClick(e, href)}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
