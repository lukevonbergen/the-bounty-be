import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const WhatsOn = () => {
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

  const regularEvents = [
    {
      title: 'Sunday Roasts',
      schedule: 'Every Sunday',
      time: '12pm - 4pm',
      description: 'Our legendary Sunday roasts are the perfect end to a riverside walk. Beef, chicken, lamb, or vegetarian - all served with Yorkshire pudding and all the trimmings.',
      note: 'Booking recommended',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070',
    },
    {
      title: 'Summer Terrace',
      schedule: 'April - September',
      time: 'All day',
      description: 'Our riverside terrace is the perfect spot for lazy summer afternoons. Watch boats drift by, enjoy a cold drink, and soak up the beautiful Thames views.',
      image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=2070',
    },
    {
      title: 'Arrive by Boat',
      schedule: 'Daily',
      time: 'During opening hours',
      description: "Moor up at our riverside jetty and come ashore for refreshments. We're a popular stop for boaters exploring this beautiful stretch of the Thames.",
      image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069',
    },
    {
      title: 'Walking Groups Welcome',
      schedule: 'Daily',
      time: 'All day',
      description: "On the Thames Path between Bourne End and Cookham, we're the perfect refreshment stop for walkers and ramblers. Dogs welcome too!",
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070',
    },
  ];

  const upcomingEvents = [
    {
      date: 'Easter Weekend',
      title: 'Easter Bank Holiday',
      description: 'Extended opening hours and special menu - the perfect time for a riverside visit.',
    },
    {
      date: 'May Bank Holiday',
      title: 'Spring Bank Holiday Weekend',
      description: 'Celebrate the long weekend with us on the terrace.',
    },
    {
      date: 'Summer',
      title: 'Summer Season Opens',
      description: 'Extended hours and full terrace service throughout the summer months.',
    },
    {
      date: 'Autumn',
      title: 'Autumn Menu Launch',
      description: 'Cosy comfort food for the cooler months ahead.',
    },
  ];

  return (
    <main id="main-content">
      <Helmet>
        <title>What's On | The Bounty Pub Bourne End | Sunday Roasts & Events</title>
        <meta name="description" content="What's on at The Bounty riverside pub in Bourne End. Sunday roasts every week, summer terrace open April-September, boat moorings available. Dog friendly Thames-side pub." />
        <meta name="keywords" content="Sunday roast Bourne End, pub events Buckinghamshire, Thames boat mooring, summer terrace pub, dog friendly pub Thames, walking groups pub" />
        <meta property="og:title" content="What's On | The Bounty Pub Bourne End" />
        <meta property="og:description" content="Sunday roasts, summer terrace, boat moorings & more at our riverside Thames pub." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thebountypub.co.uk/whats-on" />
        <link rel="canonical" href="https://thebountypub.co.uk/whats-on" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Events at The Bounty",
            "description": "Regular events and activities at The Bounty riverside pub",
            "itemListElement": [
              {
                "@type": "Event",
                "name": "Sunday Roasts",
                "description": "Traditional Sunday roast dinners with all the trimmings",
                "startDate": "2026-01-01",
                "endDate": "2026-12-31",
                "eventSchedule": {
                  "@type": "Schedule",
                  "byDay": "https://schema.org/Sunday",
                  "startTime": "12:00",
                  "endTime": "16:00"
                },
                "location": {
                  "@type": "Place",
                  "name": "The Bounty",
                  "address": "Cockmarsh, Bourne End, SL8 5RG"
                }
              }
            ]
          }
        `}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">What's On</h1>
          <p className="hero-location">Life on the river</p>
        </div>
      </section>

      {/* Regular Events */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">At The Bounty</h2>
            <div className="wave-border"></div>
          </div>

          <div style={{ display: 'grid', gap: '3rem' }}>
            {regularEvents.map((event, index) => (
              <div
                key={index}
                className="reveal"
                style={{
                  display: 'grid',
                  gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                  gap: '3rem',
                  alignItems: 'center',
                }}
              >
                <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                  <div
                    style={{
                      height: '300px',
                      backgroundImage: `url(${event.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      border: '1px solid var(--border-color)',
                      borderRadius: '4px',
                    }}
                  ></div>
                </div>
                <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                  <span style={{ color: 'var(--highlight-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>
                    {event.schedule} | {event.time}
                  </span>
                  <h3 style={{ fontSize: '2rem', margin: '0.5rem 0 1rem', color: 'var(--text-primary)', fontStyle: 'italic' }}>{event.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{event.description}</p>
                  {event.note && (
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>{event.note}</p>
                  )}
                  {event.link && (
                    <Link to={event.link} className="btn btn-outline" style={{ marginTop: '1rem' }}>
                      {event.linkText}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-darker">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Coming Up</h2>
            <div className="wave-border"></div>
          </div>

          <div className="event-grid reveal">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card" style={{ background: 'var(--primary-bg)' }}>
                <div style={{ padding: '1.5rem' }}>
                  <span style={{
                    display: 'inline-block',
                    background: 'var(--accent-navy)',
                    color: 'var(--text-primary)',
                    padding: '0.5rem 1rem',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '1rem',
                    borderRadius: '2px',
                  }}>
                    {event.date}
                  </span>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)', fontStyle: 'italic' }}>{event.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Note */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 className="section-title">A Note on the Seasons</h2>
            <p className="section-subtitle">
              As a true riverside pub, we embrace the changing seasons. Our opening hours and services
              may vary depending on the weather and time of year. In summer, enjoy long days on the
              terrace. In winter, cosy up inside or take a brisk walk along the Thames Path before
              warming up with us.
            </p>
            <p className="section-subtitle" style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
              We recommend calling ahead during winter months or checking our social media for updates.
            </p>
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="section-darker">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Stay Updated</h2>
            <p className="section-subtitle">
              Follow us on social media for the latest news, seasonal updates, and pictures from the riverside.
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

export default WhatsOn;
