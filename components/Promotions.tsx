import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin, ExternalLink, AlertCircle } from 'lucide-react';
import { fetchRightMenuItemsCached, getImageUrl, type MenuItem } from '../lib/api';

interface PromotionsProps {
  onPromotionClick?: (promotionName: string, url?: string) => void;
}

export default function Promotions({ onPromotionClick }: PromotionsProps) {
  const [promotions, setPromotions] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPromotions = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchRightMenuItemsCached();
        setPromotions(data);
      } catch (err) {
        setError('Failed to load promotions. Please try again later.');
        console.error('Error loading promotions:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPromotions();
  }, []);

  const handlePromotionClick = (promotion: MenuItem) => {
    if (onPromotionClick) {
      onPromotionClick(promotion.name, promotion.web_url || undefined);
    }
  };

  const getPromotionDescription = (promotionName: string) => {
    const descriptions: { [key: string]: string } = {
      'Convenience Store': 'Find nearby convenience stores for your daily needs',
      'Food': 'Discover local restaurants and dining options',
      'Coffee Shop': 'Locate the best coffee shops in your area',
      'Restobar': 'Enjoy dining and entertainment at local restobars',
      'Delicacy Shop': 'Explore specialty food shops and delicacies',
      'Souvenir Shop': 'Find unique souvenirs and local crafts',
      'Mall': 'Discover shopping centers and retail destinations',
      'Boutique': 'Browse fashionable boutiques and clothing stores',
      'Resort': 'Find luxury resorts and vacation destinations',
      'Bed & Breakfast': 'Cozy accommodations with personal touch',
      'Hotel': 'Comfortable hotel stays for business and leisure',
      'Condotel': 'Modern condominium-style accommodations',
      'Spa and Wellness': 'Relaxation and wellness services nearby',
      'Hair & Nail Salon': 'Professional beauty and grooming services',
      'Gas Station': 'Convenient fuel stops and automotive services',
      'Auto Repair': 'Reliable vehicle maintenance and repair services',
      'Church': 'Local places of worship and spiritual guidance',
      'Clinic & Hospital': 'Healthcare facilities and medical services',
      'Pharmacy': 'Prescription medications and health products',
      'Doctor': 'Professional medical consultations and care',
      'Police Station': 'Local law enforcement and emergency services',
      'School': 'Educational institutions and learning centers',
      'Flower Shop': 'Beautiful flowers for special occasions',
      'Pawnshop': 'Buy, sell, and loan services',
      'Optical Shop': 'Eye care and vision services',
      'Dental Clinic': 'Professional dental care and services',
      'Speciality Bakery': 'Artisan baked goods and specialty items',
      'Cake Shop': 'Custom cakes and sweet treats',
      'Fastfood': 'Quick and convenient dining options',
      'Speciality Snacks': 'Unique snacks and specialty food items'
    };
    
    return descriptions[promotionName] || `Find local ${promotionName.toLowerCase()} services in your area`;
  };

  if (loading) {
    return (
      <section id="promotions" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Local Services & Promotions</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 animate-pulse">
                <div className="w-12 h-12 bg-gray-700 rounded-lg mx-auto mb-3" />
                <div className="h-4 bg-gray-700 rounded mb-2" />
                <div className="h-3 bg-gray-700 rounded mb-3" />
                <div className="h-8 bg-gray-700 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="promotions" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Local Services & Promotions</h2>
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
    <section id="promotions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 via-pink-900 to-red-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Local Services & Promotions</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover local businesses and services in your area with exclusive promotions and offers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {promotions.map((promotion, index) => (
            <div
              key={promotion.id}
              className="group cursor-pointer"
              onClick={() => handlePromotionClick(promotion)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl border border-white/20 shimmer-effect overflow-hidden">
                {/* Promotion Image */}
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-white/20 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={getImageUrl(promotion.image)}
                    alt={promotion.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = '🏪';
                    }}
                  />
                </div>

                {/* Promotion Title */}
                <h3 className="text-sm font-semibold text-white mb-2 text-center group-hover:text-yellow-300 transition-colors">
                  {promotion.name}
                </h3>

                {/* Promotion Description */}
                <p className="text-xs text-white/80 text-center mb-3 leading-relaxed">
                  {promotion.sub_title || getPromotionDescription(promotion.name)}
                </p>

                {/* Promotion Button */}
                <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 px-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-1 text-xs border border-white/30 hover:border-white/50">
                  {promotion.web_url ? (
                    <>
                      <ExternalLink size={12} />
                      Visit
                    </>
                  ) : (
                    <>
                      <MapPin size={12} />
                      Find Near Me
                    </>
                  )}
                </button>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {promotions.length === 0 && !loading && (
          <div className="text-center py-16">
            <p className="text-white/70 text-lg mb-4">No promotions available at the moment</p>
            <button 
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Refresh Promotions
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-white/90 mb-6 text-lg">
            Want to list your business here?
          </p>
          <button 
            onClick={() => onPromotionClick && onPromotionClick('Business Listing', undefined)}
            className="bg-white/20 hover:bg-white/30 text-white py-3 px-8 rounded-full font-semibold transition-all duration-300 border border-white/30 hover:border-white/50"
          >
            List Your Business
          </button>
        </div>
      </div>
    </section>
  );
}