
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary/10 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/5422e3a0-c113-4836-83dc-61eb88a401d4.png" 
                alt="SparkyAI Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-primary">SparkyAI</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Transforming agriculture through cutting-edge satellite intelligence and AI-powered insights.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/sparkyai-private-limited/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground">Crop Health Monitoring</span></li>
              <li><span className="text-muted-foreground">Yield Prediction</span></li>
              <li><span className="text-muted-foreground">Soil Analysis</span></li>
              <li><span className="text-muted-foreground">Weather Insights</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Languages Supported</h4>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground">English</span></li>
              <li><span className="text-muted-foreground">Hindi</span></li>
              <li><span className="text-muted-foreground">Kannada</span></li>
              <li><span className="text-muted-foreground">Telugu</span></li>
              <li><span className="text-muted-foreground">Tamil</span></li>
              <li><span className="text-muted-foreground">Marathi</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 SparkyAI Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
