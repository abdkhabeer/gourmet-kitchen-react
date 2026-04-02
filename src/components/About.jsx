import { useFadeIn } from '../hooks/useFadeIn';

const FALLBACK =
  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%231A1A1A"/><text x="50%" y="55%" text-anchor="middle" font-size="32" fill="%23C9A84C">🍴</text></svg>';

export default function About() {
  const ref = useFadeIn();

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <div className="about-grid">

          <div className="about-image-wrap fade-in">
            <img
              src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80"
              alt="Chef preparing food in the kitchen"
              loading="lazy"
              onError={(e) => { e.currentTarget.src = FALLBACK; }}
            />
          </div>

          <div className="about-text fade-in">
            <span className="section-label">Our Story</span>
            <h2 className="section-heading">
              Cooking is Our<br />Love Language
            </h2>
            <p>
              The Gourmet Kitchen was born from a simple idea — great food, made from scratch,
              served with heart. Every dish we prepare uses fresh ingredients and traditional
              techniques passed down with care. Whether you're ordering a quick weekday meal or
              planning something special, we cook each plate as if it's for our own family.
            </p>
            <p>
              Based in Cairo, we deliver home-style cooking that warms the soul. Find us every
              day between 2 PM and 9 PM, or reach out via WhatsApp to place your order — we're
              always happy to hear from you.
            </p>
            <a
              href="https://wa.me/201118518559"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Order on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
