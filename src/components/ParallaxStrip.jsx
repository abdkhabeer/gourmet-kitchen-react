import { useFadeIn } from '../hooks/useFadeIn';

export default function ParallaxStrip() {
  const ref = useFadeIn();

  return (
    <div className="parallax-strip" ref={ref}>
      <div className="parallax-content fade-in">
        <h2>Every Dish Tells a Story</h2>
        <p>Made fresh. Delivered with love. Served with soul.</p>
      </div>
    </div>
  );
}
