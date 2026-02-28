import React, { useState, useEffect,useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, MessageCircle, Clock, 
  ChevronRight, CheckCircle, AlertCircle, Globe, Users,
  Twitter, Facebook, Instagram, Linkedin, Youtube,
  Headphones, Calendar, Award, Heart, Sparkles, Star
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const PremiumContactPage = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [activeField, setActiveField] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Animation variants (adjusted for mobile)
  const fadeInUp = {
    initial: { opacity: 0, y: isMobile ? 20 : 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: isMobile ? -20 : -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: isMobile ? 20 : 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  // Contact methods
  const contactMethods = [
    {
      icon: <Phone size={isMobile ? 20 : 24} />,
      title: "Phone",
      details: ["+91 9358254199"],
      action: "Call us now",
      link: "tel:+919358254199",
      color: colors.gold[400],
    },
    {
      icon: <Mail size={isMobile ? 20 : 24} />,
      title: "Email",
      details: ["growwzastudios@gmail.com", "growwzastudios@zohomail.in"],
      action: "Send message",
      link: "mailto:growwzastudios@gmail.com",
      color: colors.gold[500],
    },
    {
      icon: <MapPin size={isMobile ? 20 : 24} />,
      title: "Visit Us",
      details: ["Sunder Nagar - A", "Jaipur, Rajasthan 302019"],
      action: "Get directions",
      link: "#",
      color: colors.gold[600],
    },
    {
      icon: <Clock size={isMobile ? 20 : 24} />,
      title: "Working Hours",
      details: ["Mon-Fri: 9:00 AM - 7:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      action: "24/7 Support",
      link: "#",
      color: colors.gold[700],
    }
  ];

  // Services dropdown options
  const services = [
    "Web Design & Development",
    "Ecommerce Development",
    "Web Application Development",
    "Mobile App Development",
    "Graphics Designing",
    "Social Media Management",
    "SEO & Digital Marketing",
    "Branding & Logos",
    "Other"
  ];

  // Team members for quick contact
  const teamContacts = [
    { name: "Kabir M", role: "Client Relations", image: "👩‍💼", phone: "+91 9358254199", email: "kabirmaheshwari@gmail.com" },
  ];

  // FAQ data
  const faqs = [
    {
      question: "What is your typical response time?",
      answer: "We aim to respond to all inquiries within 2-4 hours during business hours. For urgent matters, we recommend giving us a call."
    },
    {
      question: "Do you offer international consultations?",
      answer: "Yes! We work with clients globally via video calls, phone, and email. Time zones are never a barrier."
    },
    {
      question: "How do you handle project pricing?",
      answer: "We provide customized quotes based on project requirements. Contact us for a free consultation and estimate."
    }
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Change these to your actual IDs from EmailJS dashboard
    const SERVICE_ID = 'service_e8yl7hx'; 
    const TEMPLATE_ID = 'template_zgyh6gu';
    const PUBLIC_KEY = 'PgAFmy-aMr58umIE5';

    // Set loading state (optional, but good for UX)
    setFormStatus({ submitted: true, success: false, message: "Sending..." });

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        setFormStatus({ 
          submitted: true, 
          success: true, 
          message: "Message sent successfully! We'll get back to you soon." 
        });
        
        // Reset form
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      }, (error) => {
        console.log(error.text);
        setFormStatus({ 
          submitted: true, 
          success: false, 
          message: "Failed to send message. Please try again later." 
        });
      });

    // Clear status message after 5 seconds
    setTimeout(() => {
      setFormStatus(prev => ({ ...prev, submitted: false }));
    }, 5000);
  };

  // Mobile-specific styles
  const mobileStyles = {
    section: {
      padding: isMobile ? '60px 16px' : '60px 20px',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    heroSection: {
      padding: isMobile ? '80px 16px 60px' : '120px 20px 80px',
    },
    formContainer: {
      padding: isMobile ? '30px 20px' : '50px',
      borderRadius: isMobile ? '24px' : '40px',
    },
    heading1: {
      fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 8vw, 4rem)',
    },
    heading2: {
      fontSize: isMobile ? '1.75rem' : '2rem',
    },
    statsContainer: {
      gap: isMobile ? '16px' : '40px',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'stretch' : 'center',
      padding: isMobile ? '0 10px' : '0',
    },
    statItem: {
      width: isMobile ? '100%' : 'auto',
    }
  };

  return (
    <main style={{
      backgroundColor: colors.beige[50],
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      overflow: 'hidden',
      minHeight: '100vh',
    }}>
      {/* Add Inter font */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Hero Section */}
      <section style={{
        ...mobileStyles.heroSection,
        background: `linear-gradient(135deg, ${colors.beige[100]} 0%, ${colors.beige[50]} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative elements - hidden on mobile for performance */}
        {!isMobile && (
          <>
            <motion.div
              style={{
                position: 'absolute',
                top: '10%',
                left: '5%',
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
            <motion.div
              style={{
                position: 'absolute',
                bottom: '10%',
                right: '5%',
                width: '400px',
                height: '400px',
                background: `radial-gradient(circle, ${colors.gold[300]}40, transparent 70%)`,
                borderRadius: '50%',
                filter: 'blur(80px)',
                zIndex: 0,
              }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.2, 0.4],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}

        <div style={{ ...mobileStyles.container, position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
            variants={staggerContainer}
            style={{ textAlign: 'center' }}
          >
            <motion.div variants={fadeInUp} style={{ marginBottom: '20px' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: colors.gold[100],
                color: colors.gold[700],
                padding: isMobile ? '6px 16px' : '8px 20px',
                borderRadius: '40px',
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                fontWeight: '500',
              }}>
                <MessageCircle size={isMobile ? 14 : 16} />
                Let's Connect
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} style={{
              fontSize: mobileStyles.heading1.fontSize,
              fontWeight: '300',
              color: colors.stone[800],
              marginBottom: isMobile ? '12px' : '20px',
              lineHeight: '1.2',
              padding: isMobile ? '0 10px' : '0',
            }}>
              Get in <span style={{ fontWeight: '500', color: colors.gold[600] }}>Touch</span>
            </motion.h1>

            <motion.p variants={fadeInUp} style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              color: colors.stone[600],
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: isMobile ? '1.5' : '1.7',
              padding: isMobile ? '0 16px' : '0',
            }}>
              Have a project in mind? We'd love to hear about it. 
              Reach out and let's create something extraordinary together.
            </motion.p>

            {/* Floating stats */}
            <motion.div
              variants={fadeInUp}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: mobileStyles.statsContainer.gap,
                marginTop: isMobile ? '30px' : '50px',
                flexWrap: 'wrap',
                flexDirection: mobileStyles.statsContainer.flexDirection,
                alignItems: mobileStyles.statsContainer.alignItems,
                padding: mobileStyles.statsContainer.padding,
              }}
            >
              {[
                { icon: <Award size={isMobile ? 18 : 20} />, label: "1.5+", value: "Years Experience" },
                { icon: <Users size={isMobile ? 18 : 20} />, label: "20+", value: "Happy Clients" },
                { icon: <Headphones size={isMobile ? 18 : 20} />, label: "24/7", value: "Support" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={isMobile ? {} : { y: -5 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: isMobile ? '10px' : '12px',
                    background: 'white',
                    padding: isMobile ? '10px 16px' : '12px 24px',
                    borderRadius: '50px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                    border: `1px solid ${colors.stone[200]}`,
                    width: mobileStyles.statItem.width,
                  }}
                >
                  <span style={{ color: colors.gold[400] }}>{item.icon}</span>
                  <div>
                    <span style={{ fontWeight: '600', color: colors.stone[800] }}>{item.label}</span>
                    <span style={{ color: colors.stone[500], marginLeft: '5px', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                      {item.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section style={mobileStyles.section}>
        <div style={mobileStyles.container}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: isMobile ? '30px' : '40px',
            background: 'white',
            borderRadius: mobileStyles.formContainer.borderRadius,
            padding: mobileStyles.formContainer.padding,
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.05)',
            border: `1px solid ${colors.stone[200]}`,
          }}>
            {/* Left Column - Contact Info */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInLeft} style={{
                fontSize: mobileStyles.heading2.fontSize,
                fontWeight: '300',
                color: colors.stone[800],
                marginBottom: isMobile ? '16px' : '20px',
              }}>
                Let's Start a
                <span style={{ display: 'block', fontWeight: '500', color: colors.gold[600] }}>
                  Conversation
                </span>
              </motion.h2>

              <motion.p variants={fadeInLeft} style={{
                fontSize: isMobile ? '0.95rem' : '1rem',
                color: colors.stone[600],
                lineHeight: '1.7',
                marginBottom: isMobile ? '24px' : '30px',
              }}>
                Whether you have a question about our services, need a quote, or just want to say hello, 
                we're here to help. Fill out the form and we'll get back to you within 24 hours.
              </motion.p>

              {/* Quick team contacts */}
              <motion.div variants={fadeInLeft} style={{ marginBottom: isMobile ? '24px' : '30px' }}>
                <h4 style={{
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  fontWeight: '500',
                  color: colors.stone[800],
                  marginBottom: isMobile ? '16px' : '20px',
                }}>
                  Direct Contact
                </h4>
                {teamContacts.map((contact, index) => (
                  <motion.div
                    key={index}
                    whileHover={isMobile ? {} : { x: 5 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: isMobile ? '12px' : '15px',
                      padding: isMobile ? '10px' : '12px',
                      background: colors.beige[50],
                      borderRadius: '16px',
                      marginBottom: '10px',
                    }}
                  >
                    <div style={{
                      width: isMobile ? '40px' : '45px',
                      height: isMobile ? '40px' : '45px',
                      background: `linear-gradient(135deg, ${colors.gold[200]}, ${colors.gold[300]})`,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: isMobile ? '1.3rem' : '1.5rem',
                    }}>
                      {contact.image}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h5 style={{ fontSize: isMobile ? '0.95rem' : '1rem', fontWeight: '500', color: colors.stone[800] }}>
                        {contact.name}
                      </h5>
                      <p style={{ fontSize: isMobile ? '0.8rem' : '0.85rem', color: colors.stone[500] }}>{contact.role}</p>
                    </div>
                    <div style={{ display: 'flex', gap: isMobile ? '8px' : '10px' }}>
                      <a href={`tel:${contact.phone}`} style={{ color: colors.gold[400] }}>
                        <Phone size={isMobile ? 14 : 16} />
                      </a>
                      <a href={`mailto:${contact.email}`} style={{ color: colors.gold[400] }}>
                        <Mail size={isMobile ? 14 : 16} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div variants={fadeInLeft}>
                <h4 style={{
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  fontWeight: '500',
                  color: colors.stone[800],
                  marginBottom: isMobile ? '12px' : '15px',
                }}>
                  Connect With Us
                </h4>
                <div style={{ 
                  display: 'flex', 
                  gap: isMobile ? '12px' : '15px',
                  flexWrap: 'wrap',
                }}>
                  {[
                    { icon: <Twitter size={isMobile ? 16 : 20} />, href: '#', color: '#1DA1F2' },
                    { icon: <Facebook size={isMobile ? 16 : 20} />, href: '#', color: '#1877F2' },
                    { icon: <Instagram size={isMobile ? 16 : 20} />, href: '#', color: '#E4405F' },
                    { icon: <Linkedin size={isMobile ? 16 : 20} />, href: '#', color: '#0A66C2' },
                    { icon: <Youtube size={isMobile ? 16 : 20} />, href: '#', color: '#FF0000' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={isMobile ? {} : { y: -5, backgroundColor: social.color, color: 'white' }}
                      style={{
                        width: isMobile ? '40px' : '45px',
                        height: isMobile ? '40px' : '45px',
                        borderRadius: '12px',
                        background: colors.stone[100],
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: colors.stone[600],
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              <motion.form
              ref={form}
                variants={fadeInRight}
                onSubmit={handleSubmit}
                style={{ width: '100%' }}
              >
                <div style={{ marginBottom: isMobile ? '20px' : '25px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    fontWeight: '500',
                    color: colors.stone[700],
                    marginBottom: '6px',
                  }}>
                    Full Name <span style={{ color: colors.gold[500] }}>*</span>
                  </label>
                  <motion.div
                    animate={activeField === 'name' ? { scale: 1.01 } : { scale: 1 }}
                    style={{
                      border: `2px solid ${activeField === 'name' ? colors.gold[400] : colors.stone[200]}`,
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      required
                      style={{
                        width: '100%',
                        padding: isMobile ? '12px' : '15px',
                        border: 'none',
                        background: 'transparent',
                        fontSize: isMobile ? '0.95rem' : '1rem',
                        color: colors.stone[800],
                        outline: 'none',
                      }}
                      placeholder="John Doe"
                    />
                  </motion.div>
                </div>

                <div style={{ marginBottom: isMobile ? '20px' : '25px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    fontWeight: '500',
                    color: colors.stone[700],
                    marginBottom: '6px',
                  }}>
                    Email Address <span style={{ color: colors.gold[500] }}>*</span>
                  </label>
                  <motion.div
                    animate={activeField === 'email' ? { scale: 1.01 } : { scale: 1 }}
                    style={{
                      border: `2px solid ${activeField === 'email' ? colors.gold[400] : colors.stone[200]}`,
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      required
                      style={{
                        width: '100%',
                        padding: isMobile ? '12px' : '15px',
                        border: 'none',
                        background: 'transparent',
                        fontSize: isMobile ? '0.95rem' : '1rem',
                        color: colors.stone[800],
                        outline: 'none',
                      }}
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                <div style={{ marginBottom: isMobile ? '20px' : '25px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    fontWeight: '500',
                    color: colors.stone[700],
                    marginBottom: '6px',
                  }}>
                    Phone Number
                  </label>
                  <motion.div
                    animate={activeField === 'phone' ? { scale: 1.01 } : { scale: 1 }}
                    style={{
                      border: `2px solid ${activeField === 'phone' ? colors.gold[400] : colors.stone[200]}`,
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('phone')}
                      onBlur={() => setActiveField(null)}
                      style={{
                        width: '100%',
                        padding: isMobile ? '12px' : '15px',
                        border: 'none',
                        background: 'transparent',
                        fontSize: isMobile ? '0.95rem' : '1rem',
                        color: colors.stone[800],
                        outline: 'none',
                      }}
                      placeholder="+91 98765 43210"
                    />
                  </motion.div>
                </div>

                <div style={{ marginBottom: isMobile ? '20px' : '25px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    fontWeight: '500',
                    color: colors.stone[700],
                    marginBottom: '6px',
                  }}>
                    Service Interested In
                  </label>
                  <motion.div
                    animate={activeField === 'service' ? { scale: 1.01 } : { scale: 1 }}
                    style={{
                      border: `2px solid ${activeField === 'service' ? colors.gold[400] : colors.stone[200]}`,
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('service')}
                      onBlur={() => setActiveField(null)}
                      style={{
                        width: '100%',
                        padding: isMobile ? '12px' : '15px',
                        border: 'none',
                        background: 'transparent',
                        fontSize: isMobile ? '0.95rem' : '1rem',
                        color: colors.stone[800],
                        outline: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </motion.div>
                </div>

                <div style={{ marginBottom: isMobile ? '24px' : '30px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    fontWeight: '500',
                    color: colors.stone[700],
                    marginBottom: '6px',
                  }}>
                    Your Message <span style={{ color: colors.gold[500] }}>*</span>
                  </label>
                  <motion.div
                    animate={activeField === 'message' ? { scale: 1.01 } : { scale: 1 }}
                    style={{
                      border: `2px solid ${activeField === 'message' ? colors.gold[400] : colors.stone[200]}`,
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('message')}
                      onBlur={() => setActiveField(null)}
                      required
                      rows={isMobile ? 4 : 5}
                      style={{
                        width: '100%',
                        padding: isMobile ? '12px' : '15px',
                        border: 'none',
                        background: 'transparent',
                        fontSize: isMobile ? '0.95rem' : '1rem',
                        color: colors.stone[800],
                        outline: 'none',
                        resize: 'vertical',
                      }}
                      placeholder="Tell us about your project..."
                    />
                  </motion.div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={isMobile ? {} : { scale: 1.02 }}
                  whileTap={isMobile ? { scale: 0.98 } : { scale: 0.98 }}
                  style={{
                    width: '100%',
                    padding: isMobile ? '16px' : '18px',
                    background: `linear-gradient(135deg, ${colors.gold[400]}, ${colors.gold[600]})`,
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: isMobile ? '1rem' : '1.1rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 20px 30px rgba(201, 178, 139, 0.3)',
                  }}
                >
                  <Send size={isMobile ? 18 : 20} />
                  Send Message
                </motion.button>

                {/* Form status message */}
                <AnimatePresence>
                  {formStatus.submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      style={{
                        marginTop: '20px',
                        padding: isMobile ? '12px' : '15px',
                        background: formStatus.success ? '#10b98120' : '#ef444420',
                        border: `1px solid ${formStatus.success ? '#10b981' : '#ef4444'}`,
                        borderRadius: '12px',
                        color: formStatus.success ? '#10b981' : '#ef4444',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: isMobile ? '0.9rem' : '1rem',
                      }}
                    >
                      {formStatus.success ? <CheckCircle size={isMobile ? 18 : 20} /> : <AlertCircle size={isMobile ? 18 : 20} />}
                      {formStatus.message}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Methods Grid */}
      <section style={mobileStyles.section}>
        <div style={mobileStyles.container}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: isMobile ? '20px' : '30px',
            }}
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                variants={scaleIn}
                whileHover={isMobile ? {} : { y: -10, scale: 1.02 }}
                style={{
                  background: 'white',
                  borderRadius: isMobile ? '20px' : '24px',
                  padding: isMobile ? '24px' : '30px',
                  textDecoration: 'none',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
                  border: `1px solid ${colors.stone[200]}`,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative gradient */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: `linear-gradient(90deg, ${method.color}, ${colors.gold[300]})`,
                }} />

                <div style={{
                  width: isMobile ? '50px' : '60px',
                  height: isMobile ? '50px' : '60px',
                  background: `${method.color}20`,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: isMobile ? '16px' : '20px',
                  color: method.color,
                }}>
                  {method.icon}
                </div>

                <h3 style={{
                  fontSize: isMobile ? '1.2rem' : '1.3rem',
                  fontWeight: '500',
                  color: colors.stone[800],
                  marginBottom: isMobile ? '12px' : '15px',
                }}>
                  {method.title}
                </h3>

                {method.details.map((detail, idx) => (
                  <p key={idx} style={{
                    fontSize: isMobile ? '0.9rem' : '0.95rem',
                    color: colors.stone[600],
                    marginBottom: idx < method.details.length - 1 ? '5px' : '15px',
                  }}>
                    {detail}
                  </p>
                ))}

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: method.color,
                  fontSize: isMobile ? '0.9rem' : '0.95rem',
                  fontWeight: '500',
                }}>
                  {method.action} <ChevronRight size={isMobile ? 14 : 16} />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ 
        ...mobileStyles.section, 
        background: colors.beige[100] 
      }}>
        <div style={mobileStyles.container}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '50px' }}
          >
            <motion.h2 variants={fadeInUp} style={{
              fontSize: isMobile ? 'clamp(1.75rem, 5vw, 2rem)' : 'clamp(2rem, 6vw, 2.5rem)',
              fontWeight: '300',
              color: colors.stone[800],
              marginBottom: '16px',
              padding: isMobile ? '0 10px' : '0',
            }}>
              Frequently Asked <span style={{ fontWeight: '500', color: colors.gold[600] }}>Questions</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: isMobile ? '20px' : '30px',
            }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={isMobile ? {} : { y: -5 }}
                style={{
                  background: 'white',
                  borderRadius: isMobile ? '16px' : '20px',
                  padding: isMobile ? '24px' : '30px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                }}
              >
                <h3 style={{
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  fontWeight: '500',
                  color: colors.stone[800],
                  marginBottom: isMobile ? '12px' : '15px',
                }}>
                  {faq.question}
                </h3>
                <p style={{
                  fontSize: isMobile ? '0.9rem' : '0.95rem',
                  color: colors.stone[600],
                  lineHeight: '1.7',
                  margin: 0,
                }}>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section style={mobileStyles.section}>
        <div style={mobileStyles.container}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            style={{
              background: 'white',
              borderRadius: isMobile ? '20px' : '30px',
              padding: isMobile ? '20px' : '30px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
              border: `1px solid ${colors.stone[200]}`,
            }}
          >
            <div style={{
              height: isMobile ? '300px' : '400px',
              background: colors.beige[100],
              borderRadius: isMobile ? '16px' : '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Placeholder for actual map */}
              {/* <div style={{ textAlign: 'center', padding: isMobile ? '0 20px' : '0' }}>
                <MapPin size={isMobile ? 40 : 48} color={colors.gold[400]} />
                <p style={{ color: colors.stone[600], marginTop: '10px', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                  Sunder Nagar - A, Jaipur, Rajasthan 302019
                </p>
                <motion.button
                  whileHover={isMobile ? {} : { scale: 1.05 }}
                  style={{
                    marginTop: '20px',
                    padding: isMobile ? '10px 24px' : '12px 30px',
                    background: colors.gold[400],
                    color: 'white',
                    border: 'none',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    fontSize: isMobile ? '0.9rem' : '1rem',
                  }}
                >
                  Get Directions
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div> */}
      {/* </section> */} 

      {/* CTA Section */}
      <section style={{
        padding: isMobile ? '60px 16px' : '80px 20px',
        background: `linear-gradient(135deg, ${colors.stone[800]} 0%, ${colors.stone[900]} 100%)`,
        textAlign: 'center',
      }}>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <motion.h2 variants={fadeInUp} style={{
            fontSize: isMobile ? 'clamp(1.75rem, 5vw, 2rem)' : 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '300',
            color: 'white',
            marginBottom: isMobile ? '16px' : '20px',
            padding: isMobile ? '0 10px' : '0',
          }}>
            Ready to Start Your
            <span style={{ display: 'block', fontWeight: '500', color: colors.gold[400] }}>
              Next Project?
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} style={{
            fontSize: isMobile ? '1rem' : '1.1rem',
            color: colors.stone[300],
            marginBottom: isMobile ? '30px' : '40px',
            lineHeight: '1.7',
            padding: isMobile ? '0 16px' : '0',
          }}>
            Join hundreds of satisfied clients who've transformed their digital presence with us.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <motion.a
              href="mailto:growwzastudios@gmail.com"
              style={{
                padding: isMobile ? '16px 40px' : '18px 50px',
                background: colors.gold[400],
                color: colors.stone[800],
                border: 'none',
                borderRadius: '50px',
                fontSize: isMobile ? '1rem' : '1.1rem',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                boxShadow: '0 20px 30px rgba(201, 178, 139, 0.3)',
              }}
              whileHover={isMobile ? {} : { scale: 1.05, background: colors.gold[500] }}
              whileTap={isMobile ? { scale: 0.95 } : { scale: 0.95 }}
            >
              <Mail size={isMobile ? 18 : 20} />
             growwzastudios@gmail.com
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer note */}
      <footer style={{ 
        padding: isMobile ? '16px' : '20px', 
        textAlign: 'center', 
        background: colors.stone[900] 
      }}>
        <p style={{ 
          color: colors.stone[400], 
          fontSize: isMobile ? '0.8rem' : '0.9rem',
          padding: isMobile ? '0 10px' : '0',
        }}>
          We typically respond within 2-4 hours during business hours. For urgent matters, please call us.
        </p>
      </footer>
    </main>
  );
};

export default PremiumContactPage;