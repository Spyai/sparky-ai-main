
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Agriculture?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join 1500+ farmers who are already using satellite intelligence to optimize their farming operations.
          Start your free farm analysis today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="secondary"
            className="px-8 py-3 text-lg hover:scale-105 transition-transform"
          >
            Start Free Farm Analysis
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-3 text-lg border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
          >
            Contact Our Experts
          </Button>
        </div>
      </div>
    </section>
  );
};
