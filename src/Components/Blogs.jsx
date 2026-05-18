import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, User, Clock, ArrowRight, Search, 
  Filter, Tag, Heart, MessageCircle, Share2,
  ChevronRight, Star, BookOpen, Eye, Sparkles
} from 'lucide-react';
import BlogPostModal from './BlogPostModal';

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  // Blog data
  const blogs = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the web development landscape, from AI-powered development to WebAssembly and beyond.",
      category: "Web Development",
      author: "Tez Pratap Singh",
      authorRole: "Lead Developer",
      authorImage: "👩‍💻",
      date: "March 15, 2025",
      readTime: "8 min read",
      views: "2.5k",
      likes: 342,
      comments: 28,
      image: "🚀",
      gradient: "linear-gradient(135deg, #c9b28b, #b9a282)",
      featured: true,
      tags: ["Web Dev", "Trends", "Technology"],
      content: {
        introduction: "The web development landscape is evolving at an unprecedented pace. As we move through 2024, several key trends are emerging that promise to reshape how we build and interact with websites and web applications.",
        sections: [
          {
            title: "1. AI-Powered Development",
            content: "Artificial Intelligence is revolutionizing web development. From code generation to automated testing, AI tools are becoming indispensable. GitHub Copilot and similar tools are now standard in many developers' workflows, increasing productivity by up to 55%."
          },
          {
            title: "2. WebAssembly Goes Mainstream",
            content: "WebAssembly (Wasm) is enabling near-native performance in browsers. Major companies are already using it for compute-intensive tasks. Expect to see more applications leveraging Wasm for video editing, gaming, and complex calculations directly in the browser."
          },
          {
            title: "3. The Rise of Edge Computing",
            content: "Edge computing is transforming how we deploy applications. With platforms like Cloudflare Workers and Vercel Edge Functions, developers can run code closer to users, resulting in faster load times and better user experiences."
          },
          {
            title: "4. Serverless Architecture Evolution",
            content: "Serverless continues to evolve beyond simple functions. New patterns like serverless containers and persistent serverless databases are making it easier to build complex applications without managing infrastructure."
          }
        ],
        conclusion: "The future of web development is bright and full of opportunities. Staying ahead of these trends will be crucial for developers and businesses looking to create cutting-edge web experiences."
      }
    },
    {
      id: 2,
      title: "Mastering Mobile App Development: Best Practices for 2024",
      excerpt: "Learn the essential best practices for creating high-performance, user-friendly mobile applications that stand out in app stores.",
      category: "Mobile Development",
      author: "Kabir M",
      authorRole: "Founder and Mobile Architect",
      authorImage: "👨‍💻",
      date: "March 10, 2025",
      readTime: "10 min read",
      views: "3.1k",
      likes: 567,
      comments: 42,
      image: "📱",
      gradient: "linear-gradient(135deg, #b9a282, #a18d71)",
      featured: true,
      tags: ["Mobile", "iOS", "Android", "Best Practices"],
      content: {
        introduction: "With over 6 billion smartphone users worldwide, mobile apps have become essential for businesses. Creating a successful app requires more than just great code—it demands a holistic approach to design, performance, and user experience.",
        sections: [
          {
            title: "1. Performance Optimization",
            content: "Users expect apps to launch instantly and respond smoothly. Implement lazy loading, optimize images, and use native components where possible. Our apps consistently achieve 4.8+ star ratings by focusing on performance first."
          },
          {
            title: "2. Offline-First Architecture",
            content: "Design your app to work seamlessly offline. Implement local storage, sync strategies, and conflict resolution. This approach has helped our clients achieve 40% higher user engagement."
          },
          {
            title: "3. Biometric Authentication",
            content: "Security doesn't have to be complicated. Implement fingerprint and face recognition for quick, secure access. This feature alone increased user retention by 25% for our fintech clients."
          },
          {
            title: "4. Push Notification Strategy",
            content: "Notifications can make or break user experience. Learn to send timely, relevant notifications that users actually want. Our smart notification system increased engagement by 200% while reducing opt-outs by 60%."
          }
        ],
        conclusion: "Building a successful mobile app requires attention to detail and a user-first mindset. By following these best practices, you can create apps that users love and keep coming back to."
      }
    },
    {
      id: 3,
      title: "The Art of Branding: Creating Identities That Last",
      excerpt: "Discover how to build brand identities that resonate with audiences and stand the test of time, with insights from our award-winning design team.",
      category: "Branding",
      author: "Piyush Khandelwal",
      authorRole: "Creative Director",
      authorImage: "👩‍🎨",
      date: "March 5, 2025",
      readTime: "7 min read",
      views: "1.8k",
      likes: 289,
      comments: 19,
      image: "✨",
      gradient: "linear-gradient(135deg, #dcc5a8, #c9b28b)",
      featured: false,
      tags: ["Branding", "Design", "Identity"],
      content: {
        introduction: "A strong brand identity is more than just a logo—it's the entire personality of your business. We've helped over 20 companies establish identities that have become household names. Here's what we've learned.",
        sections: [
          {
            title: "1. Start with Strategy",
            content: "Before designing anything, understand your audience, competitors, and unique value proposition. This foundation ensures your brand resonates with the right people. Our strategic approach has resulted in 90% brand recognition in target markets."
          },
          {
            title: "2. Create a Visual System",
            content: "Develop a comprehensive visual language including colors, typography, imagery, and graphic elements. This system should be flexible enough to work across all touchpoints while maintaining consistency."
          },
          {
            title: "3. Tell Your Story",
            content: "People connect with stories, not products. Craft a compelling brand narrative that communicates your mission, values, and personality. This emotional connection drives loyalty and advocacy."
          },
          {
            title: "4. Ensure Consistency",
            content: "Your brand should look and feel the same whether on your website, social media, or print materials. We create detailed brand guidelines that ensure consistency across every interaction."
          }
        ],
        conclusion: "Great branding is an investment that pays dividends for years. By building a strong foundation and maintaining consistency, you can create a brand that truly lasts."
      }
    },
    {
      id: 4,
      title: "SEO Strategies That Actually Work in 2024",
      excerpt: "Cut through the noise with proven SEO strategies that drive real results. Learn what works now and what to avoid.",
      category: "SEO",
      author: "Priya Singh",
      authorRole: "UI/UX Designer",
      authorImage: "👨‍🔧",
      date: "February 28, 2025",
      readTime: "6 min read",
      views: "2.2k",
      likes: 412,
      comments: 31,
      image: "🔍",
      gradient: "linear-gradient(135deg, #a18d71, #8b7557)",
      featured: false,
      tags: ["SEO", "Marketing", "Traffic"],
      content: {
        introduction: "SEO is constantly evolving. What worked last year might hurt you today. We've helped clients achieve #1 rankings for over 500 competitive keywords. Here are the strategies that are actually working in 2024.",
        sections: [
          {
            title: "1. Core Web Vitals Matter More Than Ever",
            content: "Google's page experience signals are now major ranking factors. Focus on improving Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). Our optimized sites load 2x faster and rank 3x higher."
          },
          {
            title: "2. Topic Clusters Over Keywords",
            content: "Stop targeting individual keywords. Create comprehensive topic clusters that establish authority. This strategy helped one client increase organic traffic by 300% in 6 months."
          },
          {
            title: "3. E-E-A-T is Non-Negotiable",
            content: "Experience, Expertise, Authoritativeness, and Trustworthiness are crucial. Showcase author credentials, cite sources, and build genuine backlinks. Google's algorithms are getting better at identifying true expertise."
          },
          {
            title: "4. Voice Search Optimization",
            content: "With voice search on the rise, optimize for conversational queries. Focus on long-tail keywords and question-based content. Voice search now accounts for 30% of all searches."
          }
        ],
        conclusion: "SEO success requires a holistic approach that combines technical excellence with great content. Focus on providing value to users, and search engines will reward you."
      }
    }
  ];

  // Categories for filter
  const categories = ['all', ...new Set(blogs.map(blog => blog.category))];

  // Filter blogs based on search and category
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
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

  return (
    <>
      <main style={{
        backgroundColor: colors.beige[50],
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        minHeight: '100vh',
        paddingBottom: '60px',
      }}>
        {/* Hero Section */}
        <section style={{
          padding: '100px 20px 60px',
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
              <motion.div variants={fadeInUp} style={{ marginBottom: '20px' }}>
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
                  <BookOpen size={16} />
                  Our Blog
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} style={{
                fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                fontWeight: '300',
                color: colors.stone[800],
                marginBottom: '20px',
                lineHeight: '1.2',
              }}>
                Insights & <span style={{ fontWeight: '500', color: colors.gold[600] }}>Inspirations</span>
              </motion.h1>

              <motion.p variants={fadeInUp} style={{
                fontSize: '1.2rem',
                color: colors.stone[600],
                maxWidth: '700px',
                margin: '0 auto 40px',
                lineHeight: '1.7',
              }}>
                Dive into our latest thoughts on web development, design, branding, and digital marketing.
              </motion.p>

              {/* Search Bar */}
              <motion.div
                variants={fadeInUp}
                style={{
                  maxWidth: '500px',
                  margin: '0 auto',
                  position: 'relative',
                }}
              >
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '18px 50px 18px 25px',
                    borderRadius: '50px',
                    border: `1px solid ${colors.stone[200]}`,
                    background: 'white',
                    fontSize: '1rem',
                    color: colors.stone[800],
                    outline: 'none',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  }}
                />
                <Search style={{
                  position: 'absolute',
                  right: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: colors.gold[400],
                }} />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section style={{ padding: '40px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '15px',
              }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '10px 25px',
                    borderRadius: '30px',
                    border: 'none',
                    background: selectedCategory === category ? colors.gold[400] : 'white',
                    color: selectedCategory === category ? 'white' : colors.stone[600],
                    fontSize: '0.95rem',
                    fontWeight: selectedCategory === category ? '500' : '400',
                    cursor: 'pointer',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section style={{ padding: '20px 20px 60px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
              {filteredBlogs.map((blog) => (
                <motion.article
                  key={blog.id}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  style={{
                    background: 'white',
                    borderRadius: '30px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
                    border: `1px solid ${colors.stone[200]}`,
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedBlog(blog)}
                >
                  {/* Image/Icon Section */}
                  <div style={{
                    height: '220px',
                    background: blog.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{ fontSize: '5rem' }}
                    >
                      {blog.image}
                    </motion.div>
                    
                    {/* Featured badge */}
                    {blog.featured && (
                      <div style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(8px)',
                        padding: '5px 15px',
                        borderRadius: '20px',
                        color: 'white',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}>
                        <Star size={14} />
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ padding: '30px' }}>
                    {/* Meta info */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      marginBottom: '15px',
                      flexWrap: 'wrap',
                    }}>
                      <span style={{
                        background: colors.gold[100],
                        color: colors.gold[700],
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                      }}>
                        {blog.category}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Calendar size={14} color={colors.stone[400]} />
                        <span style={{ fontSize: '0.8rem', color: colors.stone[500] }}>{blog.date}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Clock size={14} color={colors.stone[400]} />
                        <span style={{ fontSize: '0.8rem', color: colors.stone[500] }}>{blog.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 style={{
                      fontSize: '1.4rem',
                      fontWeight: '500',
                      color: colors.stone[800],
                      marginBottom: '15px',
                      lineHeight: '1.4',
                    }}>
                      {blog.title}
                    </h2>

                    {/* Excerpt */}
                    <p style={{
                      fontSize: '0.95rem',
                      color: colors.stone[600],
                      lineHeight: '1.7',
                      marginBottom: '20px',
                    }}>
                      {blog.excerpt}
                    </p>

                    {/* Author and stats */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '20px',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                          width: '35px',
                          height: '35px',
                          background: blog.gradient,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.2rem',
                        }}>
                          {blog.authorImage}
                        </div>
                        <div>
                          <div style={{ fontSize: '0.9rem', fontWeight: '500', color: colors.stone[800] }}>
                            {blog.author}
                          </div>
                          <div style={{ fontSize: '0.7rem', color: colors.stone[500] }}>
                            {blog.authorRole}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Eye size={14} color={colors.stone[400]} />
                          <span style={{ fontSize: '0.8rem', color: colors.stone[500] }}>{blog.views}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Heart size={14} color={colors.stone[400]} />
                          <span style={{ fontSize: '0.8rem', color: colors.stone[500] }}>{blog.likes}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '20px',
                    }}>
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          style={{
                            fontSize: '0.7rem',
                            padding: '3px 10px',
                            background: colors.stone[100],
                            color: colors.stone[600],
                            borderRadius: '15px',
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: colors.gold[600],
                        fontSize: '0.95rem',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: 0,
                        cursor: 'pointer',
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedBlog(blog);
                      }}
                    >
                      Read Full Article <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* No results message */}
            {filteredBlogs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  textAlign: 'center',
                  padding: '60px',
                  background: 'white',
                  borderRadius: '30px',
                  border: `1px solid ${colors.stone[200]}`,
                }}
              >
                <BookOpen size={48} color={colors.stone[400]} />
                <h3 style={{ color: colors.stone[600], marginTop: '20px' }}>
                  No articles found matching your criteria
                </h3>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  style={{
                    marginTop: '20px',
                    padding: '10px 30px',
                    background: colors.gold[400],
                    color: 'white',
                    border: 'none',
                    borderRadius: '30px',
                    cursor: 'pointer',
                  }}
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      {/* Blog Post Modal */}
      <BlogPostModal
        blog={selectedBlog}
        onClose={() => setSelectedBlog(null)}
        colors={colors}
      />
    </>
  );
};

export default BlogPage;