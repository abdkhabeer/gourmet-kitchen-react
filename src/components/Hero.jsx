export default function Hero() {
  const scrollToMenu = (e) => {
    e.preventDefault();
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <span className="hero-label">Handcrafted with Love</span>
        <h1 className="hero-title">
          The Gourmet<br />Kitchen
        </h1>
        <p className="hero-sub">
          Cairo's finest home-cooked meals, prepared fresh and delivered daily
        </p>
        <a href="#menu" className="btn-primary" onClick={scrollToMenu}>
          View Today's Menu
        </a>
        <span className="hero-hours">Open daily &nbsp;·&nbsp; 2:00 PM – 9:00 PM</span>
      </div>
    </section>
  );
}
