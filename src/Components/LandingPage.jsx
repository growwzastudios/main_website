import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users, Award, PhoneCall, Rocket, Lightbulb, Palette } from 'lucide-react';
import ServicesLanding from './LandingPageBelow';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  // Custom color palette
  const colors = {
    beige: { 50: '#faf7f2' },
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

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.2 } }
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
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
      {/* Background decorative elements */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <motion.div
          style={{
            position: 'absolute', top: '10%', left: '5%', width: '400px', height: '400px',
            background: `radial-gradient(circle, ${colors.gold[100]} 0%, transparent 70%)`,
            filter: 'blur(80px)', opacity: 0.6
          }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Desktop Get in Touch Button */}
      <motion.div
        style={{ position: 'fixed', top: '100px', right: '32px', zIndex: 40, display: 'none' }}
        className="desktop-button"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1, type: "spring" }}
      >
        <style>{`@media (min-width: 768px) { .desktop-button { display: block !important; } }`}</style>
        <Link to="/contact" style={{ textDecoration: 'none' }}> 
          <motion.button
            style={{
              padding: '16px 32px', backgroundColor: colors.gold[400], color: colors.stone[800],
              borderRadius: '9999px', fontWeight: '600', border: 'none', cursor: 'pointer',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', gap: '8px'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={pulseAnimation.animate}
          >
            Get in Touch <PhoneCall size={18} />
          </motion.button>
        </Link>
      </motion.div>

      {/* Mobile Get in Touch Button - Added from old code */}
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

      {/* Main Hero Content */}
      <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', width: '100%', zIndex: 10 }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px', alignItems: 'center' }}>
            <style>{`@media (min-width: 1024px) { .hero-grid { grid-template-columns: 1.1fr 0.9fr !important; } }`}</style>

            {/* Left side - Content */}
            <motion.section initial="initial" animate="animate" variants={staggerContainer}>
              <motion.div variants={fadeInUp} style={{ marginBottom: '24px' }}>
                <span style={{
                  backgroundColor: colors.gold[200], color: colors.stone[700],
                  padding: '8px 16px', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: '700',
                  textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-flex', alignItems: 'center', gap: '8px'
                }}>
                  <Sparkles size={14} /> The Future of Growth
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '300', color: colors.stone[800], 
                lineHeight: 1.1, marginBottom: '24px' 
              }}>
                Crafting <span style={{ fontWeight: '700', color: colors.gold[500] }}>Digital</span>
                <br />Masterpieces
              </motion.h1>

              <motion.p variants={fadeInUp} style={{ 
                fontSize: '1.125rem', color: colors.stone[500], marginBottom: '40px', maxWidth: '540px', lineHeight: 1.7 
              }}>
                We blend aesthetic design with powerful strategy to scale your business. 
                Experience a partnership built on transparency and fueled by innovation.
              </motion.p>

             {/* Buttons Container - Responsive */}
<motion.div 
  variants={fadeInUp} 
  style={{ 
    display: 'flex', 
    gap: '16px', 
    flexWrap: 'wrap',
    width: '100%'
  }}
  className="hero-buttons-container"
>
  <Link to="/contact" className="button-link">
    <motion.button 
      className="hero-button primary"
      style={{
        width: '100%',
        padding: '16px 36px', 
        backgroundColor: colors.stone[800], 
        color: 'white',
        borderRadius: '12px', 
        fontWeight: '600', 
        border: 'none', 
        cursor: 'pointer',
      }} 
      whileHover={{ y: -4, backgroundColor: colors.stone[700] }}
      whileTap={{ scale: 0.98 }}
    >
      Start Building
    </motion.button>
  </Link>
  
  <Link to="/services" className="button-link">
    <motion.button 
      className="hero-button secondary"
      style={{
        width: '100%',
        padding: '16px 36px', 
        backgroundColor: 'transparent', 
        color: colors.stone[800],
        borderRadius: '12px', 
        fontWeight: '600', 
        border: `2px solid ${colors.stone[200]}`, 
        cursor: 'pointer',
      }} 
      whileHover={{ borderColor: colors.gold[400] }}
      whileTap={{ scale: 0.98 }}
    >
      View Services
    </motion.button>
  </Link>
</motion.div>

{/* Add responsive styles */}
<style>{`
  .hero-buttons-container {
    flex-direction: row;
  }
  
  .button-link {
    flex: 1 1 auto;
    min-width: 200px;
  }
  
  @media (max-width: 640px) {
    .hero-buttons-container {
      flex-direction: column;
    }
    
    .button-link {
      width: 100%;
      min-width: 100%;
    }
    
    .hero-button {
      width: 100%;
      text-align: center;
    }
  }
`}</style>
            </motion.section>

            {/* Right side - The Stunning Animated UI */}
            <motion.section 
              initial="initial" animate="animate"
              style={{ position: 'relative', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {/* Dynamic Background Orb */}
              <motion.div
                style={{
                  position: 'absolute', width: '350px', height: '350px',
                  borderRadius: '50%', background: `linear-gradient(135deg, ${colors.gold[100]} 0%, ${colors.gold[300]} 100%)`,
                  filter: 'blur(50px)', zIndex: 1
                }}
                animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              {/* Central Glassmorphism Card */}
              <motion.div
                variants={fadeInRight}
                style={{
                  width: '320px', padding: '32px', borderRadius: '32px',
                  background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.4)', zIndex: 10,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: colors.gold[400], display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <TrendingUp size={20} color="white" />
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', color: colors.stone[400] }}></span>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <svg width="120" height="120">
                      <circle cx="60" cy="60" r="54" fill="none" stroke={colors.gold[100]} strokeWidth="10" />
                      <motion.circle 
                        cx="60" cy="60" r="54" fill="none" stroke={colors.gold[400]} strokeWidth="10" strokeLinecap="round"
                        strokeDasharray="339.29"
                        initial={{ strokeDashoffset: 339.29 }}
                        animate={{ strokeDashoffset: 84.8 }}
                        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                      />
                    </svg>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <span style={{ fontSize: '1.5rem', fontWeight: '800', color: colors.stone[800] }}>92%</span>
                    </div>
                  </div>
                  <h4 style={{ margin: '12px 0 4px', color: colors.stone[700] }}>Client Satisfaction</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: colors.stone[400] }}>Industry Leading Performance</p>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  {[1, 2, 3, 4].map(i => (
                    <motion.div 
                      key={i}
                      style={{ height: '30px', flex: 1, backgroundColor: colors.gold[100], borderRadius: '6px' }}
                      animate={{ height: [20, 40, 20] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                style={{
                  position: 'absolute', top: '15%', right: '5%', padding: '12px 20px',
                  backgroundColor: colors.stone[800], color: 'white', borderRadius: '16px',
                  display: 'flex', alignItems: 'center', gap: '10px', zIndex: 11, boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Rocket size={18} color={colors.gold[300]} />
                <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Fast Growth</span>
              </motion.div>

              <motion.div
                style={{
                  position: 'absolute', bottom: '15%', left: '0%', padding: '12px 20px',
                  backgroundColor: 'white', color: colors.stone[700], borderRadius: '16px',
                  display: 'flex', alignItems: 'center', gap: '10px', zIndex: 11, border: `1px solid ${colors.gold[200]}`
                }}
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Lightbulb size={18} color={colors.gold[500]} />
                <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Innovation</span>
              </motion.div>

              {/* Decorative dots grid */}
              <div style={{ 
                position: 'absolute', top: '10%', left: '10%', display: 'grid', 
                gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', opacity: 0.3 
              }}>
                {[...Array(25)].map((_, i) => (
                  <div key={i} style={{ width: '4px', height: '4px', backgroundColor: colors.stone[400], borderRadius: '50%' }} />
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>

      <ServicesLanding />
    </main>
  );
};

export default LandingPage;