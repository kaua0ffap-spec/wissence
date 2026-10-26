import "@/App.css";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Specialties } from "@/components/landing/Specialties";
import { Differentials } from "@/components/landing/Differentials";
import { Audience } from "@/components/landing/Audience";
import { Testimonials } from "@/components/landing/Testimonials";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { LocationContact } from "@/components/landing/LocationContact";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

function App() {
  return (
    <div className="min-h-screen bg-[#382A22] font-body antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Differentials />
        <Audience />
        <Testimonials />
        <CtaBanner />
        <LocationContact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
