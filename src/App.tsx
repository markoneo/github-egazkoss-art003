import HeroNew from './components/HeroNew';
import WhatWeDo from './components/WhatWeDo';
import OurBrands from './components/OurBrands';
import About from './components/About';
import ContactNew from './components/ContactNew';
import Footer from './components/Footer';
import SplashCursor from './components/SplashCursor';

function App() {
  return (
    <div className="min-h-screen">
      <SplashCursor />
      <HeroNew />
      <WhatWeDo />
      <OurBrands />
      <About />
      <ContactNew />
      <Footer />
    </div>
  );
}

export default App;
