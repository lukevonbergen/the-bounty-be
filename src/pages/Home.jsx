import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => {
  // Scroll reveal animation
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <main id="main-content">
      <Helmet>
        <title>The Bounty Pub | Riverside Pub Bourne End, Buckinghamshire | Thames Views</title>
        <meta name="description" content="The Bounty is a charming riverside pub on the River Thames at Cockmarsh, Bourne End. Enjoy stunning views, delicious food, real ales, and a beautiful beer garden. Open Friday-Sunday." />
        <meta name="keywords" content="riverside pub Bourne End, Thames pub Buckinghamshire, Cockmarsh pub, beer garden Thames, pub with river views, The Bounty pub, pubs near Marlow, pubs near Cookham, dog friendly pub Thames" />
        <meta property="og:title" content="The Bounty Pub | Riverside Pub Bourne End, Buckinghamshire" />
        <meta property="og:description" content="Award-worthy riverside pub on the Thames at Cockmarsh. Stunning views, delicious food, real ales & warm hospitality. Arrive by foot, bike or boat!" />
        <meta property="og:type" content="restaurant" />
        <meta property="og:url" content="https://thebountypub.co.uk" />
        <meta property="og:image" content="https://thebountypub.co.uk/images/hero/pub-front.jpg" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Bounty Pub | Riverside Pub Bourne End" />
        <meta name="twitter:description" content="Charming riverside pub on the Thames at Cockmarsh. Stunning views, great food & warm hospitality." />
        <link rel="canonical" href="https://thebountypub.co.uk" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "The Bounty",
            "image": "https://thebountypub.co.uk/images/hero/pub-front.jpg",
            "url": "https://thebountypub.co.uk",
            "telephone": "",
            "email": "info@thebountypub.co.uk",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Cockmarsh",
              "addressLocality": "Bourne End",
              "addressRegion": "Buckinghamshire",
              "postalCode": "SL8 5RG",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5667,
              "longitude": -0.7167
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Friday",
                "opens": "16:30",
                "closes": "22:30"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday", "Sunday"],
                "opens": "11:30",
                "closes": "22:30"
              }
            ],
            "servesCuisine": ["British", "Pub Food"],
            "priceRange": "££",
            "acceptsReservations": false,
            "amenityFeature": [
              {"@type": "LocationFeatureSpecification", "name": "River Views", "value": true},
              {"@type": "LocationFeatureSpecification", "name": "Beer Garden", "value": true},
              {"@type": "LocationFeatureSpecification", "name": "Dog Friendly", "value": true},
              {"@type": "LocationFeatureSpecification", "name": "Boat Mooring", "value": true}
            ]
          }
        `}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="hero hero-minimal">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(/images/hero/pub-front.jpg)',
          }}
        ></div>
        <div className="hero-overlay-minimal"></div>

        {/* Quick Actions Bar at bottom */}
        <div className="hero-actions-bar">
          <Link to="/private-hire" className="hero-action-btn">
            Private Hire
          </Link>
          <Link to="/menu" className="hero-action-btn">
            Menus
          </Link>
          <Link to="/whats-on" className="hero-action-btn">
            What's On
          </Link>
          <Link to="/contact" className="hero-action-btn">
            Find Us
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Welcome to The Bounty</h2>
            <p className="section-subtitle">
              Nestled on the peaceful banks of the River Thames at Cockmarsh, The Bounty offers a truly
              unique riverside experience. Whether arriving by foot, bike, or boat, you'll find a warm welcome,
              refreshing drinks, and stunning views across the water.
            </p>
            <p className="section-subtitle" style={{ marginTop: '1rem' }}>
              Our riverside beer garden is the perfect spot to while away a summer afternoon,
              watching boats drift by and enjoying the tranquil beauty of this special corner of the Thames.
            </p>
            <div className="wave-border"></div>
            <Link to="/contact" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section style={{ padding: 0 }}>
        <div className="feature-grid">
          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(/images/site-images/outside-bar.webp)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Riverside Garden</h3>
              <Link to="/contact" className="btn btn-primary">Visit Us</Link>
            </div>
          </div>

          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(/images/site-images/pub-front.jpeg)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>The Bounty</h3>
              <Link to="/menu" className="btn btn-primary">See Menu</Link>
            </div>
          </div>

          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(/images/site-images/people-outside.webp)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Private Events</h3>
              <Link to="/private-hire" className="btn btn-primary">Enquire</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section className="section-dark food-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Food at The Bounty</h2>
            <p className="section-subtitle">
              From classic pub favourites to seasonal specials, our kitchen serves hearty,
              honest food made with care. Enjoy a leisurely lunch watching the boats go by,
              or gather friends for a riverside feast.
            </p>
            <div className="wave-border"></div>
            <Link to="/menu" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              View Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* River Views Banner */}
      <section className="banner">
        <div
          className="banner-bg"
          style={{
            backgroundImage: 'url(/images/site-images/people-sat-on-bench.webp)',
          }}
        ></div>
        <div className="banner-overlay"></div>
        <div className="banner-content reveal">
          <div className="wave-border" style={{ marginBottom: '2rem' }}></div>
          <h2>Life on the River</h2>
          <p>Where the water meets good company</p>
          <Link to="/whats-on" className="btn btn-primary">What's On</Link>
          <div className="wave-border" style={{ marginTop: '2rem' }}></div>
        </div>
      </section>

      {/* What's On Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">What's On</h2>
            <p className="section-subtitle">
              From sunny weekends on the terrace to cosy evenings by the fire,
              there's always a reason to visit The Bounty.
            </p>
          </div>

          <div className="event-grid reveal">
            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(/images/site-images/front-garden.webp)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>Sunday Roasts</h4>
                <p>Join us every Sunday for our legendary roast dinners, served with all the trimmings.</p>
                <Link to="/menu" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>
                  View Menu
                </Link>
              </div>
            </div>

            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(/images/site-images/more-people-outside.webp)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>Summer on the Terrace</h4>
                <p>Our riverside terrace is the perfect spot for lazy afternoons in the sun.</p>
                <Link to="/contact" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>
                  Find Us
                </Link>
              </div>
            </div>

            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(/images/site-images/more-people-on-bench.webp)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>Arrive by Boat</h4>
                <p>Moor up and enjoy a well-earned pint after a day on the water.</p>
                <Link to="/contact" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>
                  Mooring Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Hire Banner */}
      <section className="split-banner">
        <div className="split-banner-images">
          <div
            className="split-image"
            style={{
              backgroundImage: 'url(/images/site-images/people-outside.webp)',
            }}
          ></div>
          <div
            className="split-image"
            style={{
              backgroundImage: 'url(/images/site-images/outside-bar.webp)',
            }}
          ></div>
        </div>
        <div className="banner-overlay"></div>
        <div className="banner-content reveal">
          <h2>Private Hire</h2>
          <p>Celebrate your special occasion riverside</p>
          <Link to="/private-hire" className="btn btn-primary">Enquire Now</Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Stay in the Loop</h2>
            <p className="section-subtitle">
              Sign up for news about events, seasonal menus, and everything happening at The Bounty.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
