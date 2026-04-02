import { BrowserRouter } from 'react-router-dom';
import ScrollToTop    from './components/ScrollToTop';
import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import About          from './components/About';
import Menu           from './components/Menu';
import ParallaxStrip  from './components/ParallaxStrip';
import Gallery        from './components/Gallery';
import Contact        from './components/Contact';
import Footer         from './components/Footer';
import ScrollTopFAB   from './components/ScrollTopFAB';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <ParallaxStrip />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ScrollTopFAB />
    </BrowserRouter>
  );
}
