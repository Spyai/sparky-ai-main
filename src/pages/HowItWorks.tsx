
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How <span className="text-primary">SparkyAI</span> Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven 4-step process delivers 91% accuracy in crop health predictions, backed by
              5+ years of satellite data training. Discover how we transform raw satellite data into 
              actionable farming insights.
            </p>
          </div>

          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    01
                  </div>
                  <h2 className="text-3xl font-bold">Data Collection</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  We gather high-resolution satellite imagery and local weather feeds from multiple sources, 
                  analyzing NDVI, NDWI, SAVI indices and other satellite-derived layers at 9m x 9m resolution.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>High-resolution satellite imagery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Local weather data feeds</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Vegetation health indices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Soil moisture analysis</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20 p-8 rounded-lg">
                  <div className="text-6xl text-center mb-4">📡</div>
                  <h3 className="text-center text-xl font-semibold">Satellite Data Collection</h3>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-lg">
                  <div className="text-6xl text-center mb-4">🧠</div>
                  <h3 className="text-center text-xl font-semibold">AI Analysis Engine</h3>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    02
                  </div>
                  <h2 className="text-3xl font-bold">AI Analysis</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Our custom ML models, trained on 5+ years of historical data, analyze the collected information 
                  to deliver 91% accuracy in crop health predictions and disease detection.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Disease prediction models</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Yield estimation algorithms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Stress zone identification</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Carbon health assessment</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    03
                  </div>
                  <h2 className="text-3xl font-bold">Timely Advisory</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Get clear, actionable recommendations via WhatsApp or in-app alerts in your local language. 
                  Our multilingual support covers English, Hindi, Kannada, Telugu, Tamil, and Marathi.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>WhatsApp chatbot integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Multilingual support (6 languages)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Personalized recommendations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Market price updates</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gradient-to-br from-green-100 to-yellow-100 dark:from-green-900/20 dark:to-yellow-900/20 p-8 rounded-lg">
                  <div className="text-6xl text-center mb-4">💬</div>
                  <h3 className="text-center text-xl font-semibold">Smart Advisory System</h3>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-lg">
                  <div className="text-6xl text-center mb-4">👥</div>
                  <h3 className="text-center text-xl font-semibold">Community Network</h3>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    04
                  </div>
                  <h2 className="text-3xl font-bold">Community Support</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Benefit from our offline support network and peer learning groups across 5 regions in India. 
                  Connect with real agronomists when needed and learn from fellow farmers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Offline support network</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Peer learning groups</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Expert agronomist consultations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Regional agricultural insights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <div className="bg-primary/10 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Ready to Experience SparkyAI?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join 1500+ farmers who are already transforming their agriculture with our satellite intelligence platform.
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Start Your Free Farm Analysis
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
