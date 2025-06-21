
export const StatsSection = () => {
  const stats = [
    { number: "1500+", label: "Farmers Connected", icon: "🌾" },
    { number: "1000+", label: "Hectares Monitored", icon: "📍" },
    { number: "5", label: "Regions in India", icon: "🗺️" },
    { number: "91%", label: "Accuracy Rate", icon: "🎯" },
    { number: "5+", label: "Years Training Data", icon: "📊" },
    { number: "6", label: "Languages Supported", icon: "🌐" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Empowering Agriculture Across India
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
