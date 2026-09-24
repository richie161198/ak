import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KnowSection from "./components/KnowSection";
import ProcessSection from "./components/ProcessSection";
import ProductsSection from "./components/ProductsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import { FooterThree } from "./components/footer2";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { FaqTwo } from "./components/faq";
import { ContactUs } from "./components/contact_us";
import { MapOne } from "./components/MapOne";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductsSection />
        <ProcessSection />
        <KnowSection />
        <TestimonialsSection />
        <MapOne />
        <FaqTwo />
        <ContactUs />
      </main>
      <FooterThree />
      <WhatsAppFloat />
    </>
  );
}

export default App;
