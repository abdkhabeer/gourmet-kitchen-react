import ScrollToTopLink from './ScrollToTopLink';

const NAV_LINKS = [
  { label: 'Home',    href: '#hero' },
  { label: 'About',   href: '#about' },
  { label: 'Menu',    href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* ── Col 1: Brand ── */}
          <div>
            <p className="footer-logo">The Gourmet Kitchen</p>
            <p className="footer-tagline">
              Handcrafted meals,<br />delivered with love.
            </p>
            <a href="tel:+201118518559" className="footer-contact-link">
              📞 +20 111 851 8559
            </a>
            <a
              href="https://wa.me/201118518559"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              💬 WhatsApp Us
            </a>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <p className="footer-col-heading">Quick Links</p>
            <ul className="footer-links">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <ScrollToTopLink href={href}>{label}</ScrollToTopLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Hours & Contact ── */}
          <div>
            <p className="footer-col-heading">Hours &amp; Contact</p>
            <p className="footer-hours">
              Open Daily<br />2:00 PM – 9:00 PM
            </p>
            <a href="tel:+201118518559" className="footer-contact-link">
              +20 111 851 8559
            </a>
            <a
              href="https://wa.me/201118518559"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
              style={{ color: 'var(--gold)' }}
            >
              WhatsApp Us
            </a>
            <a
              href="https://chat.whatsapp.com/DUBNzK8GBgmEWy9WHTS0U3?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              Join WhatsApp Group
            </a>
          </div>

        </div>

        <hr className="footer-rule" />
        <p className="footer-bottom">
          &copy; {new Date().getFullYear()} The Gourmet Kitchen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
