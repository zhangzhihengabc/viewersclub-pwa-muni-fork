import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sample API data (from your provided JSON)
  const leftMenuData = [
    {
      "id": 2,
      "name": "VOD",
      "sub_title": null,
      "image": "GREENLEFTLauncherButtonUSERSUPLOAD.png",
      "web_url": null
    },
    {
      "id": 77,
      "name": "My Channels",
      "sub_title": null,
      "image": "GREENLEFTLauncherButtonMYCHANNEL.png",
      "web_url": null
    },
    {
      "id": 4,
      "name": "The Buzz",
      "sub_title": null,
      "image": "GREENLEFTLauncherButtonTHEBUZZ.png",
      "web_url": null
    },
    {
      "id": 14,
      "name": "E-Rentamo",
      "sub_title": null,
      "image": "GREENLEFTLauncherButtonERENTAMO.png",
      "web_url": "http://erentamo.retaileradmin.com/"
    },
    {
      "id": 9,
      "name": "Studynow",
      "sub_title": null,
      "image": "GREENLEFTLauncherButtonSTUDYNOWPAYLATER.png",
      "web_url": "http://studynow.pineapps.online/"
    },
    {
      "id": 3,
      "name": "Cloud Star",
      "sub_title": null,
      "image": "GREENLEFTLauncherButtonCLOUDSTAR.png",
      "web_url": null
    },
    {
      "id": 16,
      "name": "Wing Express",
      "sub_title": null,
      "image": "GREENLEFTLauncherButtonWINGEXPRESS.png",
      "web_url": "http://fooduser.pineapps.online/"
    },
    {
      "id": 5,
      "name": "EZ Send",
      "sub_title": null,
      "image": "GREENLEFTLauncherButtonEZSEND.png",
      "web_url": null
    },
    {
      "id": 6,
      "name": "Pay Nano",
      "sub_title": null,
      "image": "GREENLEFTLauncherButtonPAYNANO.png",
      "web_url": "http://ezpay.msgnaa.info:3000/"
    },
    {
      "id": 1,
      "name": "Settings",
      "sub_title": null,
      "image": "GREENLEFTLauncherButtonSETTINGS.png",
      "web_url": null
    }
  ];

  const rightMenuData = [
    {
      "id": 21,
      "name": "Convenience Store",
      "sub_title": null,
      "image": "ConvenienceStoreroundedNEWNOSHADOWS.png",
      "web_url": null
    },
    {
      "id": 22,
      "name": "Food",
      "sub_title": null,
      "image": "FOOD2024a.png",
      "web_url": null
    },
    {
      "id": 26,
      "name": "Coffee Shop",
      "sub_title": null,
      "image": "COFFEESHOP2024a.png",
      "web_url": null
    },
    {
      "id": 27,
      "name": "Restobar",
      "sub_title": null,
      "image": "RESTOBAR2024a.png",
      "web_url": null
    },
    {
      "id": 28,
      "name": "Delicacy Shop",
      "sub_title": null,
      "image": "DELICACYSHOP2024a.png",
      "web_url": null
    },
    {
      "id": 29,
      "name": "Souvenir Shop",
      "sub_title": null,
      "image": "SOUVENIRSHOP2024a.png",
      "web_url": null
    },
    {
      "id": 31,
      "name": "Mall",
      "sub_title": null,
      "image": "MALL2024a.png",
      "web_url": null
    },
    {
      "id": 32,
      "name": "Boutique",
      "sub_title": null,
      "image": "BOUTIQUE2024a.png",
      "web_url": null
    },
    {
      "id": 33,
      "name": "Resort",
      "sub_title": null,
      "image": "RESORT2024a.png",
      "web_url": null
    },
    {
      "id": 34,
      "name": "Bed & Breakfast",
      "sub_title": null,
      "image": "BEDANDBREAKFAST2024a.png",
      "web_url": null
    },
    {
      "id": 35,
      "name": "Hotel",
      "sub_title": null,
      "image": "HOTEL2024a.png",
      "web_url": null
    },
    {
      "id": 36,
      "name": "Condotel",
      "sub_title": null,
      "image": "CONDOTEL2024a.png",
      "web_url": null
    },
    {
      "id": 38,
      "name": "Spa and Wellness",
      "sub_title": null,
      "image": "SPAWELLNESS2024a.png",
      "web_url": null
    },
    {
      "id": 40,
      "name": "Hair & Nail Salon",
      "sub_title": null,
      "image": "HAIRSALON2024a.png",
      "web_url": null
    },
    {
      "id": 41,
      "name": "Gas Station",
      "sub_title": null,
      "image": "GASSTATION2024a.png",
      "web_url": null
    },
    {
      "id": 42,
      "name": "Auto Repair",
      "sub_title": null,
      "image": "AUTOREPAIR2024a.png",
      "web_url": null
    },
    {
      "id": 43,
      "name": "Church",
      "sub_title": null,
      "image": "CHURCH2024a.png",
      "web_url": null
    },
    {
      "id": 44,
      "name": "Clinic & Hospital",
      "sub_title": null,
      "image": "CLINICHOSPITAL2024a.png",
      "web_url": null
    },
    {
      "id": 45,
      "name": "Pharmacy",
      "sub_title": null,
      "image": "PHARMACY2024a.png",
      "web_url": null
    },
    {
      "id": 46,
      "name": "Doctor",
      "sub_title": null,
      "image": "DOCTOR2024a.png",
      "web_url": null
    }
  ];

  const imageBaseUrl = 'http://api.msgnaa.info/images/';

  const handleServiceClick = (name: string, url: string | null) => {
    if (url && url !== 'null') {
      window.open(url, '_blank');
    } else {
      alert(`${name} - Coming Soon!`);
    }
  };

  const handlePromoClick = (name: string, url: string | null) => {
    if (url && url !== 'null') {
      window.open(url, '_blank');
    } else {
      alert(`Finding ${name} services near you...`);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>ViewersClub - Stream Everything</title>
        <meta name="description" content="Your ultimate entertainment destination for streaming, live TV, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {/* Navigation */}
        <nav className="navbar" id="navbar">
          <div className="nav-container">
            <div className="logo">ViewersClub</div>
            <ul className="nav-menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#promotions">Promotions</a></li>
            </ul>
            <div className="nav-right">
              <button className="search-btn">🔍</button>
              <button className="profile-btn">👤</button>
              <button className="mobile-menu-btn" onClick={toggleMobileMenu}>☰</button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
              <li><a href="#features" onClick={closeMobileMenu}>Features</a></li>
              <li><a href="#services" onClick={closeMobileMenu}>Services</a></li>
              <li><a href="#promotions" onClick={closeMobileMenu}>Promotions</a></li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-content">
            <h1>Stream Everything, Everywhere</h1>
            <p>Movies, TV Shows, Live Channels, Karaoke & More</p>
            <button className="cta-button">Start Streaming Now</button>
          </div>
        </section>

        {/* Features Section */}
        <section className="content-section" id="features">
          <h2 className="section-title">Entertainment Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon worldtv-icon">🌍</span>
              <h3>WorldTV</h3>
              <p>Access thousands of live TV channels from around the globe. News, sports, entertainment - all in one place.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon cinerama-icon">🎬</span>
              <h3>Cinerama</h3>
              <p>Premium movie collection with the latest blockbusters, classic films, and exclusive series.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon karaoke-icon">🎤</span>
              <h3>Karaoke</h3>
              <p>Sing your heart out with our massive karaoke library featuring songs from every genre and era.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon omniplayer-icon">📱</span>
              <h3>OmniPlayer</h3>
              <p>Universal media player supporting all formats. Stream from any device, anywhere, anytime.</p>
            </div>
          </div>
        </section>

        {/* User Services Section */}
        <section className="services-section" id="services">
          <div className="content-section">
            <h2 className="section-title">User Services</h2>
            <div className="services-grid">
              {leftMenuData.map((item) => (
                <div key={item.id} className="service-card">
                  <div className="service-image">
                    <img 
                      src={`${imageBaseUrl}${item.image}`} 
                      alt={item.name}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = '🔧';
                      }}
                    />
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.sub_title || `Access ${item.name} features and services`}</p>
                  <button 
                    className="service-btn"
                    onClick={() => handleServiceClick(item.name, item.web_url)}
                  >
                    {item.web_url ? 'Open Service' : 'Coming Soon'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promotions Section */}
        <section className="promotions-section" id="promotions">
          <div className="content-section">
            <h2 className="section-title">Local Services & Promotions</h2>
            <div className="promotions-grid">
              {rightMenuData.map((item) => (
                <div key={item.id} className="promo-card">
                  <div className="promo-image">
                    <img 
                      src={`${imageBaseUrl}${item.image}`} 
                      alt={item.name}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = '🏪';
                      }}
                    />
                  </div>
                  <h3>{item.name}</h3>
                  <p>Find local {item.name.toLowerCase()} services in your area</p>
                  <button 
                    className="promo-btn"
                    onClick={() => handlePromoClick(item.name, item.web_url)}
                  >
                    Find Near Me
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-grid">
              <div className="footer-section footer-brand">
                <div className="logo">ViewersClub</div>
                <p>Your ultimate entertainment destination for streaming, live TV, and more.</p>
                <div className="social-links">
                  <a href="#" title="Facebook">📘</a>
                  <a href="#" title="Twitter">🐦</a>
                  <a href="#" title="Instagram">📷</a>
                  <a href="#" title="YouTube">📺</a>
                  <a href="#" title="TikTok">🎵</a>
                </div>
              </div>
              
              <div className="footer-section">
                <h3>Entertainment</h3>
                <ul>
                  <li><a href="#worldtv">WorldTV</a></li>
                  <li><a href="#cinerama">Cinerama</a></li>
                  <li><a href="#karaoke">Karaoke</a></li>
                  <li><a href="#omniplayer">OmniPlayer</a></li>
                  <li><a href="#live-tv">Live TV</a></li>
                  <li><a href="#movies">Movies</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h3>Services</h3>
                <ul>
                  <li><a href="#vod">VOD</a></li>
                  <li><a href="#my-channels">My Channels</a></li>
                  <li><a href="#buzz">The Buzz</a></li>
                  <li><a href="#cloud-star">Cloud Star</a></li>
                  <li><a href="#premium">Premium</a></li>
                  <li><a href="#mobile-app">Mobile App</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h3>Support</h3>
                <ul>
                  <li><a href="#help">Help Center</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#terms">Terms of Service</a></li>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#about">About Us</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h3>Local Services</h3>
                <ul>
                  <li><a href="#food">Food & Dining</a></li>
                  <li><a href="#hotels">Hotels & Stay</a></li>
                  <li><a href="#shopping">Shopping</a></li>
                  <li><a href="#health">Health & Wellness</a></li>
                  <li><a href="#services">Professional Services</a></li>
                  <li><a href="#entertainment">Local Entertainment</a></li>
                </ul>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>&copy; 2024 ViewersClub. All rights reserved. | Made with ❤️ for entertainment lovers</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}