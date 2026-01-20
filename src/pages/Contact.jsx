import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will be in touch shortly.');
  };

  return (
    <main id="main-content">
      <Helmet>
        <title>Contact & Find Us | The Bounty Pub Bourne End | Directions & Opening Hours</title>
        <meta name="description" content="Find The Bounty riverside pub at Cockmarsh, Bourne End SL8 5RG. Open Fri-Sun. Get directions via Thames Path, boat mooring available. Email info@thebountypub.co.uk. Dog friendly Thames-side pub." />
        <meta name="keywords" content="The Bounty directions, Cockmarsh pub, Bourne End pub location, Thames Path pub, riverside pub directions, boat mooring pub Thames, dog friendly pub Buckinghamshire" />
        <meta property="og:title" content="Contact & Find Us | The Bounty Pub Bourne End" />
        <meta property="og:description" content="Find us at Cockmarsh on the Thames. Arrive by foot, bike or boat. Open Fri-Sun." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thebountypub.co.uk/contact" />
        <link rel="canonical" href="https://thebountypub.co.uk/contact" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "The Bounty",
            "description": "Charming riverside pub on the Thames at Cockmarsh, Bourne End",
            "url": "https://thebountypub.co.uk",
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
            "hasMap": "https://www.google.com/maps/place/The+Bounty+Pub,+Cockmarsh,+Bourne+End"
          }
        `}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2232)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Find Us</h1>
          <p className="hero-location">On the banks of the Thames</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-dark">
        <div className="container">
          <div className="two-column reveal">
            {/* Contact Details */}
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Getting Here</h2>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--highlight-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  Address
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  The Bounty<br />
                  Cockmarsh<br />
                  Bourne End<br />
                  SL8 5RG
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--highlight-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  Email
                </h3>
                <a href="mailto:info@thebountypub.co.uk" style={{ color: 'var(--text-primary)' }}>
                  info@thebountypub.co.uk
                </a>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--highlight-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  Opening Hours
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Tuesday: Closed<br />
                  Wednesday: Closed<br />
                  Thursday: Closed<br />
                  Friday: 4:30pm - 10:30pm<br />
                  Saturday: 11:30am - 10:30pm<br />
                  Sunday: 11:30am - 10:30pm<br />
                  Monday: Closed
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  Hours may vary seasonally - please call ahead in winter.
                </p>
              </div>

              <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'var(--secondary-bg)', border: '1px solid var(--border-color)' }}>
                <h3 style={{ color: 'var(--highlight-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  How to Find Us
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  <strong>On Foot:</strong> Follow the Thames Path from Bourne End or Cookham. We're located at Cockmarsh, a beautiful National Trust meadow.
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  <strong>By Boat:</strong> Moor up at our riverside jetty and come ashore for refreshments.
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  <strong>By Car:</strong> Limited parking available. We recommend walking or cycling where possible.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Send a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit} style={{ maxWidth: '100%' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-darker">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Location</h2>
            <p className="section-subtitle">
              We're situated on the beautiful Cockmarsh meadow, right on the banks of the River Thames
              between Bourne End and Cookham.
            </p>
          </div>

          <div className="map-container reveal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.8!2d-0.7089!3d51.5647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766b6d9e3b2b8f%3A0x1234567890abcdef!2sCockmarsh%2C%20Bourne%20End!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Bounty Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Follow Us</h2>
            <p className="section-subtitle">
              Stay up to date with the latest news, events, and seasonal specials.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <a
                href="https://www.facebook.com/thebounty1/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/the_bounty1/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@thebounty.official"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
                TikTok
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
