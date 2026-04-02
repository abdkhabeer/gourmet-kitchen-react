/**
 * Footer navigation link that:
 * 1. Instantly jumps to page top
 * 2. Then smoothly scrolls to the target section
 */
export default function ScrollToTopLink({ href, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (href && href !== '#') {
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
