import React from 'react';
import { motion } from 'framer-motion';
import {
  Code, ShoppingCart, Globe, Smartphone, Palette, Users, Search, Megaphone,
  Cpu, Share2, Database, Cloud, Zap, Shield, TrendingUp, Rocket, Award,
  Star, Eye, Heart, MessageCircle, Target, BarChart, Crown, Brain, Clock,
  Sparkles, ArrowRight, CheckCircle, Camera, Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PremiumServicesPage = () => {
  // Custom color palette (keep your existing colors)
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

  // Animation variants (keep your existing variants)
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

  // Services data (keep your existing services array)
 const services = [
  { 
    icon: <Code size={32} />, 
    title: "Web Design & Development", 
    description: "We don't just build websites; we craft digital experiences that grow into powerful brands. Our team follows best practices in security, scalability, and performance to deliver websites that not only look stunning but also load instantly and rank higher.", 
    features: ["Responsive Design", "Latest Technologies", "Brand Focus", "SEO Optimized", "Fast Loading"], 
    stats: { projects: "250+", satisfaction: "98%" }, 
    gradient: "linear-gradient(135deg, #c9b28b, #b9a282)", 
    detailedDesc: "Every line of code is written with precision, ensuring your website is secure, scalable, and ready for millions of visitors. We implement modern architectures that grow with your business. We build artfully designed, lightning-fast websites that are optimized for search engines and built to convert visitors into customers.", 
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
    description: "Powerful, scalable web applications that solve complex business challenges. Our apps handle millions of transactions daily with 99.9% uptime, serving users across the globe with seamless performance. Seamless performance and real-time capabilities that drive business growth.", 
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
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences. Our apps have been downloaded over 5 million times and maintain 4.8+ star ratings across app stores. We blend cutting-edge technology with user-centric design to create mobile apps that not only look great but also perform flawlessly.", 
    features: ["Android & iOS", "User-centric", "Modern UI/UX", "Offline Support", "Push Notifications"], 
    stats: { downloads: "5M+", rating: "4.8★" }, 
    gradient: "linear-gradient(135deg, #dcc5a8, #c9b28b)", 
    detailedDesc: "From startups to Fortune 500 companies, we create mobile experiences that users love. Our apps are optimized for performance, battery life, and seamless integration with device features.", 
    achievements: [ 
      { icon: <Star size={16} />, text: "4.8+ average app store rating" }, 
      { icon: <Award size={16} />, text: "Featured in App Store 20+ times" } 
    ] 
  },
  { 
    icon: <Palette size={32} />, 
    title: "Graphics Designing", 
    description: "Eye-catching, modern designs that tell your brand's story. Our portfolio includes work for global brands, with designs that have won international awards and recognition. Clear, compelling visuals that elevate your brand and captivate your audience. We create designs that not only look stunning but also communicate your message effectively.", 
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
    description: "Strategic social media management that builds communities and drives engagement. We've grown audiences to millions of followers and generated over 100M+ impressions. Brands don't just need followers; they need engaged communities.", 
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
    description: "Data-driven SEO strategies that put you on page one. We've helped clients achieve #1 rankings for competitive keywords, driving 300% more organic traffic. Our holistic SEO and digital marketing strategies are designed to drive sustainable growth, increase visibility, and deliver real business results.", 
    features: ["Keyword Strategy", "On-page SEO", "Analytics", "Link Building", "Local SEO"], 
    stats: { keywords: "500+", traffic: "+300%" }, 
    gradient: "linear-gradient(135deg, #a18d71, #b9a282)", 
    detailedDesc: "Our holistic approach combines technical SEO, content strategy, and authority building to create sustainable growth. We focus on real results that impact your bottom line.", 
    achievements: [ 
      { icon: <Target size={16} />, text: "#1 ranking for 500+ competitive keywords" }, 
      { icon: <BarChart size={16} />, text: "300% average organic traffic increase" }, 
      { icon: <Zap size={16} />, text: "Pages load 2x faster after optimization" } 
    ] 
  },
  { 
    icon: <Megaphone size={32} />, 
    title: "Branding & Logos", 
    description: "Complete brand identities that resonate and endure. We've created brands for 20+ companies that have become household names, with identities that stand the test of time. We nurture brands from ground to their full potential.", 
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy", "Voice & Tone"], 
    stats: { brands: "20+", recognition: "90%" }, 
    gradient: "linear-gradient(135deg, #8b7557, #a18d71)", 
    detailedDesc: "Your brand is more than a logo—it's how the world perceives you. We create cohesive identities that communicate your values, connect with your audience, and differentiate you from competitors.", 
    achievements: [ 
      { icon: <Crown size={16} />, text: "20+ successful brand launches" }, 
      { icon: <Award size={16} />, text: "90% brand recognition in target markets" }, 
      { icon: <Heart size={16} />, text: "Identities that last for decades" } 
    ] 
  },
  { 
    icon: <Cpu size={32} />, 
    title: "AI Automation & Agents", 
    description: "Harness the power of AI to automate workflows and deploy intelligent agents that enhance efficiency and decision-making. We've helped businesses reduce operational costs by 40% through strategic AI implementation.", 
    features: ["Workflow Automation", "Intelligent Agents", "Data-driven Insights", "Process Optimization", "Predictive Analytics"], 
    stats: { efficiency: "+40%", projects: "50+" }, 
    gradient: "linear-gradient(135deg, #6b5a4a, #8b7557)", 
    detailedDesc: "From customer service chatbots to complex decision-making systems, we build AI solutions that learn and adapt. Our AI agents handle millions of interactions while continuously improving through machine learning.", 
    achievements: [ 
      { icon: <Zap size={16} />, text: "40% reduction in operational costs" }, 
      { icon: <Brain size={16} />, text: "AI agents handling 1M+ interactions monthly" }, 
      { icon: <TrendingUp size={16} />, text: "99.5% accuracy in predictive models" } 
    ] 
  },
  { 
    icon: <Share2 size={32} />, 
    title: "Social Media Integration", 
    description: "Seamlessly integrate social media platforms with your business systems to maximize reach and engagement. Our integration solutions have increased cross-platform engagement by 180% for our clients.", 
    features: ["Cross-platform Integration", "Automated Posting", "Analytics Sync", "Social Listening", "API Integration"], 
    stats: { engagement: "+180%", platforms: "10+" }, 
    gradient: "linear-gradient(135deg, #a18d71, #b9a282)", 
    detailedDesc: "Connect all your social channels into a unified ecosystem. Our integrations enable real-time syncing, automated workflows, and comprehensive analytics across every platform your business uses.", 
    achievements: [ 
      { icon: <Globe size={16} />, text: "Integrated with 10+ major platforms" }, 
      { icon: <BarChart size={16} />, text: "180% increase in cross-platform engagement" }, 
      { icon: <Clock size={16} />, text: "20+ hours saved weekly on manual posting" } 
    ] 
  },
  { 
    icon: <Database size={32} />, 
    title: "ERP & CRM Solutions", 
    description: "Implement ERP and CRM systems tailored to your business needs, streamlining operations and enhancing customer relationships. Our solutions have helped clients achieve 99.9% data accuracy and 50% faster reporting.", 
    features: ["Process Optimization", "Customer Management", "Scalable Solutions", "Data Integration", "Real-time Reporting"], 
    stats: { accuracy: "99.9%", growth: "+200%" }, 
    gradient: "linear-gradient(135deg, #8b7557, #6b5a4a)", 
    detailedDesc: "End-to-end business management solutions that integrate every aspect of your operations. From inventory to customer relationships, our ERP/CRM systems provide complete visibility and control.", 
    achievements: [ 
      { icon: <Shield size={16} />, text: "99.9% data accuracy achieved" }, 
      { icon: <Zap size={16} />, text: "50% faster reporting and analytics" }, 
      { icon: <Users size={16} />, text: "200% improvement in customer response time" } 
    ] 
  },
  { 
    icon: <Cloud size={32} />, 
    title: "Cloud Solutions & DevOps", 
    description: "Leverage cloud infrastructure and DevOps practices to build scalable, secure, and efficient systems tailored to your business needs. We've helped clients achieve 99.99% uptime and 60% faster deployment cycles.", 
    features: ["Cloud Infrastructure", "CI/CD Automation", "Scalability & Security", "Infrastructure as Code", "24/7 Monitoring"], 
    stats: { uptime: "99.99%", deployments: "60%" }, 
    gradient: "linear-gradient(135deg, #b9a282, #dcc5a8)", 
    detailedDesc: "Modern infrastructure solutions that scale effortlessly with your business. From AWS to Azure, we design, deploy, and manage cloud architectures that are resilient, cost-effective, and future-proof.", 
    achievements: [ 
      { icon: <Cloud size={16} />, text: "99.99% infrastructure uptime guaranteed" }, 
      { icon: <Rocket size={16} />, text: "60% faster deployment cycles" }, 
      { icon: <Shield size={16} />, text: "Enterprise-grade security & compliance" } 
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

  // Add responsive styles using a style tag
  const responsiveStyles = `
    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr !important;
        gap: 20px !important;
        padding: 0 10px !important;
      }
      
      .service-card {
        padding: 20px !important;
        margin: 0 !important;
        width: 100% !important;
      }
      
      .service-header {
        flex-direction: column !important;
        text-align: center !important;
        align-items: center !important;
      }
      
      .service-icon {
        margin-bottom: 10px !important;
      }
      
      .features-container {
        justify-content: center !important;
      }
      
      .process-grid {
        grid-template-columns: 1fr !important;
        gap: 15px !important;
        padding: 0 10px !important;
      }
      
      .section-title {
        font-size: 2rem !important;
        padding: 0 15px !important;
      }
      
      .section-description {
        padding: 0 15px !important;
        font-size: 1rem !important;
      }
      
      .cta-section {
        padding: 60px 15px !important;
      }
      
      .cta-button {
        width: 100% !important;
        justify-content: center !important;
        padding: 15px 30px !important;
      }
      
      .footer-note {
        padding: 20px 15px !important;
      }
    }

    @media (max-width: 480px) {
      .service-card {
        padding: 15px !important;
      }
      
      .service-title {
        font-size: 1.2rem !important;
      }
      
      .feature-tag {
        font-size: 0.7rem !important;
        padding: 3px 8px !important;
      }
      
      .achievement-item {
        flex-direction: column !important;
        text-align: center !important;
        gap: 5px !important;
      }
    }
  `;

  // Function to get navbar height (adjust this value based on your actual navbar height)
  const getNavbarHeight = () => {
    // You can adjust these values based on your actual navbar height
    const desktopHeight = '80px';
    const mobileHeight = '60px';
    
    return `
      :root {
        --navbar-height-desktop: ${desktopHeight};
        --navbar-height-mobile: ${mobileHeight};
      }
      
      .content-with-navbar {
        padding-top: var(--navbar-height-desktop);
      }
      
      @media (max-width: 768px) {
        .content-with-navbar {
          padding-top: var(--navbar-height-mobile);
        }
      }
    `;
  };

  return (
    <main style={{
      backgroundColor: colors.beige[50],
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100vw',
      margin: 0,
      padding: 0,
      minHeight: '100vh',
    }}>
      <style>{responsiveStyles}</style>
      <style>{getNavbarHeight()}</style>

      {/* Spacer div to account for fixed navbar */}
      <div className="content-with-navbar" style={{
        width: '100%',
      }}>
        {/* Your existing content starts here */}
        
        {/* Services Grid */}
        <section style={{ 
          padding: '40px 20px 40px', // Reduced top padding since we have the navbar spacer
          background: `linear-gradient(135deg, ${colors.beige[100]} 0%, ${colors.beige[50]} 100%)`,
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            width: '100%',
            padding: '0 10px',
            boxSizing: 'border-box',
          }}>
            {/* Your existing content continues... */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              style={{ textAlign: 'center', marginBottom: '40px' }}
            >
              {/* <motion.div variants={fadeInUp} style={{ marginBottom: '20px' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: colors.gold[100],
                  color: colors.gold[700],
                  padding: '8px 20px',
                  borderRadius: '40px',
                  fontSize: 'clamp(0.8rem, 3vw, 0.9rem)',
                  fontWeight: '500',
                }}>
                  <Sparkles size={16} />
                  GrowWZa STUDIOS
                </span>
              </motion.div> */}

              <motion.h2 
                variants={fadeInUp} 
                className="section-title"
                style={{
                  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                  fontWeight: '300',
                  color: colors.stone[800],
                  marginBottom: '16px',
                  lineHeight: '1.2',
                  wordBreak: 'break-word',
                }}
              >
                Our <span style={{ fontWeight: '500', color: colors.gold[600] }}>Services</span>
              </motion.h2>
              <motion.p 
                variants={fadeInUp} 
                className="section-description"
                style={{
                  fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                  color: colors.stone[600],
                  maxWidth: '700px',
                  margin: '0 auto',
                  padding: '0 10px',
                }}
              >
                Comprehensive digital solutions tailored to your unique needs, 
                delivered with precision and passion.
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="services-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '25px',
                width: '100%',
              }}
            >
              {services.map((service, index) => (
                <motion.article
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="service-card"
                  style={{
                    background: 'white',
                    borderRadius: '24px',
                    padding: '25px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
                    border: `1px solid ${colors.stone[200]}`,
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%',
                    boxSizing: 'border-box',
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
                  <div className="service-header" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '15px', 
                    marginBottom: '20px',
                    flexWrap: 'wrap',
                  }}>
                    <div className="service-icon" style={{
                      width: '60px',
                      height: '60px',
                      background: service.gradient,
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      flexShrink: 0,
                    }}>
                      {service.icon}
                    </div>
                    <div style={{ flex: 1, minWidth: '150px' }}>
                      <h3 className="service-title" style={{
                        fontSize: 'clamp(1.2rem, 4vw, 1.4rem)',
                        fontWeight: '500',
                        color: colors.stone[800],
                        marginBottom: '5px',
                        lineHeight: '1.3',
                      }}>
                        {service.title}
                      </h3>
                      <div style={{ 
                        display: 'flex', 
                        gap: '10px',
                        flexWrap: 'wrap',
                      }}>
                        {/* {Object.entries(service.stats).map(([key, value]) => (
                          <span key={key} style={{
                            fontSize: '0.75rem',
                            color: colors.gold[600],
                            fontWeight: '500',
                            background: colors.gold[100],
                            padding: '2px 8px',
                            borderRadius: '12px',
                          }}>
                            {value}
                          </span>
                        ))} */}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.95rem',
                    color: colors.stone[600],
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    wordBreak: 'break-word',
                  }}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="features-container" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '20px',
                  }}>
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="feature-tag"
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
                    marginBottom: '15px',
                  }}>
                    {service.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="achievement-item"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          marginBottom: idx < service.achievements.length - 1 ? '8px' : 0,
                          flexWrap: 'wrap',
                        }}
                      >
                        <span style={{ 
                          color: colors.gold[400],
                          flexShrink: 0,
                        }}>
                          {achievement.icon}
                        </span>
                        <span style={{ 
                          fontSize: '0.85rem', 
                          color: colors.stone[600],
                          lineHeight: '1.4',
                        }}>
                          {achievement.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section style={{ 
          padding: '60px 20px', 
          background: colors.beige[100],
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            width: '100%',
            padding: '0 10px',
            boxSizing: 'border-box',
          }}>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              style={{ textAlign: 'center', marginBottom: '40px' }}
            >
              <motion.h2 
                variants={fadeInUp} 
                className="section-title"
                style={{
                  fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
                  fontWeight: '300',
                  color: colors.stone[800],
                  marginBottom: '16px',
                  lineHeight: '1.2',
                }}
              >
                Our <span style={{ fontWeight: '500', color: colors.gold[600] }}>Process</span>
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="section-description"
                style={{
                  fontSize: 'clamp(0.95rem, 3vw, 1.1rem)',
                  color: colors.stone[600],
                  maxWidth: '600px',
                  margin: '0 auto',
                  padding: '0 10px',
                }}
              >
                A systematic approach that ensures excellence at every stage
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="process-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '25px',
                width: '100%',
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
                    padding: '25px',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  <div style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
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
                    fontSize: 'clamp(1.1rem, 4vw, 1.3rem)',
                    fontWeight: '500',
                    color: colors.stone[800],
                    marginBottom: '10px',
                    position: 'relative',
                    zIndex: 1,
                    paddingRight: '40px',
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
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
        <section className="cta-section" style={{
          padding: '60px 20px',
          background: `linear-gradient(135deg, ${colors.stone[800]} 0%, ${colors.stone[900]} 100%)`,
          textAlign: 'center',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              padding: '0 15px',
            }}
          >
            <motion.h2 variants={fadeInUp} style={{
              fontSize: 'clamp(1.8rem, 5vw, 3rem)',
              fontWeight: '300',
              color: 'white',
              marginBottom: '20px',
              lineHeight: '1.3',
            }}>
              Ready to Transform Your
              <span style={{ display: 'block', fontWeight: '500', color: colors.gold[400] }}>
                Digital Presence?
              </span>
            </motion.h2>

            <motion.p variants={fadeInUp} style={{
              fontSize: 'clamp(0.95rem, 3vw, 1.1rem)',
              color: colors.stone[300],
              marginBottom: '30px',
              lineHeight: '1.7',
              maxWidth: '600px',
              margin: '0 auto 30px',
            }}>
              Let's discuss how our services can help you achieve your business goals.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link to="/contact" style={{ textDecoration: 'none', display: 'inline-block', width: '100%' }}>
                <motion.button
                  className="cta-button"
                  style={{
                    padding: '15px 40px',
                    background: colors.gold[400],
                    color: colors.stone[800],
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: 'clamp(1rem, 4vw, 1.1rem)',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 20px 30px rgba(201, 178, 139, 0.3)',
                    width: 'auto',
                    minWidth: '250px',
                    maxWidth: '100%',
                    margin: '0 auto',
                  }}
                  whileHover={{ scale: 1.05, background: colors.gold[500] }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Journey <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Footer note */}
        <footer className="footer-note" style={{ 
          padding: '20px', 
          textAlign: 'center', 
          background: colors.stone[900],
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <p style={{ 
            color: colors.stone[400], 
            fontSize: 'clamp(0.8rem, 3vw, 0.9rem)',
            margin: 0,
          }}>
            Partner with us to create digital excellence that drives real business results.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default PremiumServicesPage;