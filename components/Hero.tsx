import { Play } from 'lucide-react';

interface HeroProps {
  onGetStarted?: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg gradient-bg-pattern">
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block">Stream Everything,</span>
            <span className="block gradient-text">Everywhere</span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 max-w-3xl mx-auto">
            Movies, TV Shows, Live Channels, Karaoke & More
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleGetStarted}
              className="btn-primary text-lg px-8 py-4 flex items-center gap-2 group"
            >
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              Start Streaming Now
            </button>
            
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-accent-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
}