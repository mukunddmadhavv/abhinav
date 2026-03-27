import ContactSection from "./components/ContactSection";
import FloatingContactBar from "./components/FloatingContactBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PromoStrip from "./components/PromoStrip";
import ServicesSection from "./components/ServicesSection";
import BrandMarquee from "./components/BrandMarquee";
import { defaultWhatsAppMessage } from "./utils/whatsapp";

function App() {
  const enquiryHref = defaultWhatsAppMessage();

  return (
    <div className="bg-mist text-ink">
      <Header enquiryHref={enquiryHref} />

      <main>
        <HeroSection enquiryHref={enquiryHref} />
        <PromoStrip />
        <BrandMarquee />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingContactBar enquiryHref={enquiryHref} />
    </div>
  );
}

export default App;
