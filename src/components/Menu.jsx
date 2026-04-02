import { useFadeIn } from '../hooks/useFadeIn';
import MenuCard from './MenuCard';
import { menuItems } from '../data/menuData';

export default function Menu() {
  const ref = useFadeIn();

  return (
    <section id="menu" className="menu-section" ref={ref}>
      <div className="container">

        <div className="section-header fade-in">
          <span className="section-label">What's Cooking</span>
          <h2 className="section-heading">Today's Menu</h2>
          <div className="gold-divider" />
        </div>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <MenuCard key={item.id} {...item} />
          ))}
        </div>

        <p className="menu-footer-note fade-in">
          Menu items change daily. Message us on WhatsApp for today's full selection.
        </p>
        <a
          className="menu-wa-link fade-in"
          href="https://wa.me/201118518559"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp &rarr;
        </a>

      </div>
    </section>
  );
}
