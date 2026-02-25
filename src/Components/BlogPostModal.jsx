import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Calendar, User, Clock, Eye, Heart, MessageCircle,
  Share2, Bookmark, Twitter, Facebook, Linkedin, Link,
  ArrowLeft, ChevronRight, Tag, Sparkles
} from 'lucide-react';

const BlogPostModal = ({ blog, onClose, colors }) => {
  if (!blog) return null;

  // Animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      y: 50,
      transition: { duration: 0.3 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this article: ${blog.title}`;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } else {
      window.open(shareUrls[platform], '_blank');
    }
  };

  return (
    <AnimatePresence>
      {blog && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(8px)',
              zIndex: 1000,
            }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'fixed',
              top: '5%',
              left: '5%',
              right: '5%',
              bottom: '5%',
              background: colors.beige[50],
              borderRadius: '40px',
              overflow: 'hidden',
              zIndex: 1001,
              boxShadow: '0 50px 100px rgba(0, 0, 0, 0.3)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Close button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'white',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                zIndex: 10,
              }}
            >
              <X size={24} color={colors.stone[700]} />
            </motion.button>

            {/* Scrollable content */}
            <div style={{
              overflowY: 'auto',
              height: '100%',
              padding: '40px',
            }}>
              {/* Hero Section */}
              <div style={{
                background: blog.gradient,
                borderRadius: '30px',
                padding: '60px 40px',
                marginBottom: '40px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Animated background */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '200%',
                    height: '200%',
                    background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* Category and date */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    marginBottom: '20px',
                    flexWrap: 'wrap',
                  }}>
                    <span style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(8px)',
                      padding: '6px 16px',
                      borderRadius: '30px',
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                    }}>
                      {blog.category}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'white' }}>
                      <Calendar size={16} />
                      <span>{blog.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'white' }}>
                      <Clock size={16} />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h1 style={{
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    fontWeight: '500',
                    color: 'white',
                    marginBottom: '20px',
                    lineHeight: '1.2',
                    maxWidth: '900px',
                  }}>
                    {blog.title}
                  </h1>

                  {/* Author info */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      backdropFilter: 'blur(8px)',
                    }}>
                      {blog.authorImage}
                    </div>
                    <div>
                      <div style={{ fontSize: '1.1rem', fontWeight: '500', color: 'white' }}>
                        {blog.author}
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                        {blog.authorRole}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {/* Stats bar */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 0',
                  borderBottom: `1px solid ${colors.stone[200]}`,
                  marginBottom: '30px',
                  flexWrap: 'wrap',
                  gap: '20px',
                }}>
                  <div style={{ display: 'flex', gap: '30px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Eye size={20} color={colors.stone[400]} />
                      <span style={{ color: colors.stone[600] }}>{blog.views} views</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Heart size={20} color={colors.stone[400]} />
                      <span style={{ color: colors.stone[600] }}>{blog.likes} likes</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MessageCircle size={20} color={colors.stone[400]} />
                      <span style={{ color: colors.stone[600] }}>{blog.comments} comments</span>
                    </div>
                  </div>

                  {/* Share buttons */}
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleShare('twitter')}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#1DA1F2',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Twitter size={18} color="white" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleShare('facebook')}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#1877F2',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Facebook size={18} color="white" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleShare('linkedin')}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#0A66C2',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Linkedin size={18} color="white" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleShare('copy')}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: colors.stone[600],
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Link size={18} color="white" />
                    </motion.button>
                  </div>
                </div>

                {/* Introduction */}
                <div style={{ marginBottom: '40px' }}>
                  <p style={{
                    fontSize: '1.2rem',
                    color: colors.stone[700],
                    lineHeight: '1.8',
                    fontStyle: 'italic',
                  }}>
                    {blog.content.introduction}
                  </p>
                </div>

                {/* Main content sections */}
                {blog.content.sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    style={{ marginBottom: '40px' }}
                  >
                    <h2 style={{
                      fontSize: '1.8rem',
                      fontWeight: '500',
                      color: colors.stone[800],
                      marginBottom: '20px',
                    }}>
                      {section.title}
                    </h2>
                    <p style={{
                      fontSize: '1.1rem',
                      color: colors.stone[600],
                      lineHeight: '1.8',
                    }}>
                      {section.content}
                    </p>

                    {/* Decorative element for key sections */}
                    {index === 0 && (
                      <div style={{
                        marginTop: '20px',
                        padding: '20px',
                        background: colors.gold[100],
                        borderRadius: '16px',
                        border: `1px solid ${colors.gold[200]}`,
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                          <Sparkles size={20} color={colors.gold[600]} />
                          <span style={{ fontWeight: '500', color: colors.gold[700] }}>Pro Tip</span>
                        </div>
                        <p style={{ color: colors.stone[600], margin: 0 }}>
                          Companies implementing these trends see an average of 40% improvement in development efficiency and user satisfaction.
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Conclusion */}
                <div style={{
                  marginTop: '50px',
                  padding: '30px',
                  background: colors.beige[100],
                  borderRadius: '20px',
                  border: `1px solid ${colors.stone[200]}`,
                }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '500',
                    color: colors.stone[800],
                    marginBottom: '15px',
                  }}>
                    Conclusion
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    color: colors.stone[600],
                    lineHeight: '1.8',
                    margin: 0,
                  }}>
                    {blog.content.conclusion}
                  </p>
                </div>

                {/* Tags */}
                <div style={{
                  marginTop: '40px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                }}>
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '8px 20px',
                        background: 'white',
                        borderRadius: '30px',
                        border: `1px solid ${colors.stone[200]}`,
                        color: colors.stone[600],
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <Tag size={14} color={colors.gold[400]} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Related articles suggestion */}
                <div style={{
                  marginTop: '60px',
                  padding: '30px',
                  background: 'white',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '500',
                    color: colors.stone[800],
                    marginBottom: '15px',
                  }}>
                    Enjoyed this article?
                  </h3>
                  <p style={{ color: colors.stone[600], marginBottom: '20px' }}>
                    Check out our other articles on similar topics
                  </p>
                  <button
                    onClick={onClose}
                    style={{
                      padding: '12px 30px',
                      background: colors.gold[400],
                      color: 'white',
                      border: 'none',
                      borderRadius: '30px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                    }}
                  >
                    Browse More Articles
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BlogPostModal;