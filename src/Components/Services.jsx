import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, ShoppingCart, Globe, Smartphone, Palette, Users, 
  Search, Megaphone, Star, Shield, Zap, TrendingUp, Award,
  Sparkles, ArrowRight, CheckCircle, Rocket, Heart, Eye,
  Target, BarChart, Camera, MessageCircle, Briefcase, Crown
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PremiumServicesPage = () => {
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

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
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

  // Services data with enhanced descriptions
  const services = [
    {
      icon: <Code size={32} />,
      title: "Web Design & Development",
      description: "We don't just build websites; we craft digital experiences that grow into powerful brands. Our team follows best practices in security, scalability, and performance to deliver websites that not only look stunning but also load instantly and rank higher.",
      features: ["Responsive Design", "Latest Technologies", "Brand Focus", "SEO Optimized", "Fast Loading"],
      stats: { projects: "250+", satisfaction: "98%" },
      gradient: "linear-gradient(135deg, #c9b28b, #b9a282)",
      detailedDesc: "Every line of code is written with precision, ensuring your website is secure, scalable, and ready for millions of visitors. We implement modern architectures that grow with your business.",
      achievements: [
        { icon: <Zap size={16} />, text: "Lightning fast load times under 2 seconds" },
        { icon: <Shield size={16} />, text: "Enterprise-grade security protocols" },
        { icon: <TrendingUp size={16} />, text: "Scalable to handle 1M+ monthly visitors" }
      ]
    },
    {
      icon: <ShoppingCart size={32} />,
      title: "Ecommerce Development",
      description: "Transform your business with powerful ecommerce solutions that drive sales and create loyal customers. We've helped businesses increase their online revenue by an average of 150% through optimized shopping experiences.",
      features: ["Multi-device", "Custom Solutions", "Secure Payments", "Inventory Management", "Analytics"],
      stats: { projects: "180+", revenue: "+150%" },
      gradient: "linear-gradient(135deg, #b9a282, #a18d71)",
      detailedDesc: "From small boutiques to enterprise marketplaces, we build ecommerce platforms that convert visitors into customers. Integrated with major payment gateways and built for high conversion rates.",
      achievements: [
        { icon: <Rocket size={16} />, text: "30% higher conversion rates on average" },
        { icon: <Shield size={16} />, text: "PCI compliant secure checkout" },
        { icon: <Globe size={16} />, text: "Sell globally with multi-currency support" }
      ]
    },
    {
      icon: <Globe size={32} />,
      title: "Web Application Development",
      description: "Powerful, scalable web applications that solve complex business challenges. Our apps handle millions of transactions daily with 99.9% uptime, serving users across the globe with seamless performance.",
      features: ["Scalable", "User-focused", "Latest Tech Stack", "Real-time", "Cloud Native"],
      stats: { projects: "120+", uptime: "99.9%" },
      gradient: "linear-gradient(135deg, #a18d71, #8b7557)",
      detailedDesc: "Whether it's a SaaS platform, CRM, or custom business tool, we build web applications that are robust, secure, and intuitive. Used by companies worldwide to streamline operations.",
      achievements: [
        { icon: <Users size={16} />, text: "Serving 500,000+ active users globally" },
        { icon: <Zap size={16} />, text: "Real-time updates under 100ms latency" },
        { icon: <Award size={16} />, text: "99.9% uptime guaranteed" }
      ]
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences. Our apps have been downloaded over 5 million times and maintain 4.8+ star ratings across app stores.",
      features: ["Android & iOS", "User-centric", "Modern UI/UX", "Offline Support", "Push Notifications"],
      stats: { downloads: "5M+", rating: "4.8★" },
      gradient: "linear-gradient(135deg, #dcc5a8, #c9b28b)",
      detailedDesc: "From startups to Fortune 500 companies, we create mobile experiences that users love. Our apps are optimized for performance, battery life, and seamless integration with device features.",
      achievements: [
        { icon: <Star size={16} />, text: "4.8+ average app store rating" },
        // { icon: <Download size={16} />, text: "5 million+ total downloads" },
        { icon: <Award size={16} />, text: "Featured in App Store 20+ times" }
      ]
    },
    {
      icon: <Palette size={32} />,
      title: "Graphics Designing",
      description: "Eye-catching, modern designs that tell your brand's story. Our portfolio includes work for global brands, with designs that have won international awards and recognition.",
      features: ["Brand Identity", "Marketing Materials", "Creative Direction", "Print Design", "Digital Art"],
      stats: { projects: "500+", awards: "15+" },
      gradient: "linear-gradient(135deg, #c9b28b, #dcc5a8)",
      detailedDesc: "We create visuals that stop the scroll and capture attention. From minimalist logos to elaborate brand identities, every design is crafted to evoke emotion and drive engagement.",
      achievements: [
        { icon: <Award size={16} />, text: "15+ international design awards" },
        { icon: <Eye size={16} />, text: "Featured in top design publications" },
        { icon: <Heart size={16} />, text: "98% client satisfaction rate" }
      ]
    },
    {
      icon: <Users size={32} />,
      title: "Social Media Management",
      description: "Strategic social media management that builds communities and drives engagement. We've grown audiences to millions of followers and generated over 100M+ impressions.",
      features: ["Content Strategy", "Community Management", "Analytics", "Campaign Management", "Influencer Outreach"],
      stats: { followers: "2M+", engagement: "+200%" },
      gradient: "linear-gradient(135deg, #b9a282, #c9b28b)",
      detailedDesc: "We don't just post; we create conversations. Our data-driven approach ensures every post reaches the right audience at the right time, building authentic connections with your community.",
      achievements: [
        { icon: <Users size={16} />, text: "Grown communities to 2M+ followers" },
        { icon: <MessageCircle size={16} />, text: "100M+ impressions generated" },
        { icon: <TrendingUp size={16} />, text: "200% average engagement increase" }
      ]
    },
    {
      icon: <Search size={32} />,
      title: "SEO & Digital Marketing",
      description: "Data-driven SEO strategies that put you on page one. We've helped clients achieve #1 rankings for competitive keywords, driving 300% more organic traffic.",
      features: ["Keyword Strategy", "On-page SEO", "Analytics", "Link Building", "Local SEO"],
      stats: { keywords: "500+", traffic: "+300%" },
      gradient: "linear-gradient(135deg, #a18d71, #b9a282)",
      detailedDesc: "Our holistic approach combines technical SEO, content strategy, and authority building to create sustainable growth. We focus on real results that impact your bottom line.",
      achievements: [
        { icon: <Target size={16} />, text: "#1 rankings for 500+ competitive keywords" },
        { icon: <BarChart size={16} />, text: "300% average organic traffic increase" },
        { icon: <Zap size={16} />, text: "Pages load 2x faster after optimization" }
      ]
    },
    {
      icon: <Megaphone size={32} />,
      title: "Branding & Logos",
      description: "Complete brand identities that resonate and endure. We've created brands for 20+ companies that have become household names, with identities that stand the test of time.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy", "Voice & Tone"],
      stats: { brands: "20+", recognition: "90%" },
      gradient: "linear-gradient(135deg, #8b7557, #a18d71)",
      detailedDesc: "Your brand is more than a logo—it's how the world perceives you. We create cohesive identities that communicate your values, connect with your audience, and differentiate you from competitors.",
      achievements: [
        { icon: <Crown size={16} />, text: "20+ successful brand launches" },
        { icon: <Award size={16} />, text: "90% brand recognition in target markets" },
        { icon: <Heart size={16} />, text: "Identities that last for decades" }
      ]
    }
  ];

  // Stats data
  const statsData = [
    { value: "1000+", label: "Projects Delivered", icon: <Briefcase size={24} /> },
    { value: "98%", label: "Client Satisfaction", icon: <Heart size={24} /> },
    { value: "50+", label: "Expert Team", icon: <Users size={24} /> },
    { value: "8+", label: "Years Excellence", icon: <Award size={24} /> },
    { value: "15+", label: "Countries Served", icon: <Globe size={24} /> },
    { value: "20+", label: "Brands Built", icon: <Crown size={24} /> }
  ];

  // Process steps
  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into your business goals, audience, and competition"
    },
    {
      step: "02",
      title: "Strategy",
      description: "Crafting a tailored plan that aligns with your vision and objectives"
    },
    {
      step: "03",
      title: "Design",
      description: "Creating beautiful, functional designs that tell your story"
    },
    {
      step: "04",
      title: "Development",
      description: "Building with best practices for performance, security, and scale"
    },
    {
      step: "05",
      title: "Launch",
      description: "Deploying with confidence and monitoring for success"
    },
    {
      step: "06",
      title: "Grow",
      description: "Continuous optimization and support for long-term growth"
    }
  ];

  return (
    <main style={{
      backgroundColor: colors.beige[50],
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      overflow: 'hidden',
    }}>
      {/* Add Inter font */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Hero Section */}
      {/* <section style={{
        padding: '100px 20px 60px',
        background: `linear-gradient(135deg, ${colors.beige[100]} 0%, ${colors.beige[50]} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}> */}
        {/* Decorative elements */}
        {/* <motion.div
          style={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '400px',
            height: '400px',
            background: `radial-gradient(circle, ${colors.gold[200]}40, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(80px)',
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
        /> */}

        {/* <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ textAlign: 'center' }}
          > */}
            {/* <motion.div variants={fadeInUp} style={{ marginBottom: '20px' }}>
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
                Premium Digital Solutions
              </span>
            </motion.div> */}

            {/* <motion.h1 variants={fadeInUp} style={{
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: '300',
              color: colors.stone[800],
              marginBottom: '20px',
              lineHeight: '1.2',
            }}>
              Crafting Digital Excellence
              <span style={{ display: 'block', fontWeight: '500', color: colors.gold[600] }}>
                Across Every Dimension
              </span>
            </motion.h1> */}

            {/* <motion.p variants={fadeInUp} style={{
              fontSize: '1.2rem',
              color: colors.stone[600],
              maxWidth: '800px',
              margin: '0 auto 40px',
              lineHeight: '1.7',
            }}>
              From stunning websites to powerful mobile apps, we create digital experiences 
              that drive growth, engage audiences, and build lasting brand value.
            </motion.p> */}

            {/* Stats Row */}
            {/* <motion.div
              variants={fadeInUp}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '40px',
                marginTop: '40px',
              }}
            >
              {statsData.slice(0, 3).map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  style={{ textAlign: 'center' }}
                >
                  <div style={{ fontSize: '2rem', fontWeight: '600', color: colors.gold[600] }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: colors.stone[500] }}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div> */}
          {/* </motion.div>
        </div>
      </section>  */}

      {/* Stats Grid */}
      {/* <section style={{ padding: '40px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '20px',
            }}
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '20px',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  border: `1px solid ${colors.stone[200]}`,
                }}
              >
                <div style={{ color: colors.gold[400], marginBottom: '10px' }}>{stat.icon}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '600', color: colors.stone[800] }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: colors.stone[500] }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Services Grid */}
      <section style={{ padding: '100px 20px 60px',
        background: `linear-gradient(135deg, ${colors.beige[100]} 0%, ${colors.beige[50]} 100%)`,
        position: 'relative',
        overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <motion.h2 variants={fadeInUp} style={{
              fontSize: 'clamp(2rem, 6vw, 2.8rem)',
              fontWeight: '300',
              color: colors.stone[800],
              marginBottom: '16px',
            }}>
              Our <span style={{ fontWeight: '500', color: colors.gold[600] }}>Services</span>
            </motion.h2>
            <motion.p variants={fadeInUp} style={{
              fontSize: '1.1rem',
              color: colors.stone[600],
              maxWidth: '700px',
              margin: '0 auto',
            }}>
              Comprehensive digital solutions tailored to your unique needs, 
              delivered with precision and passion.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '30px',
            }}
          >
            {services.map((service, index) => (
              <motion.article
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                style={{
                  background: 'white',
                  borderRadius: '30px',
                  padding: '30px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
                  border: `1px solid ${colors.stone[200]}`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative gradient bar */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: service.gradient,
                }} />

                {/* Service Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: service.gradient,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                  }}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.4rem',
                      fontWeight: '500',
                      color: colors.stone[800],
                      marginBottom: '5px',
                    }}>
                      {service.title}
                    </h3>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      {Object.entries(service.stats).map(([key, value]) => (
                        <span key={key} style={{
                          fontSize: '0.8rem',
                          color: colors.gold[600],
                          fontWeight: '500',
                        }}>
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '0.95rem',
                  color: colors.stone[600],
                  lineHeight: '1.7',
                  marginBottom: '20px',
                }}>
                  {service.description}
                </p>

                {/* Features */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '20px',
                }}>
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.75rem',
                        padding: '4px 12px',
                        background: colors.stone[100],
                        color: colors.stone[600],
                        borderRadius: '20px',
                        fontWeight: '500',
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <div style={{
                  background: colors.beige[50],
                  borderRadius: '16px',
                  padding: '15px',
                  marginBottom: '20px',
                }}>
                  {service.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: idx < service.achievements.length - 1 ? '10px' : 0,
                      }}
                    >
                      <span style={{ color: colors.gold[400] }}>{achievement.icon}</span>
                      <span style={{ fontSize: '0.85rem', color: colors.stone[600] }}>
                        {achievement.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                {/* <motion.a
                  href="#"
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
                  Learn More <ArrowRight size={16} />
                </motion.a> */}
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              fontSize: 'clamp(2rem, 6vw, 2.8rem)',
              fontWeight: '300',
              color: colors.stone[800],
              marginBottom: '16px',
            }}>
              Our <span style={{ fontWeight: '500', color: colors.gold[600] }}>Process</span>
            </motion.h2>
            <motion.p variants={fadeInUp} style={{
              fontSize: '1.1rem',
              color: colors.stone[600],
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              A systematic approach that ensures excellence at every stage
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
            }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '30px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: colors.gold[200],
                  position: 'absolute',
                  top: '10px',
                  right: '15px',
                  opacity: 0.5,
                }}>
                  {step.step}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '500',
                  color: colors.stone[800],
                  marginBottom: '10px',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: colors.stone[600],
                  lineHeight: '1.6',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 20px',
        background: `linear-gradient(135deg, ${colors.stone[800]} 0%, ${colors.stone[900]} 100%)`,
        textAlign: 'center',
      }}>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <motion.h2 variants={fadeInUp} style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '300',
            color: 'white',
            marginBottom: '20px',
          }}>
            Ready to Transform Your
            <span style={{ display: 'block', fontWeight: '500', color: colors.gold[400] }}>
              Digital Presence?
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} style={{
            fontSize: '1.1rem',
            color: colors.stone[300],
            marginBottom: '40px',
            lineHeight: '1.7',
          }}>
            Let's discuss how our services can help you achieve your business goals.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
           
            <motion.button
              style={{
                padding: '18px 50px',
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
              Start Your Journey <ArrowRight size={20} />
            </motion.button> </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer note */}
      <footer style={{ padding: '20px', textAlign: 'center', background: colors.stone[900] }}>
        <p style={{ color: colors.stone[400], fontSize: '0.9rem' }}>
          Partner with us to create digital excellence that drives real business results.
        </p>
      </footer>
    </main>
  );
};

export default PremiumServicesPage;