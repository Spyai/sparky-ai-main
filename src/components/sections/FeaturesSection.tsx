
export const FeaturesSection = () => {
  const features = [
    {
      icon: "🛰️",
      title: "Satellite-Powered Monitoring",
      description: "AI-powered satellite imagery analytics with 9m x 9m resolution for precise crop health monitoring and vegetation analysis."
    },
    {
      icon: "💬",
      title: "WhatsApp Advisory",
      description: "Multilingual support in English, Hindi, Kannada, Telugu, Tamil, and Marathi through conversational AI chatbot."
    },
    {
      icon: "📊",
      title: "Real-time Data Integration",
      description: "One-stop solution integrating crop health, weather conditions, soil moisture, elevation, and field activities data."
    },
    {
      icon: "🌱",
      title: "Sustainable Agriculture",
      description: "Promote eco-friendly farming with precision nitrogen application, water-saving alerts, and bio-fertilizer recommendations."
    },
    {
      icon: "📈",
      title: "Predictive Analytics",
      description: "Advanced ML models with 91% accuracy backed by 5+ years of satellite data training for yield prediction."
    },
    {
      icon: "🏪",
      title: "Market Intelligence",
      description: "Get current APMC market prices and trends for your specific crops to make informed selling decisions."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Timely Data for Digital Farming Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We develop deep neural network models and agtech solutions for accurately detecting field boundaries and
            seeded acres in precision farming. Let us help you take your agriculture business to the next level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-card rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
