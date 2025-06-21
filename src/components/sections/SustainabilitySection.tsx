
export const SustainabilitySection = () => {
  const practices = [
    {
      icon: "🎯",
      title: "Precision Nitrogen Application",
      description: "Optimize fertilizer usage based on real-time soil and crop analysis"
    },
    {
      icon: "💧",
      title: "Water-saving Irrigation Alerts", 
      description: "Smart irrigation recommendations to conserve water resources"
    },
    {
      icon: "🔄",
      title: "Crop Rotation + Intercropping",
      description: "Sustainable farming practices to improve soil health"
    },
    {
      icon: "🌿",
      title: "Bio-fertilizer Usage",
      description: "Soil condition-based organic fertilizer recommendations"
    },
    {
      icon: "🛡️",
      title: "Disease Prevention",
      description: "Early alerts that reduce pesticide dependency"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sustainability Focus
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform suggests context-specific low-cost, eco-friendly methods that promote sustainable agriculture
            while maximizing yields and minimizing environmental impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <div 
              key={index}
              className="p-6 bg-card rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl mb-4">{practice.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
                {practice.title}
              </h3>
              <p className="text-muted-foreground">{practice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
