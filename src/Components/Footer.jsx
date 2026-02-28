import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
        { name: "Our Story", to: "/about" },
        { name: "Portfolio", to: "/portfolio" },
        { name: "Clients", to: "/" },
        { name: "Awards & Recognitions", to: "#" },
        { name: "Career", to: "#" },
        { name: "Contact Us", to: "/contact" },
      ]
    },
    products: {
      title: "OUR PRODUCTS",
      links: [
        { name: "Colaborator", to: "/products/colaborator" },
        { name: "Task Officer", to: "/products/task-officer" },
      ]
    },
    design: {
      title: "DEVELOPMENT",
      links: [
        { name: "Responsive Web Design", to: "/services/web-design" },
        { name: "Ecommerce Development", to: "/services/ecommerce" },
        { name: "Web Application Development", to: "/services/web-app" },
        { name: "Mobile Application Development", to: "/services/mobile-app" },
      ]
    },
    marketing: {
      title: "DESIGN AND BRANDING",
      links: [
        { name: "Web Marketing", to: "/services/web-marketing" },
        { name: "Graphic Design", to: "/services/graphic-design" },
        { name: "Social Media Management", to: "/services/social-media" },
        { name: "Search Engine Optimization", to: "/services/seo" },
        { name: "Branding", to: "/services/branding" },
        { name: "Logo Design", to: "/services/logo-design" }
      ]
    },
    industries: [
      "Real Estate", "Tour & Travels", "Hotel", "Manufacturing", 
      "Gems & Jewelry", "Education", "Fashion", "Furniture", 
      "Granite & Marble", "Art, Painting & Handicraft", "Finance", 
      "Service Providers"
    ],
    social: [
      { icon: <Facebook size={20} />, name: "Facebook", to: "#", color: "#1877F2" },
      { icon: <Twitter size={20} />, name: "Twitter", to: "#", color: "#1DA1F2" },
      { icon: <Instagram size={20} />, name: "Instagram", to: "#", color: "#E4405F" },
      { icon: <Linkedin size={20} />, name: "LinkedIn", to: "#", color: "#0A66C2" },
      { icon: <Youtube size={20} />, name: "YouTube", to: "#", color: "#FF0000" },
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

  // Styles object with media queries
  const styles = {
    footer: {
      background: colors.stone[900],
      color: colors.stone[300],
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      position: 'relative',
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '60px 20px 30px',
      '@media (min-width: 768px)': {
        padding: '60px 30px 40px',
      }
    },
    connectSection: {
      marginBottom: '40px',
      '@media (min-width: 768px)': {
        marginBottom: '50px',
      }
    },
    connectTitle: {
      fontSize: '1rem',
      fontWeight: '600',
      color: 'white',
      letterSpacing: '2px',
      marginBottom: '20px',
      position: 'relative',
      display: 'inline-block',
      '@media (min-width: 768px)': {
        fontSize: '1.2rem',
        marginBottom: '25px',
      }
    },
    socialContainer: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
      '@media (min-width: 768px)': {
        gap: '15px',
      }
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: colors.stone[800],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.stone[300],
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      '@media (min-width: 768px)': {
        width: '45px',
        height: '45px',
      }
    },
    linksGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '25px',
      marginBottom: '40px',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
        marginBottom: '50px',
      }
    },
    linkTitle: {
      fontSize: '0.9rem',
      fontWeight: '600',
      color: 'white',
      letterSpacing: '1px',
      marginBottom: '15px',
      '@media (min-width: 768px)': {
        fontSize: '1rem',
        marginBottom: '20px',
      }
    },
    linkItem: {
      marginBottom: '8px',
      '@media (min-width: 768px)': {
        marginBottom: '12px',
      }
    },
    link: {
      color: colors.stone[400],
      textDecoration: 'none',
      fontSize: '0.8rem',
      transition: 'color 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '3px',
      '@media (min-width: 768px)': {
        fontSize: '0.9rem',
        gap: '5px',
      }
    },
    chevronIcon: {
      size: 12,
      color: colors.gold[400],
      opacity: 0.7,
      '@media (min-width: 768px)': {
        size: 14,
      }
    },
    industriesSection: {
      marginBottom: '40px',
      padding: '25px 0',
      borderTop: `1px solid ${colors.stone[800]}`,
      borderBottom: `1px solid ${colors.stone[800]}`,
      display: 'none',
      '@media (min-width: 768px)': {
        display: 'block',
        marginBottom: '50px',
        padding: '30px 0',
      }
    },
    industriesTitle: {
      fontSize: '1rem',
      fontWeight: '600',
      color: 'white',
      letterSpacing: '1px',
      marginBottom: '20px',
    },
    industriesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '15px',
    },
    industryLink: {
      color: colors.stone[400],
      textDecoration: 'none',
      fontSize: '0.9rem',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
    },
    contactSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      marginBottom: '20px',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
      }
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      '@media (min-width: 480px)': {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      '@media (min-width: 768px)': {
        gap: '15px',
      }
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    contactText: {
      color: colors.stone[400],
      textDecoration: 'none',
      fontSize: '0.8rem',
      '@media (min-width: 768px)': {
        fontSize: '0.9rem',
      }
    },
    legalLinks: {
      display: 'flex',
      gap: '15px',
      flexWrap: 'wrap',
    },
    legalLink: {
      color: colors.stone[400],
      textDecoration: 'none',
      fontSize: '0.8rem',
      '@media (min-width: 768px)': {
        fontSize: '0.9rem',
      }
    },
    copyrightSection: {
      padding: '15px 0',
      borderTop: `1px solid ${colors.stone[800]}`,
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      '@media (min-width: 768px)': {
        padding: '20px 0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }
    },
    copyrightText: {
      color: colors.stone[500],
      fontSize: '0.7rem',
      margin: 0,
      '@media (min-width: 768px)': {
        fontSize: '0.85rem',
      }
    },
    cinText: {
      color: colors.stone[600],
      fontSize: '0.65rem',
      margin: '3px 0 0',
      '@media (min-width: 768px)': {
        fontSize: '0.8rem',
      }
    },
    footerLinks: {
      display: 'flex',
      gap: '15px',
    },
    footerLink: {
      color: colors.stone[500],
      textDecoration: 'none',
      fontSize: '0.7rem',
      display: 'flex',
      alignItems: 'center',
      '@media (min-width: 768px)': {
        fontSize: '0.8rem',
      }
    },
    footerLinkIcon: {
      marginRight: '3px',
      '@media (min-width: 768px)': {
        marginRight: '5px',
      }
    }
  };

  return (
    <footer style={styles.footer}>
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
      <div style={styles.container}>
        {/* Connect With Us Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          style={styles.connectSection}
        >
          <motion.h3 variants={fadeInUp} style={styles.connectTitle}>
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

          <motion.div variants={fadeInUp} style={styles.socialContainer}>
            {footerData.social.map((social, index) => (
              <motion.a
                key={index}
                href={social.to}
                aria-label={social.name}
                style={styles.socialIcon}
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
          style={styles.linksGrid}
        >
          {/* About Us */}
          <motion.div variants={scaleIn}>
            <h4 style={styles.linkTitle}>{footerData.about.title}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerData.about.links.map((link, index) => (
                <motion.li
                  key={index}
                  style={styles.linkItem}
                  whileHover={{ x: 5 }}
                >
                  <Link to={link.to} style={styles.link}>
                    <ChevronRight size={styles.chevronIcon.size} style={{ color: colors.gold[400], opacity: 0.7 }} />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Products */}
          <motion.div variants={scaleIn}>
            <h4 style={styles.linkTitle}>{footerData.products.title}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerData.products.links.map((link, index) => (
                <motion.li
                  key={index}
                  style={styles.linkItem}
                  whileHover={{ x: 5 }}
                >
                  <Link to={link.to} style={styles.link}>
                    <ChevronRight size={styles.chevronIcon.size} style={{ color: colors.gold[400], opacity: 0.7 }} />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Design & Development */}
          <motion.div variants={scaleIn}>
            <h4 style={styles.linkTitle}>{footerData.design.title}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerData.design.links.map((link, index) => (
                <motion.li
                  key={index}
                  style={styles.linkItem}
                  whileHover={{ x: 5 }}
                >
                  <Link to={link.to} style={styles.link}>
                    <ChevronRight size={styles.chevronIcon.size} style={{ color: colors.gold[400], opacity: 0.7 }} />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Marketing */}
          <motion.div variants={scaleIn}>
            <h4 style={styles.linkTitle}>{footerData.marketing.title}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerData.marketing.links.map((link, index) => (
                <motion.li
                  key={index}
                  style={styles.linkItem}
                  whileHover={{ x: 5 }}
                >
                  <Link to={link.to} style={styles.link}>
                    <ChevronRight size={styles.chevronIcon.size} style={{ color: colors.gold[400], opacity: 0.7 }} />
                    {link.name}
                  </Link>
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
          style={styles.industriesSection}
        >
          <motion.h4 variants={fadeInUp} style={styles.industriesTitle}>
            INDUSTRIES
          </motion.h4>
          
          <motion.div
            variants={staggerContainer}
            style={styles.industriesGrid}
          >
            {footerData.industries.map((industry, index) => (
              <motion.a
                key={index}
                href={`#${industry.toLowerCase().replace(/\s+/g, '-')}`}
                variants={scaleIn}
                whileHover={{ x: 5, color: colors.gold[400] }}
                style={styles.industryLink}
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
          style={styles.contactSection}
        >
          <motion.div variants={fadeInUp} style={styles.contactInfo}>
            <div style={styles.contactItem}>
              <Mail size={16} color={colors.gold[400]} />
              <a href="mailto:growwzastudios@gmail.com" style={styles.contactText}>
                growwzastudios@gmail.com
              </a>
            </div>
            <div style={styles.contactItem}>
              <Phone size={16} color={colors.gold[400]} />
              <a href="tel:+919358254199" style={styles.contactText}>
                +91 9358254199
              </a>
            </div>
            <div style={styles.contactItem}>
              <MapPin size={16} color={colors.gold[400]} />
              <span style={styles.contactText}>Jaipur, Rajasthan</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} style={styles.legalLinks}>
            <Link to="/terms" style={styles.legalLink}>Terms & Conditions</Link>
            <Link to="/privacy" style={styles.legalLink}>Privacy Policy</Link>
            <Link to="/disclaimer" style={styles.legalLink}>Disclaimer</Link>
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={styles.copyrightSection}
        >
          <motion.div variants={fadeInUp}>
            <p style={styles.copyrightText}>
              © 2024 - 2026 | Growwza Studios Private Limited
            </p>
            <p style={styles.cinText}>
              Corporate Identification Number: U72200RJ2009PTC030152
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} style={styles.footerLinks}>
            <Link to="/terms" style={styles.footerLink}>
              <FileText size={12} style={styles.footerLinkIcon} />
              Terms
            </Link>
            <Link to="/privacy" style={styles.footerLink}>
              <Shield size={12} style={styles.footerLinkIcon} />
              Privacy
            </Link>
            <Link to="/disclaimer" style={styles.footerLink}>
              <Info size={12} style={styles.footerLinkIcon} />
              Disclaimer
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;