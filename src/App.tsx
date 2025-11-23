import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testinomials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';
import HowItWorks from './components/HowItWorks';
import AboutUs from './components/Aboutus';
import Partners from './components/Partners';
import SEO from './components/SEO';
import LLM from './pages/LLM';



function App() {
  const path=window.location.pathname;

  if(path==="/llm"){
    return <LLM/>
  }
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Inizio Interiors — Premium Interior Designers in Hyderabad"
        description="We design premium modular kitchens, wardrobes, living spaces and complete home interiors with modern craftsmanship and affordable luxury."
      />
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <AboutUs/>
      <Testimonials />
      <HowItWorks/>
      <Partners/>
      <Contact />
      <Footer />
      <GetStarted />


    </div>
  );
}

export default App;
