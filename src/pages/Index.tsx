
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
import { ClientOnly } from "@/components/ClientOnly";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ClientOnly
        fallback={
          <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-950/20 pt-24">
            <div className="container mx-auto px-4 text-center">
              <div className="text-lg text-gray-600 dark:text-gray-300">Loading...</div>
            </div>
          </section>
        }
      >
        <HeroSection />
      </ClientOnly>
      <ValuePropsSection />
      <MLModelsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <ClientOnly>
        <AiGuide />
        <WhatsAppFloat />
        <CursorTracker />
      </ClientOnly>
    </div>
  );
};

export default Index;
