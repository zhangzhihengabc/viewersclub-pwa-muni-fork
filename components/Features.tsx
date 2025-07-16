import { Globe, Film, Mic, Smartphone } from 'lucide-react';

interface FeaturesProps {
  onFeatureClick?: (feature: string) => void;
}

const features = [
  {
    id: 'worldtv',
    icon: Globe,
    title: 'WorldTV',
    description: 'Access thousands of live TV channels from around the globe. News, sports, entertainment - all in one place.',
    color: 'from-red-500 to-pink-500',
    delay: '0ms'
  },
  {
    id: 'cinerama',
    icon: Film,
    title: 'Cinerama',
    description: 'Premium movie collection with the latest blockbusters, classic films, and exclusive series.',
    color: 'from-blue-500 to-cyan-500',
    delay: '100ms'
  },
  {
    id: 'karaoke',
    icon: Mic,
    title: 'Karaoke',
    description: 'Sing your heart out with our massive karaoke library featuring songs from every genre and era.',
    color: 'from-green-500 to-emerald-500',
    delay: '200ms'
  },
  {
    id: 'omniplayer',
    icon: Smartphone,
    title: 'OmniPlayer',
    description: 'Universal media player supporting all formats. Stream from any device, anywhere, anytime.',
    color: 'from-purple-500 to-indigo-500',
    delay: '300ms'
  }
];

export default function Features({ onFeatureClick }: FeaturesProps) {
  const handleFeatureClick = (featureId: string, featureName: string) => {
    if (onFeatureClick) {
      onFeatureClick(featureName);
    }
  };

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Entertainment Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive entertainment platform with features designed for every type of viewer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            
            return (
              <div
                key={feature.id}
                className="relative group cursor-pointer"
                onClick={() => handleFeatureClick(feature.id, feature.title)}
                style={{ animationDelay: feature.delay }}
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl border border-gray-700/50 shimmer-effect overflow-hidden">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Button */}
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/30">
                    Explore {feature.title}
                  </button>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl`} />
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Ready to experience the future of entertainment?
          </p>
          <button 
            onClick={() => onFeatureClick && onFeatureClick('Get Started')}
            className="btn-primary text-lg px-8 py-4"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}