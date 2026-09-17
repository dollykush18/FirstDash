import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';

import Hero from './sections/Hero';
import WhyWebsite from './sections/WhyWebsite';
import Services from './sections/Services';
import Work from './sections/Work';
import CaseStudy from './sections/CaseStudy';
import Process from './sections/Process';
import About from './sections/About';
import WhyUs from './sections/WhyUs';
import Pricing from './sections/Pricing';
import TestimonialsFaq from './sections/TestimonialsFaq';
import Contact from './sections/Contact';
import Social from './sections/Social';

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <WhyWebsite />
        <Services />
        <Work />
        <CaseStudy />
        <Process />
        <About />
        <WhyUs />
        <Pricing />
        <TestimonialsFaq />
        <Contact />
        <Social />
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
