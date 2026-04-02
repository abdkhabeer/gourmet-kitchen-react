import { useState } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

export default function Contact() {
  const ref = useFadeIn();
  const [form, setForm]       = useState({ name: '', phone: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ name: '', phone: '', message: '' });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="container">

        <div className="section-header fade-in">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-heading">Order Now or Ask Us Anything</h2>
          <div className="gold-divider" />
        </div>

        <div className="contact-grid">

          {/* ── Left: info ── */}
          <div className="contact-info fade-in">
            <h3>Reach us directly</h3>

            <div className="contact-item">
              <span className="contact-item-icon">📞</span>
              <a href="tel:+201118518559">+20 111 851 8559</a>
            </div>

            <div className="contact-item">
              <span className="contact-item-icon">🕐</span>
              <span>Open Daily: 2:00 PM – 9:00 PM</span>
            </div>

            <div className="contact-buttons">
              <a
                href="https://wa.me/201118518559"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa"
              >
                💬&nbsp; Chat on WhatsApp
              </a>
              <a
                href="https://chat.whatsapp.com/DUBNzK8GBgmEWy9WHTS0U3?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-outline"
              >
                👥&nbsp; Join Our WhatsApp Group
              </a>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="contact-form-wrap fade-in">
            <form onSubmit={handleSubmit} noValidate>

              <div className="form-group">
                <label htmlFor="f-name">Your Name</label>
                <input
                  id="f-name"
                  name="name"
                  type="text"
                  placeholder="e.g. Ahmed Hassan"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="f-phone">Phone Number</label>
                <input
                  id="f-phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g. +20 100 000 0000"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="f-message">Your Order / Message</label>
                <textarea
                  id="f-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us what you'd like to order or ask us anything…"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="form-submit">
                Send Message
              </button>

              <p className={`form-success${success ? ' show' : ''}`}>
                ✓ Message received! We'll be in touch on WhatsApp soon.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
