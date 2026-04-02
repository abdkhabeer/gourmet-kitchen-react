export default function MenuCard({ icon, name, subtitle, description, prices }) {
  return (
    <article className="menu-card fade-in">
      <span className="menu-icon">{icon}</span>
      <h3 className="menu-name">{name}</h3>
      <p className="menu-subtitle">{subtitle}</p>
      <p className="menu-desc">{description}</p>
      <div className="price-tags">
        {prices.map((p, i) => (
          <span key={i} className="price-tag">
            {p.label ? `${p.label} — ${p.amount}` : p.amount}
          </span>
        ))}
      </div>
    </article>
  );
}
