import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Location = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

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
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <main id="main-content">
      <Helmet>
        <title>How to Find Us | The Bounty Pub Cockmarsh, Bourne End | Directions & Map</title>
        <meta name="description" content="Find The Bounty riverside pub at Cockmarsh, Bourne End SL8 5RG. Walk from Bourne End station (0.5 miles) or Cookham station (1 mile). Arrive by foot, bike or boat on the River Thames." />
        <meta name="keywords" content="The Bounty directions, Cockmarsh pub location, Bourne End pub directions, Thames Path pub, how to get to The Bounty, pub near Bourne End station, riverside pub directions" />
        <meta property="og:title" content="Find The Bounty Pub | Cockmarsh, Bourne End" />
        <meta property="og:description" content="Located on the Thames at Cockmarsh. Walk from Bourne End or Cookham stations, or arrive by boat!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thebountypub.co.uk/location" />
        <link rel="canonical" href="https://thebountypub.co.uk/location" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Place",
            "name": "The Bounty Pub",
            "description": "Riverside pub on the Thames at Cockmarsh, between Bourne End and Cookham",
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
            "hasMap": "https://www.google.com/maps?q=The+Bounty+Pub,Cockmarsh,Bourne+End,UK",
            "publicAccess": true,
            "isAccessibleForFree": true
          }
        `}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(/images/site-images/front-garden.webp)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Find Us</h1>
          <p className="hero-location">On the banks of the Thames</p>
        </div>
      </section>

      {/* Full Width Map */}
      <section style={{ padding: 0 }}>
        <div className="map-container reveal">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=The+Bounty+Pub,Cockmarsh,Bourne+End,UK&zoom=15"
            width="100%"
            height="500"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Bounty Location"
          ></iframe>
        </div>
      </section>

      {/* Getting Here Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Getting Here</h2>
            <div className="wave-border"></div>
            <p className="section-subtitle" style={{ marginTop: '2rem' }}>
              Due to our location on the river, unfortunately you can't reach our pub by car, however we are
              conveniently located less than half a mile away from Bourne End train station and just over a
              mile from Cookham train station.
            </p>
            <p className="section-subtitle" style={{ marginTop: '1.5rem' }}>
              The railway bridge has a footpath that connects over the river, making it the perfect walk to our pub!
            </p>
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="section-darker">
        <div className="container">
          <div className="two-column reveal">
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <h3 style={{ color: 'var(--highlight-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem', marginBottom: '1.5rem' }}>
                Address
              </h3>
              <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                The Bounty<br />
                Cockmarsh<br />
                Bourne End<br />
                SL8 5RG
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <h3 style={{ color: 'var(--highlight-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem', marginBottom: '1.5rem' }}>
                Nearest Stations
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '0.75rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Bourne End</strong> - Less than half a mile
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Cookham</strong> - Just over a mile
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Harbour Tours Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Don't Want to Walk?</h2>
            <div className="wave-border"></div>
            <p className="section-subtitle" style={{ marginTop: '2rem' }}>
              For our customers who are wanting a lift over the river instead of the walk round,
              book with Harbour Tours:
            </p>
            <p style={{ color: 'var(--highlight-gold)', fontSize: '1.5rem', marginTop: '2rem', fontWeight: '600' }}>
              <a href="tel:07385177592" style={{ color: 'var(--highlight-gold)' }}>07385 177592</a>
            </p>
            <p style={{ marginTop: '1rem' }}>
              <a
                href="https://www.harbourtours.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ marginTop: '1rem' }}
              >
                Visit Harbour Tours
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Location;
