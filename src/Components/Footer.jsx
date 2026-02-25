import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, Twitter, Instagram, Linkedin, Youtube, 
  Mail, Phone, MapPin, ChevronRight, ArrowUp,
  Globe, Shield, FileText, Info
} from 'lucide-react';

const Footer = () => {
  // Custom color palette
  const colors = {
    beige: {
      50: '#faf7f2',
      100: '#f5f0e8',
      200: '#e8d9c4',
    },
    gold: {
      100: '#f5ede1',
      200: '#e8d9c4',
      300: '#dcc5a8',
      400: '#c9b28b',
      500: '#b9a282',
      600: '#a18d71',
      700: '#8b7557',
    },
    stone: {
      100: '#f5f5f4',
      200: '#e7e5e4',
      300: '#d6d3d1',
      400: '#a8a29e',
      500: '#78716c',
      600: '#57534e',
      700: '#44403c',
      800: '#292520',
      900: '#1c1917',
    }
  };

  // Footer data based on the images
  const footerData = {
    about: {
      title: "ABOUT US",
      links: [
        { name: "Our Story", href: "#story" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Clients", href: "#clients" },
        { name: "Awards & Recognitions", href: "#awards" },
        { name: "Career", href: "#career" },
        { name: "Contact Us", href: "#contact" },
      ]
    },
    products: {
      title: "OUR PRODUCTS",
      links: [
        { name: "Shopaccino", href: "#shopaccino" },
        { name: "Task Officer", href: "#task-officer" },
      ]
    },
    design: {
      title: "DESIGN & DEVELOPMENT",
      links: [
        { name: "Responsive Web Design", href: "#web-design" },
        { name: "Ecommerce Development", href: "#ecommerce" },
        { name: "Web Application Development", href: "#web-apps" },
        { name: "Mobile Application Development", href: "#mobile-apps" },
      ]
    },
    marketing: {
      title: "MARKETING",
      links: [
        { name: "360 Web Marketing", href: "#web-marketing" },
        { name: "Search Engine Optimization", href: "#seo" },
        { name: "Social Media Optimization", href: "#smo" },
        { name: "PPC Management", href: "#ppc" },
        { name: "Moment Marketing", href: "#moment-marketing" },
        { name: "Reputation Management", href: "#reputation" },
        { name: "Email Marketing Automation", href: "#email-marketing" },
      ]
    },
    industries: [
      "Real Estate", "Tour & Travels", "Hotel", "Manufacturing", 
      "Gems & Jewelry", "Education", "Fashion", "Furniture", 
      "Granite & Marble", "Art, Painting & Handicraft", "Finance", 
      "Service Providers"
    ],
    social: [
      { icon: <Facebook size={20} />, name: "Facebook", href: "#", color: "#1877F2" },
      { icon: <Twitter size={20} />, name: "Twitter", href: "#", color: "#1DA1F2" },
      { icon: <Instagram size={20} />, name: "Instagram", href: "#", color: "#E4405F" },
      { icon: <Linkedin size={20} />, name: "LinkedIn", href: "#", color: "#0A66C2" },
      { icon: <Youtube size={20} />, name: "YouTube", href: "#", color: "#FF0000" },
    ]
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: colors.stone[900],
      color: colors.stone[300],
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      position: 'relative',
    }}>
      {/* Add Inter font */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Decorative top border */}
      <div style={{
        height: '4px',
        background: `linear-gradient(90deg, ${colors.gold[400]}, ${colors.gold[600]}, ${colors.gold[400]})`,
        width: '100%',
      }} />

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        style={{
          position: 'absolute',
          top: '-20px',
          right: '30px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: colors.gold[400],
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: colors.stone[900],
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
          zIndex: 10,
        }}
        whileHover={{ scale: 1.1, background: colors.gold[500] }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowUp size={24} />
      </motion.button>

      {/* Main Footer Content */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 30px 40px' }}>
        {/* Connect With Us Section */}
        
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          style={{ marginBottom: '50px' }}
        >
          <motion.h3 variants={fadeInUp} style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            color: 'white',
            letterSpacing: '2px',
            marginBottom: '25px',
            position: 'relative',
            display: 'inline-block',
          }}>
            CONNECT WITH US
            <span style={{
              position: 'absolute',
              bottom: '-8px',
              left: 0,
              width: '40px',
              height: '2px',
              background: colors.gold[400],
            }} />
          </motion.h3>

          <motion.div variants={fadeInUp} style={{
            display: 'flex',
            gap: '15px',
            flexWrap: 'wrap',
          }}>
            {footerData.social.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.name}
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  background: colors.stone[800],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.stone[300],
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                whileHover={{
                  scale: 1.1,
                  background: social.color,
                  color: 'white',
                }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer Links Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '50px',
          }}
        >
          {/* About Us */}
          <motion.div variants={scaleIn}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: 'white',
              letterSpacing: '1px',
              marginBottom: '20px',
            }}>
              {footerData.about.title}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerData.about.links.map((link, index) => (
                <motion.li
                  key={index}
                  style={{ marginBottom: '12px' }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    style={{
                      color: colors.stone[400],
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                    whileHover={{ color: colors.gold[400] }}
                  >
                    <ChevronRight size={14} style={{ color: colors.gold[400], opacity: 0.7 }} />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Products */}
          <motion.div variants={scaleIn}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: 'white',
              letterSpacing: '1px',
              marginBottom: '20px',
            }}>
              {footerData.products.title}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerData.products.links.map((link, index) => (
                <motion.li
                  key={index}
                  style={{ marginBottom: '12px' }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    style={{
                      color: colors.stone[400],
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                    whileHover={{ color: colors.gold[400] }}
                  >
                    <ChevronRight size={14} style={{ color: colors.gold[400], opacity: 0.7 }} />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Design & Development */}
          <motion.div variants={scaleIn}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: 'white',
              letterSpacing: '1px',
              marginBottom: '20px',
            }}>
              {footerData.design.title}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerData.design.links.map((link, index) => (
                <motion.li
                  key={index}
                  style={{ marginBottom: '12px' }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    style={{
                      color: colors.stone[400],
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                    whileHover={{ color: colors.gold[400] }}
                  >
                    <ChevronRight size={14} style={{ color: colors.gold[400], opacity: 0.7 }} />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Marketing */}
          <motion.div variants={scaleIn}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: 'white',
              letterSpacing: '1px',
              marginBottom: '20px',
            }}>
              {footerData.marketing.title}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerData.marketing.links.map((link, index) => (
                <motion.li
                  key={index}
                  style={{ marginBottom: '12px' }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    style={{
                      color: colors.stone[400],
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                    whileHover={{ color: colors.gold[400] }}
                  >
                    <ChevronRight size={14} style={{ color: colors.gold[400], opacity: 0.7 }} />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Industries Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{
            marginBottom: '50px',
            padding: '30px 0',
            borderTop: `1px solid ${colors.stone[800]}`,
            borderBottom: `1px solid ${colors.stone[800]}`,
          }}
        >
          <motion.h4 variants={fadeInUp} style={{
            fontSize: '1rem',
            fontWeight: '600',
            color: 'white',
            letterSpacing: '1px',
            marginBottom: '20px',
          }}>
            INDUSTRIES
          </motion.h4>
          
          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '15px',
            }}
          >
            {footerData.industries.map((industry, index) => (
              <motion.a
                key={index}
                href={`#${industry.toLowerCase().replace(/\s+/g, '-')}`}
                variants={scaleIn}
                whileHover={{ x: 5, color: colors.gold[400] }}
                style={{
                  color: colors.stone[400],
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                <ChevronRight size={14} style={{ color: colors.gold[400], opacity: 0.5 }} />
                {industry}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
          }}
        >
          <motion.div variants={fadeInUp} style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={18} color={colors.gold[400]} />
              <a href="mailto:info@solutionmicrosystems.com" style={{ color: colors.stone[400], textDecoration: 'none', fontSize: '0.9rem' }}>
                info@solutionmicrosystems.com
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={18} color={colors.gold[400]} />
              <a href="tel:+911234567890" style={{ color: colors.stone[400], textDecoration: 'none', fontSize: '0.9rem' }}>
                +91 123 456 7890
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={18} color={colors.gold[400]} />
              <span style={{ color: colors.stone[400], fontSize: '0.9rem' }}>Jaipur, Rajasthan</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '20px' }}>
            <a href="#terms" style={{ color: colors.stone[400], textDecoration: 'none', fontSize: '0.9rem' }}>Terms & Conditions</a>
            <a href="#privacy" style={{ color: colors.stone[400], textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</a>
            <a href="#disclaimer" style={{ color: colors.stone[400], textDecoration: 'none', fontSize: '0.9rem' }}>Disclaimer</a>
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{
            padding: '20px 0',
            borderTop: `1px solid ${colors.stone[800]}`,
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <motion.div variants={fadeInUp}>
            <p style={{ color: colors.stone[500], fontSize: '0.85rem', margin: 0 }}>
              © 2004 - 2024 | Solution Microsystems Private Limited
            </p>
            <p style={{ color: colors.stone[600], fontSize: '0.8rem', margin: '5px 0 0' }}>
              Corporate Identification Number: U72200RJ2009PTC030152
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '15px' }}>
            <a href="#terms" style={{ color: colors.stone[500], textDecoration: 'none', fontSize: '0.8rem' }}>
              <FileText size={14} style={{ marginRight: '5px', display: 'inline' }} />
              Terms
            </a>
            <a href="#privacy" style={{ color: colors.stone[500], textDecoration: 'none', fontSize: '0.8rem' }}>
              <Shield size={14} style={{ marginRight: '5px', display: 'inline' }} />
              Privacy
            </a>
            <a href="#disclaimer" style={{ color: colors.stone[500], textDecoration: 'none', fontSize: '0.8rem' }}>
              <Info size={14} style={{ marginRight: '5px', display: 'inline' }} />
              Disclaimer
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;