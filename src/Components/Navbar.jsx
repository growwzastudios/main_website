import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    // { name: 'Portfolio', href: '/portfolio' },
    // { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blogs', href: '/blogs' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Define custom color classes as inline styles or style tags
  const colors = {
    beige: {
      50: '#faf7f2',
      100: '#f5f0e8',
    },
    gold: {
      400: '#c9b28b',
      500: '#b9a282',
      600: '#a18d71',
    },
    stone: {
      200: '#e7e5e4',
      600: '#57534e',
      700: '#44403c',
      800: '#292520',
      900: '#1c1917',
    }
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? `${colors.beige[50]}f2` : `${colors.beige[100]}e6`,
        backdropFilter: 'blur(8px)',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.1)' : 'none',
      }}
      role="banner"
    >
      {/* Skip link for accessibility */}
      <a
        href="/"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 px-4 py-2 rounded-md z-50"
        style={{
          backgroundColor: colors.stone[800],
          color: colors.beige[50],
        }}
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
<Link
  to="/"
  className="flex items-center"
  aria-label="Homepage"
>
  <img 
    src="/transparent_logo.svg" 
    alt="GrowwZa Studios Logo" 
    style={{
      height: '60px',
      width: '180px',
      objectFit: 'contain',
      filter: 'sepia(20%) brightness(100%) saturate(90%)',
    }}
  />
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-light text-sm tracking-wide uppercase py-2 transition-all duration-200 border-b-2 border-transparent hover:border-gold-400"
                    style={{
                      color: colors.stone[700],
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.gold[600]}
                    onMouseLeave={(e) => e.currentTarget.style.color = colors.stone[700]}
                    aria-current={link.href === '/' ? 'page' : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
              style={{ backgroundColor: colors.stone[700] }}
            />
            <span
              className={`block w-6 h-0.5 my-1.5 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
              style={{ backgroundColor: colors.stone[700] }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
              style={{ backgroundColor: colors.stone[700] }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-menu"
        className={`md:hidden absolute top-20 left-0 w-full shadow-xl transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-2 invisible'
        }`}
        style={{
          backgroundColor: `${colors.beige[50]}f2`,
          backdropFilter: 'blur(8px)',
        }}
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col py-4 px-4">
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              className={`transform transition-all duration-300 ${
                isMenuOpen
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: isMenuOpen ? `${index * 75}ms` : '0ms' }}
            >
              <Link
                to={link.href}
                className="block py-3 font-light border-b transition-colors"
                style={{
                  color: colors.stone[700],
                  borderColor: colors.stone[200],
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.gold[600];
                  e.currentTarget.style.borderColor = colors.gold[400];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.stone[700];
                  e.currentTarget.style.borderColor = colors.stone[200];
                }}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 backdrop-blur-sm z-40"
          style={{ backgroundColor: `${colors.stone[900]}33` }}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Navbar;