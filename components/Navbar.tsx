import { useState, useEffect } from 'react';
import { Search, User, Menu, X } from 'lucide-react';

interface NavbarProps {
  onFeatureClick?: (feature: string) => void;
}

export default function Navbar({ onFeatureClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleFeatureClick = (feature: string) => {
    if (onFeatureClick) {
      onFeatureClick(feature);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md' 
          : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-black gradient-text">
                ViewersClub
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a 
                  href="#home" 
                  onClick={() => handleNavClick('#home')}
                  className="text-white hover:text-primary-400 transition-colors duration-300 font-medium cursor-pointer"
                >
                  Home
                </a>
                <a 
                  href="#features" 
                  onClick={() => handleNavClick('#features')}
                  className="text-white hover:text-primary-400 transition-colors duration-300 font-medium cursor-pointer"
                >
                  Features
                </a>
                <a 
                  href="#services" 
                  onClick={() => handleNavClick('#services')}
                  className="text-white hover:text-primary-400 transition-colors duration-300 font-medium cursor-pointer"
                >
                  Services
                </a>
                <a 
                  href="#promotions" 
                  onClick={() => handleNavClick('#promotions')}
                  className="text-white hover:text-primary-400 transition-colors duration-300 font-medium cursor-pointer"
                >
                  Promotions
                </a>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => handleFeatureClick('Search')}
                className="text-white hover:text-primary-400 transition-colors duration-300 p-2"
                title="Search"
              >
                <Search size={20} />
              </button>
              <button 
                onClick={() => handleFeatureClick('Profile')}
                className="text-white hover:text-primary-400 transition-colors duration-300 p-2"
                title="Profile"
              >
                <User size={20} />
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white hover:text-primary-400 transition-colors duration-300 p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                onClick={() => handleNavClick('#home')}
                className="block px-3 py-2 text-white hover:text-primary-400 transition-colors duration-300 font-medium cursor-pointer"
              >
                Home
              </a>
              <a
                href="#features"
                onClick={() => handleNavClick('#features')}
                className="block px-3 py-2 text-white hover:text-primary-400 transition-colors duration-300 font-medium cursor-pointer"
              >
                Features
              </a>
              <a
                href="#services"
                onClick={() => handleNavClick('#services')}
                className="block px-3 py-2 text-white hover:text-primary-400 transition-colors duration-300 font-medium cursor-pointer"
              >
                Services
              </a>
              <a
                href="#promotions"
                onClick={() => handleNavClick('#promotions')}
                className="block px-3 py-2 text-white hover:text-primary-400 transition-colors duration-300 font-medium cursor-pointer"
              >
                Promotions
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}