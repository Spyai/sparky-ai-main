
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { LanguageSelector } from "@/components/ui/LanguageSelector";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/5422e3a0-c113-4836-83dc-61eb88a401d4.png" 
              alt="SparkyAI Logo" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-primary">SparkyAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/how-it-works" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/how-it-works') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              How It Works
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/services') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Contact
            </Link>
            <LanguageSelector />
            <Button asChild>
              <a href="https://sparky-ai-dashboard-new.vercel.app/" target="_blank" rel="noopener noreferrer">
                Start Free Analysis 
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <Link to="/" className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link to="/how-it-works" className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary">
                How It Works
              </Link>
              <Link to="/services" className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary">
                Services
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full" asChild>
                  <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                    Start Free Analysis
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
