import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Target, Eye, Heart, Users, Award, 
  MapPin, Briefcase, Calendar, Rocket, Star,
  TrendingUp, Shield, Zap, Coffee, Github, Linkedin,
  Mail, ChevronRight, Quote, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
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
        staggerChildren: 0.15
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

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

  // Journey timeline data
  const journeyData = [
    {
      year: "August 2024",
      title: "The Beginning",
      description: "Started with a small team of 3 passionate developers in Jaipur",
      icon: <Rocket size={24} />,
    },
    {
      year: "February 2025",
      title: "First Milestone",
      description: "Completed 5+ projects and expanded to 5 team members",
      icon: <Award size={24} />,
    },
    // {
    //   year: "2019",
    //   title: "Global Reach",
    //   description: "Started serving international clients from USA, UK, and Australia",
    //   icon: <Globe size={24} />,
    // },
    // {
    //   year: "2021",
    //   title: "Innovation Hub",
    //   description: "Launched our own products and innovation lab",
    //   icon: <Zap size={24} />,
    // },
    {
      year: "December 2025",
      title: " Excellence",
      description: "Recognized as top web development company with 15+ successful projects",
      icon: <Star size={24} />,
    },
  ];

  // Team members data
  const teamMembers = [
    {
      name: "Kabir Maheswari",
      role: "Founder",
      bio: "Visionary leader with 1.5+ years of experience in digital transformation",
      image: "👨‍💼",
      social: { github: "#", linkedin: "#", mail: "#" },
    },
    {
      name: "Piyush Khandelwal",
      role: "Developer",
      bio: "Award-winning designer and developer passionate about creating meaningful experiences",
      image: "👨‍💼",
      social: { github: "#", linkedin: "#", mail: "#" },
    },
    {
      name: "Anirudh Patel",
      role: "Technical Lead",
      bio: "Full-stack expert specializing in scalable web applications",
      image: "👨‍💻",
      social: { github: "#", linkedin: "#", mail: "#" },
    },
    {
      name: "Tez Pratap Singh",
      role: "Marketing Strategist",
      bio: "Digital marketing guru with proven track record in growth hacking",
      image: "👩‍💼",
      social: { github: "#", linkedin: "#", mail: "#" },
    },
    // {
    //   name: "David Kumar",
    //   role: "Lead Developer",
    //   bio: "Mobile app specialist with expertise in cross-platform development",
    //   image: "👨‍🔧",
    //   social: { github: "#", linkedin: "#", mail: "#" },
    // },
    {
      name: "Priya Singh",
      role: "UX Researcher",
      bio: "User experience expert focused on creating intuitive interfaces",
      image: "👩‍🔬",
      social: { github: "#", linkedin: "#", mail: "#" },
    },
  ];

  // Stats data
  const statsData = [
    { value: "15+", label: "Projects Completed", icon: <Briefcase size={24} /> },
    { value: "5+", label: "Team Members", icon: <Users size={24} /> },
    { value: "15+", label: "Countries Served", icon: <Globe size={24} /> },
    { value: "1.5+", label: "Years Excellence", icon: <Calendar size={24} /> },
  ];

  // Values data
  const valuesData = [
    {
      title: "Innovation First",
      description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
      icon: <Zap size={28} />,
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to exceeding expectations and delivering results.",
      icon: <Target size={28} />,
    },
    {
      title: "Integrity & Trust",
      description: "We believe in transparent communication and building lasting relationships with our clients.",
      icon: <Shield size={28} />,
    },
    {
      title: "Passion for Excellence",
      description: "Every project receives our full attention and dedication to achieve the highest quality.",
      icon: <Star size={28} />,
    },
  ];

  // World map component (custom SVG representation)
  const WorldMap = () => (
    <svg
      viewBox="0 0 1000 500"
      style={{
        width: '100%',
        height: 'auto',
        maxWidth: '800px',
        margin: '0 auto',
        display: 'block',
      }}
    >
      {/* Background */}
      <rect width="1000" height="500" fill={colors.beige[100]} rx="20" />
      
      {/* Continents - Simplified SVG paths */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* North America */}
        <motion.path
          d="M150,150 L220,120 L280,140 L270,200 L200,220 L140,190 Z"
          fill={colors.gold[400]}
          opacity="0.8"
          whileHover={{ scale: 1.02, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        {/* South America */}
        <motion.path
          d="M260,250 L300,240 L320,290 L280,310 L240,290 L250,260 Z"
          fill={colors.gold[400]}
          opacity="0.8"
          whileHover={{ scale: 1.02, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        {/* Europe */}
        <motion.path
          d="M450,150 L490,140 L520,160 L500,190 L460,180 L440,170 Z"
          fill={colors.gold[400]}
          opacity="0.8"
          whileHover={{ scale: 1.02, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        {/* Africa */}
        <motion.path
          d="M480,210 L520,200 L540,240 L500,270 L460,250 L470,220 Z"
          fill={colors.gold[400]}
          opacity="0.8"
          whileHover={{ scale: 1.02, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        {/* Asia */}
        <motion.path
          d="M550,130 L620,120 L680,150 L660,200 L600,210 L540,180 L530,150 Z"
          fill={colors.gold[400]}
          opacity="0.8"
          whileHover={{ scale: 1.02, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        {/* Australia */}
        <motion.path
          d="M720,300 L770,290 L790,330 L740,340 L710,320 Z"
          fill={colors.gold[400]}
          opacity="0.8"
          whileHover={{ scale: 1.02, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.g>

      {/* Location markers */}
      {[
        { cx: 180, cy: 160, label: "USA" },
        { cx: 280, cy: 280, label: "Brazil" },
        { cx: 470, cy: 160, label: "UK" },
        { cx: 580, cy: 150, label: "India" },
        { cx: 760, cy: 310, label: "Australia" },
      ].map((marker, index) => (
        <motion.g
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
        >
          <circle
            cx={marker.cx}
            cy={marker.cy}
            r="8"
            fill={colors.gold[600]}
            stroke="white"
            strokeWidth="2"
          />
          <motion.circle
            cx={marker.cx}
            cy={marker.cy}
            r="12"
            fill="none"
            stroke={colors.gold[400]}
            strokeWidth="2"
            animate={{
              r: [12, 18, 12],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <text
            x={marker.cx - 15}
            y={marker.cy - 15}
            fill={colors.stone[700]}
            fontSize="10"
            fontWeight="500"
          >
            {marker.label}
          </text>
        </motion.g>
      ))}

      {/* Connection lines */}
      <motion.path
        d="M180,160 Q300,200 470,160"
        stroke={colors.gold[300]}
        strokeWidth="1"
        strokeDasharray="5,5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      />
      <motion.path
        d="M470,160 Q520,200 580,150"
        stroke={colors.gold[300]}
        strokeWidth="1"
        strokeDasharray="5,5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 2 }}
      />
    </svg>
  );

  return (
    <main style={{
      backgroundColor: colors.beige[50],
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      overflow: 'hidden',
    }}>
      {/* Hero Section */}
      <section style={{
        padding: '80px 20px 60px',
        background: `linear-gradient(135deg, ${colors.beige[100]} 0%, ${colors.beige[50]} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative elements */}
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
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ textAlign: 'center' }}
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
                fontSize: '0.9rem',
                fontWeight: '500',
              }}>
                <Sparkles size={16} />
                Our Story
              </span>
            </motion.div> */}

            <motion.h1 variants={fadeInUp} style={{
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: '300',
              color: colors.stone[800],
              marginBottom: '20px',
              lineHeight: '1.2',
            }}>
              Crafting Digital
              <span style={{ display: 'block', fontWeight: '500', color: colors.gold[600] }}>
                Excellence Since 2024
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} style={{
              fontSize: '1.1rem',
              color: colors.stone[600],
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.7',
            }}>
              We're not just developers; we're partners in your success. With a passion for innovation 
              and a commitment to excellence, we've helped hundreds of businesses transform their digital presence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '40px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '30px',
            }}
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8 }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '30px 20px',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  border: `1px solid ${colors.stone[200]}`,
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: `linear-gradient(135deg, ${colors.gold[100]}, ${colors.gold[200]})`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: colors.gold[600],
                }}>
                  {stat.icon}
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '600',
                    color: colors.stone[800],
                    marginBottom: '8px',
                  }}
                >
                  {stat.value}
                </motion.div>
                <p style={{ color: colors.stone[500], fontSize: '0.95rem', margin: 0 }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section style={{ padding: '60px 20px', background: colors.beige[100] }}>
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
              Our <span style={{ fontWeight: '500', color: colors.gold[600] }}>Journey</span>
            </motion.h2>
            <motion.p variants={fadeInUp} style={{
              fontSize: '1.1rem',
              color: colors.stone[600],
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Every milestone tells a story of growth, learning, and success
            </motion.p>
          </motion.div>

          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: '100%',
              background: `linear-gradient(to bottom, ${colors.gold[300]}, ${colors.gold[400]})`,
              display: 'none',
            }} />
            
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
              }}
            >
              {journeyData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInLeft}
                  style={{
                    display: 'flex',
                    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                    alignItems: 'center',
                    gap: '30px',
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ flex: 1, minWidth: '250px' }}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      style={{
                        background: 'white',
                        borderRadius: '20px',
                        padding: '30px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                        border: `1px solid ${colors.stone[200]}`,
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        marginBottom: '15px',
                      }}>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          background: `linear-gradient(135deg, ${colors.gold[100]}, ${colors.gold[200]})`,
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: colors.gold[600],
                        }}>
                          {item.icon}
                        </div>
                        <div>
                          <span style={{
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            color: colors.gold[600],
                          }}>
                            {item.year}
                          </span>
                        </div>
                      </div>
                      <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: '500',
                        color: colors.stone[800],
                        marginBottom: '8px',
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        fontSize: '0.95rem',
                        color: colors.stone[600],
                        lineHeight: '1.6',
                        margin: 0,
                      }}>
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                  <div style={{ flex: 1, minWidth: '250px' }}>
                    {/* Empty space for alternating layout */}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>



      {/* Mission & Vision Section */}
      <section style={{ padding: '60px 20px', background: colors.beige[100] }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px',
              marginBottom: '50px',
            }}
          >
            {/* Mission */}
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -8 }}
              style={{
                background: 'white',
                borderRadius: '30px',
                padding: '40px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
                border: `1px solid ${colors.stone[200]}`,
              }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                background: `linear-gradient(135deg, ${colors.gold[100]}, ${colors.gold[200]})`,
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '25px',
                color: colors.gold[600],
              }}>
                <Target size={40} />
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '500',
                color: colors.stone[800],
                marginBottom: '15px',
              }}>
                Our Mission
              </h3>
              <p style={{
                fontSize: '1rem',
                color: colors.stone[600],
                lineHeight: '1.8',
              }}>
                To empower businesses with innovative digital solutions that drive growth, 
                enhance user experiences, and create lasting value. We're committed to 
                pushing boundaries and delivering excellence in everything we do.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -8 }}
              style={{
                background: 'white',
                borderRadius: '30px',
                padding: '40px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
                border: `1px solid ${colors.stone[200]}`,
              }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                background: `linear-gradient(135deg, ${colors.gold[100]}, ${colors.gold[200]})`,
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '25px',
                color: colors.gold[600],
              }}>
                <Eye size={40} />
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '500',
                color: colors.stone[800],
                marginBottom: '15px',
              }}>
                Our Vision
              </h3>
              <p style={{
                fontSize: '1rem',
                color: colors.stone[600],
                lineHeight: '1.8',
              }}>
                To be the most trusted digital partner globally, recognized for innovation, 
                quality, and impact. We envision a world where technology seamlessly connects 
                businesses with their audiences, creating meaningful experiences.
              </p>
            </motion.div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3 variants={fadeInUp} style={{
              fontSize: '2rem',
              fontWeight: '300',
              color: colors.stone[800],
              textAlign: 'center',
              marginBottom: '40px',
            }}>
              Our Core <span style={{ fontWeight: '500', color: colors.gold[600] }}>Values</span>
            </motion.h3>

            <motion.div
              variants={staggerContainer}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '30px',
              }}
            >
              {valuesData.map((value, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                  style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '30px',
                    textAlign: 'center',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                    border: `1px solid ${colors.stone[200]}`,
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: `linear-gradient(135deg, ${colors.gold[100]}, ${colors.gold[200]})`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: colors.gold[600],
                  }}>
                    {value.icon}
                  </div>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '500',
                    color: colors.stone[800],
                    marginBottom: '12px',
                  }}>
                    {value.title}
                  </h4>
                  <p style={{
                    fontSize: '0.95rem',
                    color: colors.stone[600],
                    lineHeight: '1.6',
                    margin: 0,
                  }}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '60px 20px' }}>
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
              Meet Our <span style={{ fontWeight: '500', color: colors.gold[600] }}>Team</span>
            </motion.h2>
            <motion.p variants={fadeInUp} style={{
              fontSize: '1.1rem',
              color: colors.stone[600],
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Passionate experts dedicated to bringing your vision to life
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px',
            }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                style={{
                  background: 'white',
                  borderRadius: '30px',
                  padding: '30px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
                  border: `1px solid ${colors.stone[200]}`,
                  textAlign: 'center',
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  style={{
                    width: '120px',
                    height: '120px',
                    background: `linear-gradient(135deg, ${colors.gold[200]}, ${colors.gold[400]})`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '3rem',
                  }}
                >
                  {member.image}
                </motion.div>
                
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: colors.stone[800],
                  marginBottom: '5px',
                }}>
                  {member.name}
                </h3>
                
                <p style={{
                  fontSize: '0.95rem',
                  color: colors.gold[600],
                  fontWeight: '500',
                  marginBottom: '15px',
                }}>
                  {member.role}
                </p>
                
                <p style={{
                  fontSize: '0.9rem',
                  color: colors.stone[600],
                  lineHeight: '1.6',
                  marginBottom: '20px',
                }}>
                  {member.bio}
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                  <motion.a
                    href={member.social.github}
                    whileHover={{ y: -3, color: colors.gold[600] }}
                    style={{ color: colors.stone[400] }}
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a
                    href={member.social.linkedin}
                    whileHover={{ y: -3, color: colors.gold[600] }}
                    style={{ color: colors.stone[400] }}
                  >
                    <Linkedin size={18} />
                  </motion.a>
                  <motion.a
                    href={member.social.mail}
                    whileHover={{ y: -3, color: colors.gold[600] }}
                    style={{ color: colors.stone[400] }}
                  >
                    <Mail size={18} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* World Map Section */}
      <section style={{ padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <motion.h2 variants={fadeInUp} style={{
              fontSize: 'clamp(2rem, 6vw, 2.8rem)',
              fontWeight: '300',
              color: colors.stone[800],
              marginBottom: '16px',
            }}>
              Global <span style={{ fontWeight: '500', color: colors.gold[600] }}>Reach</span>
            </motion.h2>
            <motion.p variants={fadeInUp} style={{
              fontSize: '1.1rem',
              color: colors.stone[600],
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Proudly serving clients across 15+ countries worldwide
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'white',
              borderRadius: '30px',
              padding: '30px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
              border: `1px solid ${colors.stone[200]}`,
            }}
          >
             <img 
    src="/world.svg" 
    alt="GrowwZa Studios Logo" 
    style={{
      height: '390px',
      width: '980px',
      objectFit: 'contain',
    }}
  />
            {/* <WorldMap /> */}
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '30px',
              marginTop: '30px',
            }}>
              {['North America', 'South America', 'Europe', 'Asia', 'Australia'].map((region, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <MapPin size={16} color={colors.gold[400]} />
                  <span style={{ color: colors.stone[600], fontSize: '0.95rem' }}>{region}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
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
            Ready to Start Your
            <span style={{ display: 'block', fontWeight: '500', color: colors.gold[400] }}>
              Journey With Us?
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} style={{
            fontSize: '1.1rem',
            color: colors.stone[300],
            marginBottom: '40px',
            lineHeight: '1.7',
          }}>
            Let's create something amazing together. We're just a message away.
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
              Get In Touch <ChevronRight size={20} />
            </motion.button>    </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutUsPage;