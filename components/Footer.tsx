import { Facebook, Twitter, Instagram, Youtube, Music } from 'lucide-react';

interface FooterProps {
  onLinkClick?: (linkName: string) => void;
}

export default function Footer({ onLinkClick }: FooterProps) {
  const handleLinkClick = (linkName: string) => {
    if (onLinkClick) {
      onLinkClick(linkName);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="text-2xl font-black gradient-text mb-4">
              ViewersClub
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your ultimate entertainment destination for streaming, live TV, and more.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <button
                onClick={() => handleLinkClick('Facebook')}
                className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                title="Facebook"
              >
                <Facebook size={20} className="text-white group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={() => handleLinkClick('Twitter')}
                className="w-10 h-10 bg-white/10 hover:bg-blue-400 rounded-full flex items-center justify-center transition-all duration-300 group"
                title="Twitter"
              >
                <Twitter size={20} className="text-white group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={() => handleLinkClick('Instagram')}
                className="w-10 h-10 bg-white/10 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                title="Instagram"
              >
                <Instagram size={20} className="text-white group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={() => handleLinkClick('YouTube')}
                className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                title="YouTube"
              >
                <Youtube size={20} className="text-white group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={() => handleLinkClick('TikTok')}
                className="w-10 h-10 bg-white/10 hover:bg-black rounded-full flex items-center justify-center transition-all duration-300 group"
                title="TikTok"
              >
                <Music size={20} className="text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Entertainment Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-primary-400 mb-4">
              Entertainment
            </h3>
            <ul className="space-y-3">
              {['WorldTV', 'Cinerama', 'Karaoke', 'OmniPlayer', 'Live TV', 'Movies'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleLinkClick(item)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-primary-400 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {['VOD', 'My Channels', 'The Buzz', 'Cloud Star', 'Premium', 'Mobile App'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleLinkClick(item)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-primary-400 mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {['Help Center', 'Contact Us', 'FAQ', 'Terms of Service', 'Privacy Policy', 'About Us'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleLinkClick(item)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Local Services Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-primary-400 mb-4">
              Local Services
            </h3>
            <ul className="space-y-3">
              {['Food & Dining', 'Hotels & Stay', 'Shopping', 'Health & Wellness', 'Professional Services', 'Entertainment'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleLinkClick(item)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} ViewersClub. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with ❤️ for entertainment lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}