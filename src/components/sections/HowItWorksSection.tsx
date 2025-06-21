
export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Data Collection",
      description: "We gather high-resolution satellite imagery and local weather feeds from multiple sources.",
      icon: "📡"
    },
    {
      number: "02", 
      title: "AI Analysis",
      description: "Our models, trained on 5+ years of historical data, deliver 91% accuracy in crop health predictions.",
      icon: "🧠"
    },
    {
      number: "03",
      title: "Timely Advisory",
      description: "Get clear, actionable recommendations via WhatsApp or in-app alerts in your local language.",
      icon: "💬"
    },
    {
      number: "04",
      title: "Community Support", 
      description: "Benefit from our offline support network and peer learning groups across 5 regions.",
      icon: "👥"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-primary">SparkyAI</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 4-step process delivers 91% accuracy in crop health predictions, backed by
            5+ years of satellite data training.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 z-0"></div>
              )}
              
              <div className="text-center relative z-10 animate-fade-in" style={{ animationDelay: `${index * 300}ms` }}>
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
