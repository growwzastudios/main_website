import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users, Award, PhoneCall } from 'lucide-react';
import ServicesLanding from './LandingPageBelow';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  // Custom color palette
  const colors = {
    beige: {
      50: '#faf7f2',
    },
    gold: {
      100: '#f5ede1',
      200: '#e8d9c4',
      300: '#dcc5a8',
      400: '#c9b28b',
      500: '#b9a282',
      600: '#a18d71',
    },
    stone: {
      200: '#e7e5e4',
      300: '#d6d3d1',
      400: '#a8a29e',
      500: '#78716c',
      600: '#57534e',
      700: '#44403c',
      800: '#292520',
    }
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <main 
      style={{ 
        minHeight: '100vh',
        backgroundColor: colors.beige[50],
        overflow: 'hidden',
        position: 'relative',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: '0',
        }}
        onFocus={(e) => {
          e.target.style.position = 'absolute';
          e.target.style.width = 'auto';
          e.target.style.height = 'auto';
          e.target.style.padding = '8px 16px';
          e.target.style.margin = '16px';
          e.target.style.clip = 'auto';
          e.target.style.backgroundColor = colors.stone[800];
          e.target.style.color = colors.beige[50];
          e.target.style.borderRadius = '6px';
          e.target.style.zIndex = '50';
        }}
        onBlur={(e) => {
          e.target.style.position = 'absolute';
          e.target.style.width = '1px';
          e.target.style.height = '1px';
          e.target.style.padding = '0';
          e.target.style.margin = '-1px';
          e.target.style.clip = 'rect(0, 0, 0, 0)';
        }}
      >
        Skip to main content
      </a>

      {/* Desktop Get in Touch Button */}
      <motion.div
        style={{
          position: 'fixed',
          top: '100px',
          right: '32px',
          zIndex: 40,
          display: 'none',
        }}
        className="desktop-button"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 100 }}
      >
        <style>{`
          @media (min-width: 768px) {
            .desktop-button {
              display: block !important;
            }
          }
        `}</style>
        <Link to="/contact" style={{ textDecoration: 'none' }}> 
          <motion.button
            style={{
              position: 'relative',
              padding: '16px 32px',
              backgroundColor: colors.gold[400],
              color: colors.stone[800],
              borderRadius: '9999px',
              fontWeight: '500',
              fontSize: '1.125rem',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              border: 'none',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={pulseAnimation.animate}
            transition={pulseAnimation.transition}
          >
            <span style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px' }}>
              Get in Touch
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <PhoneCall size={20} />
              </motion.span>
            </span>
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: colors.gold[500],
                zIndex: 1,
              }}
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </Link>
      </motion.div>

      {/* Main Content */}
      <div style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        paddingTop: '80px',
      }} id="main-content">
        
        {/* Background decorative elements */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <motion.div
            style={{
              position: 'absolute',
              top: '80px',
              left: '40px',
              width: '256px',
              height: '256px',
              backgroundColor: 'rgba(232, 217, 196, 0.2)',
              borderRadius: '9999px',
              filter: 'blur(64px)',
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            style={{
              position: 'absolute',
              bottom: '80px',
              right: '40px',
              width: '384px',
              height: '384px',
              backgroundColor: 'rgba(168, 162, 158, 0.2)',
              borderRadius: '9999px',
              filter: 'blur(64px)',
            }}
            animate={{
              x: [0, -30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '0 20px', 
          position: 'relative', 
          zIndex: 10,
          width: '100%'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '32px', 
            alignItems: 'center' 
          }}>
            <style>{`
              @media (min-width: 1024px) {
                .landing-grid {
                  grid-template-columns: 1fr 1fr !important;
                  gap: 60px !important;
                }
              }
            `}</style>
            
            <div className="landing-grid" style={{ 
              display: 'grid', 
              gap: '40px',
            }}>
              {/* Left side - Content */}
              <motion.section
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                style={{ 
                  textAlign: 'left',
                  order: 1
                }}
              >
                <motion.div variants={fadeInUp} style={{ marginBottom: '20px' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: colors.gold[100],
                    color: colors.gold[600],
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                  }}>
                    <Sparkles size={16} />
                    Welcome to Excellence
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '300',
                    color: colors.stone[800],
                    marginBottom: '24px',
                    lineHeight: '1.2',
                  }}
                >
                  We Deliver
                  <span style={{
                    display: 'block',
                    fontWeight: '500',
                    color: colors.gold[500],
                    marginTop: '6px',
                  }}>
                    Growth & Success
                  </span>
                </motion.h1>
                <style>{`
                  @media (min-width: 640px) {
                    h1 {
                      font-size: 3rem !important;
                    }
                  }
                  @media (min-width: 1024px) {
                    h1 {
                      font-size: 4rem !important;
                    }
                  }
                `}</style>

                <motion.p
                  variants={fadeInUp}
                  style={{
                    fontSize: '1rem',
                    color: colors.stone[600],
                    marginBottom: '32px',
                    maxWidth: '32rem',
                    lineHeight: '1.6',
                  }}
                >
                  Transforming visions into reality with innovative solutions and strategic excellence. Your partner in achieving remarkable results.
                </motion.p>

                {/* Stats section - Horizontal on mobile */}
                <motion.div
                  variants={fadeInUp}
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: '16px',
                    marginBottom: '32px',
                  }}
                >
                  {[
                    { icon: TrendingUp, value: '98%', label: 'Success Rate' },
                    { icon: Users, value: '15+', label: 'Happy Clients' },
                    { icon: Award, value: '1.5+', label: 'Years Excellence' },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      style={{ 
                        textAlign: 'center',
                        flex: '1 1 auto',
                        minWidth: '100px'
                      }}
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <stat.icon style={{ width: '24px', height: '24px', color: colors.gold[400], margin: '0 auto 8px' }} />
                      <div style={{ fontSize: '1.25rem', fontWeight: '500', color: colors.stone[800] }}>{stat.value}</div>
                      <div style={{ fontSize: '0.7rem', color: colors.stone[500] }}>{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons - Stack on mobile */}
                <motion.div
                  variants={fadeInUp}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <style>{`
                    @media (min-width: 480px) {
                      .cta-buttons {
                        flex-direction: row !important;
                      }
                    }
                  `}</style>
                  <div className="cta-buttons" style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: '12px',
                    width: '100%'
                  }}>
                    <Link to="/contact">
                    <motion.button
                      style={{
                        padding: '14px 28px',
                        backgroundColor: colors.stone[800],
                        color: colors.beige[50],
                        borderRadius: '8px',
                        fontWeight: '500',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                        width: '100%',
                      }}
                      whileHover={{ scale: 1.02, backgroundColor: colors.stone[700] }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Start Your Journey
                    </motion.button>
</Link>
                    <motion.button
                      style={{
                        padding: '14px 28px',
                        backgroundColor: 'transparent',
                        color: colors.stone[700],
                        borderRadius: '8px',
                        fontWeight: '500',
                        border: `2px solid ${colors.stone[300]}`,
                        cursor: 'pointer',
                        width: '100%',
                      }}
                      whileHover={{ scale: 1.02, borderColor: colors.gold[400], color: colors.gold[600] }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Watch Video
                    </motion.button>
                  </div>
                </motion.div>
              </motion.section>

              {/* Right side - SVG Image */}
              {/* Right side - SVG Image */}
<motion.section
  initial="initial"
  animate="animate"
  variants={staggerContainer}
  style={{ 
    position: 'relative',
    order: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <motion.div
    variants={fadeInRight}
    style={{
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto',
      position: 'relative',
    }}
  >
    <img 
      src="/landingPage.png" 
      alt="GrowwZa Studios - Creative Agency"
      style={{
        width: '100%',
        height: 'auto',
        maxHeight: '400px',
        objectFit: 'contain',
      }}
    />

    {/* Floating particles */}
    <div style={{ position: 'relative' }}>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: i % 2 === 0 ? '8px' : '12px',
            height: i % 2 === 0 ? '8px' : '12px',
            backgroundColor: colors.gold[i % 2 === 0 ? 400 : 300],
            borderRadius: '9999px',
            left: `${10 + i * 15}%`,
            top: `${10 + i * 12}%`,
            opacity: 0.6,
            pointerEvents: 'none',
          }}
          animate={{
            x: [0, (i % 2 === 0 ? 30 : -30)],
            y: [0, (i % 3 === 0 ? 30 : -30)],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>

    {/* Quote overlay - Desktop only */}
    <motion.div
      className="desktop-quote"
      style={{
        position: 'absolute',
        bottom: '-40px',
        left: '-40px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        maxWidth: '280px',
        border: `1px solid ${colors.gold[200]}`,
        display: 'none', // Hidden by default
      }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <style>{`
        @media (min-width: 768px) {
          .desktop-quote {
            display: block !important;
          }
        }
      `}</style>
      <p style={{ 
        color: colors.stone[700], 
        fontStyle: 'italic', 
        margin: 0, 
        fontSize: '0.95rem',
        lineHeight: '1.5'
      }}>
        "The best way to predict the future is to create it."
      </p>
      <p style={{ 
        color: colors.gold[500], 
        marginTop: '8px', 
        fontWeight: '500', 
        fontSize: '0.85rem',
        textAlign: 'right'
      }}>
        — Peter Drucker
      </p>
    </motion.div>
  </motion.div>
</motion.section>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Get in Touch Button */}
      <motion.div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 40,
          display: 'block',
        }}
        className="mobile-button"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <style>{`
          @media (min-width: 768px) {
            .mobile-button {
              display: none !important;
            }
          }
        `}</style>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <motion.button
            style={{
              width: '56px',
              height: '56px',
              backgroundColor: colors.gold[400],
              color: colors.stone[800],
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={pulseAnimation.animate}
          >
            <PhoneCall size={24} />
          </motion.button>
        </Link>
      </motion.div>

      <ServicesLanding />
      
      {/* Add Inter font */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
    </main>
  );
};

export default LandingPage;