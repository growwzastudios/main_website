import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Star, Quote, Globe, Smartphone, Palette, 
  TrendingUp, Search, Megaphone, Code, ShoppingCart, 
  Users, Award, Sparkles, ChevronRight, MessageCircle,
  Camera, BarChart, Briefcase, Rocket, Heart, Zap,
  ChevronLeft, ChevronRight as ChevronRightIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesLanding = () => {
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

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Praduman Karol",
      role: "Owner,On The go burger",
      content: "They transformed our online presence completely. The team's attention to detail and creative approach resulted in a 150% increase in conversions.",
      rating: 5,
      image:"👨‍💼"
    },
      {
      id: 2,
      name: "Kamal Sharma",
      role: "Owner,Kurti and More",
      content: "Their branding work is exceptional. They captured our essence perfectly and created a identity that resonates with our audience.",
      rating: 5,
      image:"👨‍💼"
    },
    {
      id: 3,
      name: "Purvi Shah",
      role: "Artist",
      content: "Every aspect of the website runs flawlessly, thanks to the expert coding and meticulous attention to detail. Additionally, the SEO enhancements have significantly boosted visibility, driving more traffic and engagement to the site",
      rating: 5,
      image:"👨‍💼"
    },
    {
      id: 4,
      name: "Sanjay Mehta",
      role: "Gym Trainer & Fitness Influencer",
      content: "I’m really impressed with the portfolio design. It doesn’t just show workouts and achievements—it tells a story. The layout highlights the trainer’s journey, inspires confidence, and makes the brand feel truly professional.",
      rating: 5,
      image:"👨‍💼"
    },
    {
      id: 5,
      name: "Zigi O",
      role: "Owner, Zigi's Wine Bar",
      content: "The most dedicated professionals I've worked with. Their SEO strategy doubled our organic traffic in just 3 months. Highly recommended!",
      rating: 5,
      image:"👨‍💼"
    }
  ];

  // Testimonial carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const autoPlayRef = useRef(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  // Auto-play functionality for desktop
  useEffect(() => {
    if (isAutoPlaying && window.innerWidth > 768) {
      autoPlayRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 3000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Navigation functions
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextTestimonial();
    } else if (isRightSwipe) {
      prevTestimonial();
    }
    
    setIsAutoPlaying(true);
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const slideInFromRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const slideInFromLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  // Rest of the animation variants and services data (same as before)
  const floatAnimation = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Services data (same as before)
  const services = [
    {
      icon: <Code size={24} />,
      title: "Web Design & Development",
      description: "We not only design and develop websites but also nurture them into big brands. Create responsive designs with latest technologies.",
      features: ["Responsive Design", "Latest Technologies", "Brand Focus"],
      link: "#web-design"
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "Ecommerce Development",
      description: "Create ecommerce websites compatible for all devices. Develop custom ecommerce solutions that suit your business perfectly.",
      features: ["Multi-device", "Custom Solutions", "Secure Payments"],
      link: "#ecommerce"
    },
    {
      icon: <Globe size={24} />,
      title: "Web Application Development",
      description: "Create web applications for all businesses, from startups to enterprises, providing users a unique digital experience.",
      features: ["Scalable", "User-focused", "Latest Tech Stack"],
      link: "#web-apps"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile App Development",
      description: "Professional experts for developing customized mobile applications for Android & iPhone with user-centric approach.",
      features: ["Android & iOS", "User-centric", "Modern UI/UX"],
      link: "#mobile-apps"
    },
    {
      icon: <Palette size={24} />,
      title: "Graphics Designing",
      description: "Creative designs that tell your story. From branding to marketing materials, we create visuals that leave lasting impressions.",
      features: ["Brand Identity", "Marketing Materials", "Creative Direction"],
      link: "#graphics"
    },
    {
      icon: <Users size={24} />,
      title: "Social Media Management",
      description: "Engage your customers and increase business with the power of social media. Strategic content for maximum impact.",
      features: ["Content Strategy", "Community Management", "Analytics"],
      link: "#social-media"
    },
    {
      icon: <Search size={24} />,
      title: "SEO & Digital Marketing",
      description: "Our organic SEO process will increase your rank on Google and drive relevant traffic to your website.",
      features: ["Keyword Strategy", "On-page SEO", "Analytics"],
      link: "#seo"
    },
    {
      icon: <Megaphone size={24} />,
      title: "Branding & Logos",
      description: "Create memorable brand identities that resonate with your audience. From logos to complete brand guidelines.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity"],
      link: "#branding"
    }
  ];

  // Recent work data
  const recentWork = [
  {
    title: "Zigi's Wine Bar",
    category: "Web Development",
    description: "A rooted bar in Australia which is established in 1980's",
    image: "/showCase1.png", // Using placeholder for now
    gradient: "linear-gradient(135deg, #c9b28b, #b9a282)",
    link: "https://zigis.com.au/"
  },
  {
    title: "Arts by Purvi Shah",
    category: "Personal Portfolio",
    description: "A one of it's kind handcrafted website for the artist",
    image: "/showCase2.png", // Using placeholder for now
    gradient: "linear-gradient(135deg, #b9a282, #a18d71)",
    link: "https://www.artbypurvishah.com/"
  },
  {
    title: "Wake Up Sports",
    category: "Website development",
    description: "Complete rebrand for international sports company",
    image: "/showCase3.png", // Using placeholder for now
    gradient: "linear-gradient(135deg, #a18d71, #8b7557)",
    link: "https://www.wakeupuae.com/"
  },
  {
    title: "Social Media Campaign for Tiara Store",
    category: "Digital Marketing",
    description: "Viral campaign reaching 2M+ engaged users",
    image: "/showCase4.png", // Using placeholder for now
    gradient: "linear-gradient(135deg, #dcc5a8, #c9b28b)",
    link: ""
  }
];

  return (
    <main style={{ 
      backgroundColor: colors.beige[50],
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      overflow: 'hidden'
    }}>
      {/* Add Inter font */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Services Section (same as before) */}
      <section style={{ padding: '60px 20px', position: 'relative' }}>
        <motion.div
          style={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '300px',
            height: '300px',
            background: `radial-gradient(circle, ${colors.gold[200]}40, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(60px)',
            zIndex: 0,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <motion.div variants={fadeInUp} style={{ marginBottom: '16px' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: colors.gold[100],
                color: colors.gold[700],
                padding: '8px 20px',
                borderRadius: '40px',
                fontSize: '0.9rem',
                fontWeight: '500',
              }}>
                <Sparkles size={16} />
                We Create Experiences
              </span>
            </motion.div>

            <motion.h2 variants={fadeInUp} style={{
              fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              fontWeight: '300',
              color: colors.stone[800],
              marginBottom: '20px',
              lineHeight: '1.2',
            }}>
              Anyone can create websites,
              <span style={{ display: 'block', fontWeight: '500', color: colors.gold[600] }}>
                but we create experiences
              </span>
            </motion.h2>

            <motion.p variants={fadeInUp} style={{
              fontSize: '1.1rem',
              color: colors.stone[600],
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}>
              It takes extraordinary understanding to create an experience that draws visitors to select you over competitors.
            </motion.p>

            {/* Process steps */}
            <motion.div variants={fadeInUp} style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'clamp(20px, 5vw, 50px)',
              marginTop: '40px',
              flexWrap: 'wrap',
            }}>
              {['Think', 'Design', 'Build'].map((step, index) => (
                <motion.div
                  key={step}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span style={{
                    width: '40px',
                    height: '40px',
                    background: colors.gold[400],
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '600',
                    fontSize: '1.2rem',
                  }}>
                    {index + 1}
                  </span>
                  <span style={{
                    fontSize: '1.2rem',
                    fontWeight: index === 2 ? '500' : '300',
                    color: colors.stone[700],
                  }}>
                    {step}
                  </span>
                  {index < 2 && (
                    <ArrowRight size={20} style={{ color: colors.gold[400], marginLeft: '8px' }} />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginTop: '40px',
            }}
          >
            {services.map((service, index) => (
              <motion.article
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8 }}
                style={{
                  background: 'white',
                  borderRadius: '24px',
                  padding: '28px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  border: `1px solid ${colors.stone[200]}`,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: `linear-gradient(135deg, ${colors.gold[100]}, ${colors.gold[200]})`,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  color: colors.gold[600],
                }}>
                  {service.icon}
                </div>

                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '500',
                  color: colors.stone[800],
                  marginBottom: '12px',
                  lineHeight: '1.4',
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: '0.95rem',
                  color: colors.stone[600],
                  lineHeight: '1.6',
                  marginBottom: '16px',
                }}>
                  {service.description}
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '20px',
                }}>
                  {service.features.map((feature, idx) => (
                    <span key={idx} style={{
                      fontSize: '0.75rem',
                      padding: '4px 12px',
                      background: colors.stone[100],
                      color: colors.stone[600],
                      borderRadius: '20px',
                      fontWeight: '500',
                    }}>
                      {feature}
                    </span>
                  ))}
                </div>

                {/* <motion.a
                  href={service.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: colors.gold[600],
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                  }}
                  whileHover={{ x: 5 }}
                >
                  Read more <ArrowRight size={16} />
                </motion.a> */}
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recent Work Section (same as before) */}
      <section style={{ padding: '80px 20px', background: colors.beige[100] }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <motion.h2 variants={fadeInUp} style={{
              fontSize: 'clamp(2rem, 6vw, 3rem)',
              fontWeight: '300',
              color: colors.stone[800],
              marginBottom: '16px',
            }}>
              Our Recent <span style={{ fontWeight: '500', color: colors.gold[600] }}>Work</span>
            </motion.h2>
            <motion.p variants={fadeInUp} style={{
              fontSize: '1.1rem',
              color: colors.stone[600],
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Transforming ideas into exceptional digital experiences
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '30px',
            }}
          >
            {recentWork.map((work, index) => (
              <motion.article
  key={index}
  variants={scaleIn}
  whileHover={{ y: -10 }}
  style={{
    background: 'white',
    borderRadius: '30px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
  }}
>
  {/* Image Container with actual image tag */}
  <div style={{
    height: '200px',
    background: work.gradient,
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Use actual img tag instead of emoji */}
    <img 
      src={work.image} 
      alt={work.title}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
      onError={(e) => {
        // Fallback if image fails to load
        e.target.style.display = 'none';
        e.target.parentElement.style.background = work.gradient;
      }}
    />
    
    {/* Category badge */}
    <motion.div
      style={{
        position: 'absolute',
        top: '16px',
        right: '16px',
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(8px)',
        padding: '4px 12px',
        borderRadius: '20px',
        color: 'white',
        fontSize: '0.8rem',
        fontWeight: '500',
        zIndex: 2,
      }}
      whileHover={{ scale: 1.05 }}
    >
      {work.category}
    </motion.div>

    {/* Optional: Add a clickable overlay for the link */}
    {work.link && (
      <motion.a
        href={work.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          fontSize: '0.9rem',
          fontWeight: '500',
          textDecoration: 'none',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
        whileHover={{ opacity: 1 }}
      >
        View Project <ArrowRight size={16} style={{ marginLeft: '8px' }} />
      </motion.a>
    )}
  </div>
  
  {/* Content */}
  <div style={{ padding: '24px' }}>
    <h3 style={{
      fontSize: '1.2rem',
      fontWeight: '500',
      color: colors.stone[800],
      marginBottom: '8px',
    }}>
      {work.title}
    </h3>
    <p style={{
      fontSize: '0.95rem',
      color: colors.stone[600],
      lineHeight: '1.5',
    }}>
      {work.description}
    </p>
    
    {/* Add view project link */}
    {work.link && (
      <motion.a
        href={work.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginTop: '16px',
          color: colors.gold[600],
          textDecoration: 'none',
          fontSize: '0.9rem',
          fontWeight: '500',
        }}
        whileHover={{ x: 5 }}
      >
        Visit Website <ArrowRight size={14} />
      </motion.a>
    )}
  </div>
</motion.article>
            ))}
          </motion.div>

          <motion.div
            style={{ textAlign: 'center', marginTop: '50px' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* <motion.button
              style={{
                padding: '16px 40px',
                background: 'transparent',
                border: `2px solid ${colors.gold[400]}`,
                color: colors.gold[600],
                borderRadius: '40px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
              whileHover={{ scale: 1.05, background: colors.gold[400], color: 'white' }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects <ChevronRight size={18} />
            </motion.button> */}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Updated with carousel */}
      <section style={{ padding: '80px 20px', position: 'relative', overflow: 'hidden' }}>
        <motion.div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            width: '250px',
            height: '250px',
            background: `radial-gradient(circle, ${colors.gold[200]}40, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(50px)',
            zIndex: 0,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <motion.div variants={fadeInUp} style={{ marginBottom: '16px' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: colors.gold[100],
                color: colors.gold[700],
                padding: '8px 20px',
                borderRadius: '40px',
                fontSize: '0.9rem',
                fontWeight: '500',
              }}>
                <MessageCircle size={16} />
                Client Stories
              </span>
            </motion.div>

            <motion.h2 variants={fadeInUp} style={{
              fontSize: 'clamp(2rem, 6vw, 3rem)',
              fontWeight: '300',
              color: colors.stone[800],
              marginBottom: '16px',
            }}>
              What Our <span style={{ fontWeight: '500', color: colors.gold[600] }}>Clients Say</span>
            </motion.h2>
          </motion.div>

          {/* Testimonial Carousel */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{ position: 'relative' }}
          >
            {/* Desktop Navigation Buttons */}
            <motion.button
              onClick={prevTestimonial}
              style={{
                position: 'absolute',
                left: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'white',
                border: `1px solid ${colors.stone[200]}`,
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.gold[600],
              }}
              whileHover={{ scale: 1.1, background: colors.gold[400], color: 'white' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              style={{
                position: 'absolute',
                right: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'white',
                border: `1px solid ${colors.stone[200]}`,
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.gold[600],
              }}
              whileHover={{ scale: 1.1, background: colors.gold[400], color: 'white' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRightIcon size={24} />
            </motion.button>

            {/* Testimonial Cards */}
            <div style={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              position: 'relative',
              minHeight: '350px',
            }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={direction > 0 ? slideInFromRight : slideInFromLeft}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{
                    background: 'white',
                    borderRadius: '30px',
                    padding: '40px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                    border: `1px solid ${colors.stone[200]}`,
                    position: 'relative',
                  }}
                >
                  <Quote size={60} style={{
                    position: 'absolute',
                    top: '20px',
                    right: '30px',
                    color: colors.gold[200],
                    opacity: 0.3,
                  }} />

                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: `linear-gradient(135deg, ${colors.gold[200]}, ${colors.gold[400]})`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem',
                    }}>
                      {testimonials[currentIndex].image}
                    </div>
                    <div>
                      <h4 style={{
                        fontSize: '1.3rem',
                        fontWeight: '600',
                        color: colors.stone[800],
                        marginBottom: '4px',
                      }}>
                        {testimonials[currentIndex].name}
                      </h4>
                      <p style={{
                        fontSize: '0.95rem',
                        color: colors.stone[500],
                      }}>
                        {testimonials[currentIndex].role} {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} fill={colors.gold[400]} color={colors.gold[400]} />
                    ))}
                  </div>

                  <p style={{
                    fontSize: '1.1rem',
                    color: colors.stone[600],
                    lineHeight: '1.8',
                    fontStyle: 'italic',
                    margin: 0,
                  }}>
                    "{testimonials[currentIndex].content}"
                  </p>

                  <motion.div
                    style={{
                      marginTop: '30px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Zap size={16} color={colors.gold[400]} />
                    <span style={{ fontSize: '0.9rem', color: colors.gold[600] }}>Verified Client</span>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '30px',
            }}>
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  style={{
                    width: index === currentIndex ? '30px' : '10px',
                    height: '10px',
                    borderRadius: '10px',
                    background: index === currentIndex ? colors.gold[400] : colors.stone[300],
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section (same as before) */}
      <section style={{ padding: '80px 20px', background: colors.stone[800] }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} style={{ marginBottom: '24px' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: colors.gold[300],
                padding: '8px 20px',
                borderRadius: '40px',
                fontSize: '0.9rem',
                fontWeight: '500',
                backdropFilter: 'blur(8px)',
              }}>
                <Heart size={16} />
                Let's Create Together
              </span>
            </motion.div>

            <motion.h2 variants={fadeInUp} style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: '300',
              color: 'white',
              marginBottom: '20px',
              lineHeight: '1.3',
            }}>
              Looking for a 
              <span style={{ fontWeight: '500', color: colors.gold[400], display: 'block' }}>
                Collaboration?
              </span>
            </motion.h2>

            <motion.p variants={fadeInUp} style={{
              fontSize: '1.2rem',
              color: colors.stone[300],
              maxWidth: '600px',
              margin: '0 auto 40px',
              lineHeight: '1.7',
            }}>
              Let's transform your vision into reality. We're just a message away from starting something amazing together.
            </motion.p>

            <motion.div variants={fadeInUp} style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
             <Link to="/contact" style={{ textDecoration: 'none' }}>
            
              <motion.button
                style={{
                  padding: '18px 45px',
                  background: colors.gold[400],
                  color: colors.stone[800],
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 20px 30px rgba(201, 178, 139, 0.3)',
                }}
                whileHover={{ scale: 1.05, background: colors.gold[500] }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project <Rocket size={18} />
              </motion.button>
 </Link> 

 <Link to="/contact" style={{ textDecoration: 'none' }}>

              <motion.button
                style={{
                  padding: '18px 45px',
                  background: 'transparent',
                  color: 'white',
                  border: `2px solid ${colors.gold[400]}`,
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
                whileHover={{ scale: 1.05, background: 'rgba(201, 178, 139, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us <MessageCircle size={18} />
              </motion.button>
               </Link>
            </motion.div>

            {/* <motion.div variants={fadeInUp} style={{
              marginTop: '50px',
              display: 'flex',
              justifyContent: 'center',
              gap: '40px',
              flexWrap: 'wrap',
            }}>
              {[
                { icon: <Award size={20} />, text: "5+ Years Excellence" },
                { icon: <Users size={20} />, text: "200+ Happy Clients" },
                { icon: <Briefcase size={20} />, text: "300+ Projects Done" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: colors.stone[300],
                  }}
                  whileHover={{ color: colors.gold[400], scale: 1.05 }}
                >
                  {item.icon}
                  <span style={{ fontSize: '0.95rem' }}>{item.text}</span>
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServicesLanding;