import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const PrivateHire = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guests: '',
    date: '',
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
    alert('Thank you for your enquiry! We will be in touch shortly.');
  };

  const features = [
    'Stunning riverside setting',
    'Exclusive use of terrace area',
    'Customised food & drinks packages',
    'Flexible seating arrangements',
    'Dedicated service team',
    'Boat access for guests arriving by water',
  ];

  return (
    <main id="main-content">
      <Helmet>
        <title>Private Hire | The Bounty Pub Bourne End | Riverside Event Venue Thames</title>
        <meta name="description" content="Host your private event at The Bounty riverside pub in Bourne End. Perfect for birthdays, anniversaries, family gatherings & wakes. Stunning Thames views, riverside terrace for 40 guests, boat access. Enquire now." />
        <meta name="keywords" content="private hire Bourne End, riverside event venue Thames, birthday party venue Buckinghamshire, riverside celebration, Thames private hire, Cockmarsh event venue, private party pub" />
        <meta property="og:title" content="Private Hire | The Bounty Pub Bourne End" />
        <meta property="og:description" content="Host your special celebration at our stunning riverside venue on the Thames. Terrace for 40, inside for 30, boat access available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thebountypub.co.uk/private-hire" />
        <link rel="canonical" href="https://thebountypub.co.uk/private-hire" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "EventVenue",
            "name": "The Bounty - Private Hire",
            "description": "Riverside private event venue on the Thames at Cockmarsh, Bourne End. Perfect for birthdays, anniversaries, family gatherings and wakes.",
            "url": "https://thebountypub.co.uk/private-hire",
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
            "maximumAttendeeCapacity": 70,
            "amenityFeature": [
              {"@type": "LocationFeatureSpecification", "name": "Riverside Terrace", "value": true},
              {"@type": "LocationFeatureSpecification", "name": "Boat Access", "value": true},
              {"@type": "LocationFeatureSpecification", "name": "Catering Available", "value": true}
            ],
            "isAccessibleForFree": false,
            "publicAccess": false
          }
        `}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Private Hire</h1>
          <p className="hero-location">Celebrate riverside</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Your Riverside Celebration</h2>
            <p className="section-subtitle">
              There's no setting quite like The Bounty for your special occasion. Whether it's a milestone
              birthday, anniversary, or simply a gathering of friends, our unique riverside location
              provides a memorable backdrop for celebrations of all sizes.
            </p>
            <p className="section-subtitle" style={{ marginTop: '1rem' }}>
              Imagine your guests arriving by boat, stepping onto our terrace as the sun sets over
              the Thames. It's an experience they won't forget.
            </p>
            <div className="wave-border"></div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-darker">
        <div className="container">
          <div className="two-column reveal">
            <div>
              <h2 style={{ marginBottom: '2rem' }}>What We Offer</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {features.map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem 0',
                      borderBottom: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div
                style={{
                  height: '400px',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1529543544277-750e8562ccb5?q=80&w=2070)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacity */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Capacity</h2>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Our intimate riverside setting is perfect for smaller, more personal gatherings.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
              maxWidth: '500px',
              margin: '2rem auto 0',
            }}>
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'var(--secondary-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
              }}>
                <span style={{ display: 'block', fontSize: '3rem', color: 'var(--highlight-gold)', fontWeight: '700' }}>40</span>
                <span style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Terrace</span>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'var(--secondary-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
              }}>
                <span style={{ display: 'block', fontSize: '3rem', color: 'var(--highlight-gold)', fontWeight: '700' }}>30</span>
                <span style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Inside</span>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', marginTop: '1.5rem', textAlign: 'center' }}>
              Flexible layouts to suit your event
            </p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-darker">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Perfect For</h2>
            <div className="wave-border"></div>
          </div>
          <div className="event-grid reveal">
            <div className="event-card" style={{ background: 'var(--primary-bg)' }}>
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)', fontStyle: 'italic' }}>Birthday Celebrations</h4>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Mark your milestone with a riverside party your guests will remember.</p>
              </div>
            </div>
            <div className="event-card" style={{ background: 'var(--primary-bg)' }}>
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)', fontStyle: 'italic' }}>Family Gatherings</h4>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Bring the family together in a beautiful, relaxed setting.</p>
              </div>
            </div>
            <div className="event-card" style={{ background: 'var(--primary-bg)' }}>
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)', fontStyle: 'italic' }}>Wakes & Memorials</h4>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>A peaceful riverside setting for celebrating a life well lived.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Make an Enquiry</h2>
            <p className="section-subtitle">
              Tell us about your event and we'll get back to you to discuss how we can help.
            </p>
          </div>

          <div className="two-column reveal">
            <form className="contact-form" onSubmit={handleSubmit}>
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
                <label className="form-label" htmlFor="eventType">Event Type *</label>
                <select
                  id="eventType"
                  name="eventType"
                  className="form-select"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select event type</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="family">Family Gathering</option>
                  <option value="memorial">Wake / Memorial</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="guests">Approximate Guests *</label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  className="form-input"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="date">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="form-input"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Tell Us About Your Event</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are you celebrating? Any special requirements?"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Enquiry
              </button>
            </form>

            <div style={{ paddingLeft: '2rem' }}>
              <div style={{
                background: 'var(--secondary-bg)',
                padding: '2rem',
                border: '1px solid var(--border-color)',
                marginBottom: '2rem',
                borderRadius: '4px',
              }}>
                <h3 style={{ color: 'var(--highlight-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>
                  Prefer to Email?
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Send us your enquiry directly:
                </p>
                <a href="mailto:info@thebountypub.co.uk" style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                  info@thebountypub.co.uk
                </a>
              </div>

              <div style={{
                background: 'var(--secondary-bg)',
                padding: '2rem',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
              }}>
                <h3 style={{ color: 'var(--highlight-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>
                  Good to Know
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  We recommend booking well in advance, especially for summer dates.
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Seasonal availability may affect event options - we'll discuss all the details when we get in touch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivateHire;
