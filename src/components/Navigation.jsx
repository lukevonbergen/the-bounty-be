import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    {
      path: '/functions',
      label: 'Functions',
      dropdown: [
        { path: '/functions#live-bands', label: 'Live Bands' },
        { path: '/functions#buffet', label: 'Buffet' },
        { path: '/functions#outside-catering', label: 'Outside Catering' },
        { path: '/functions#disco', label: 'Disco' },
      ]
    },
    { path: '/menu', label: 'Menus' },
    { path: '/location', label: 'Location' },
    { path: '/whats-on', label: 'About' },
    { path: '/contact#contact-form', label: 'Contact' },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar-container">
          <Link to="/" className="nav-logo" aria-label="The Bounty - Home">
            <img src="/images/hero/thebounty-logo.png" alt="The Bounty Pub Logo" className="nav-logo-img" />
          </Link>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} role="menubar">
          <li className="mobile-menu-logo">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img src="/images/hero/thebounty-logo.png" alt="The Bounty" />
            </Link>
          </li>
          {navLinks.map((link) => (
            <li key={link.path} className={link.dropdown ? 'nav-item-dropdown' : ''}>
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
                {link.dropdown && (
                  <svg className="dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </Link>
              {/* Desktop dropdown */}
              {link.dropdown && (
                <ul className="nav-dropdown">
                  {link.dropdown.map((subLink) => (
                    <li key={subLink.path}>
                      <Link to={subLink.path} className="nav-dropdown-link">
                        {subLink.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {/* Mobile dropdown - shows inline */}
              {link.dropdown && (
                <ul className="nav-dropdown-mobile">
                  {link.dropdown.map((subLink) => (
                    <li key={subLink.path}>
                      <Link to={subLink.path} className="nav-dropdown-mobile-link">
                        {subLink.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
    </>
  );
};

export default Navigation;
