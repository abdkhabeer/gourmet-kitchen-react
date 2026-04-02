import { useState, useEffect } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { galleryImages } from '../data/galleryData';

const FALLBACK =
  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%232A2A2A"/><text x="50%" y="55%" text-anchor="middle" font-size="32" fill="%23C9A84C">🍴</text></svg>';

export default function Gallery() {
  const ref = useFadeIn();
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const openLightbox  = (src) => { setLightboxSrc(src); document.body.style.overflow = 'hidden'; };
  const closeLightbox = ()    => { setLightboxSrc(null); document.body.style.overflow = ''; };

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="gallery" className="gallery-section" ref={ref}>
      <div className="container">

        <div className="section-header fade-in">
          <span className="section-label">Our Kitchen</span>
          <h2 className="section-heading">A Taste of What We Do</h2>
          <div className="gold-divider" />
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className="gallery-item fade-in"
              onClick={() => openLightbox(img.src)}
              role="button"
              tabIndex={0}
              aria-label={`View ${img.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                onError={(e) => { e.currentTarget.src = FALLBACK; }}
              />
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <div
        className={`lightbox${lightboxSrc ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
      >
        <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
        {lightboxSrc && (
          <img src={lightboxSrc} alt="Gallery image enlarged" />
        )}
      </div>
    </section>
  );
}
