
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CursorTracker } from "@/components/ui/CursorTracker";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import AiGuide from "@/components/ai-guide";
import ValuePropsSection from "@/components/ValuePropSection";
import MLModelsSection from "../components/MLModelSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ValuePropsSection />
      <MLModelsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <AiGuide />
      
      {/* Interactive Components */}
    <WhatsAppFloat />
      <CursorTracker />
    </div>
  );
};

export default Index;
