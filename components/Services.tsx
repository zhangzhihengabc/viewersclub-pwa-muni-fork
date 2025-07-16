import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ExternalLink, AlertCircle } from 'lucide-react';
import { fetchLeftMenuItemsCached, getImageUrl, type MenuItem } from '../lib/api';

interface ServicesProps {
  onServiceClick?: (serviceName: string, url?: string) => void;
}

export default function Services({ onServiceClick }: ServicesProps) {
  const [services, setServices] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadServices = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchLeftMenuItemsCached();
        setServices(data);
      } catch (err) {
        setError('Failed to load services. Please try again later.');
        console.error('Error loading services:', err);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  const handleServiceClick = (service: MenuItem) => {
    if (onServiceClick) {
      onServiceClick(service.name, service.web_url || undefined);
    }
  };

  const getServiceDescription = (serviceName: string) => {
    const descriptions: { [key: string]: string } = {
      'VOD': 'Access your video-on-demand library with premium content',
      'My Channels': 'Manage and customize your personal channel lineup',
      'The Buzz': 'Stay updated with the latest entertainment news and trends',
      'E-Rentamo': 'Rental management system for your business needs',
      'Studynow': 'Educational platform for online learning and courses',
      'Cloud Star': 'Cloud-based entertainment and media services',
      'Wing Express': 'Fast food delivery service at your fingertips',
      'EZ Send': 'Quick and easy money transfer and payment solutions',
      'Pay Nano': 'Digital payment platform for seamless transactions',
      'RideOn': 'Transportation and ride-sharing services',
      'Place to Place': 'Location-based services and navigation',
      'Mi Warehouse': 'Warehouse management and inventory solutions',
      'Mi Factory': 'Manufacturing and production management tools',
      'Mi Business': 'Complete business management suite',
      'Trend': 'Track trending content and popular entertainment',
      'Settings': 'Customize your ViewersClub experience'
    };
    
    return descriptions[serviceName] || `Access ${serviceName} features and services`;
  };

  if (loading) {
    return (
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">User Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 animate-pulse">
                <div className="w-20 h-20 bg-gray-700 rounded-xl mx-auto mb-4" />
                <div className="h-6 bg-gray-700 rounded mb-2" />
                <div className="h-4 bg-gray-700 rounded mb-4" />
                <div className="h-10 bg-gray-700 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">User Services</h2>
          </div>
          
          <div className="text-center">
            <AlertCircle className="mx-auto mb-4 text-red-500" size={48} />
            <p className="text-red-400 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">User Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of services designed to enhance your entertainment experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group cursor-pointer"
              onClick={() => handleServiceClick(service)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl border border-gray-700/50 shimmer-effect overflow-hidden">
                {/* Service Image */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={getImageUrl(service.image)}
                    alt={service.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = '🔧';
                    }}
                  />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-semibold text-secondary-400 mb-3 text-center group-hover:text-secondary-300 transition-colors">
                  {service.name}
                </h3>

                {/* Service Description */}
                <p className="text-gray-400 text-center mb-4 leading-relaxed text-sm">
                  {service.sub_title || getServiceDescription(service.name)}
                </p>

                {/* Service Button */}
                <button className="w-full bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                  {service.web_url ? (
                    <>
                      <ExternalLink size={16} />
                      Open Service
                    </>
                  ) : (
                    'Coming Soon'
                  )}
                </button>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary-500/20 to-secondary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {services.length === 0 && !loading && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg mb-4">No services available at the moment</p>
            <button 
              onClick={() => window.location.reload()}
              className="btn-secondary"
            >
              Refresh Services
            </button>
          </div>
        )}
      </div>
    </section>
  );
}