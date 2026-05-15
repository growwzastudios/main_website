import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, X, Filter, ChevronDown, Check } from 'lucide-react';
import { ALL_PROJECTS } from '../data/projects';

const colors = {
  beige: { 50: '#faf7f2', 100: '#f5f0e8', 200: '#e8d9c4' },
  gold: {
    100: '#f5ede1', 200: '#e8d9c4', 300: '#dcc5a8',
    400: '#c9b28b', 500: '#b9a282', 600: '#a18d71', 700: '#8b7557',
  },
  stone: {
    100: '#f5f5f4', 200: '#e7e5e4', 300: '#d6d3d1',
    400: '#a8a29e', 500: '#78716c', 600: '#57534e',
    700: '#44403c', 800: '#292520', 900: '#1c1917',
  },
};

const SERVICE_FILTERS = [
  "All",
  "Web Design & Development",
  "Ecommerce Development",
  "Web Application Development",
  "Mobile App Development",
  "Graphics Designing",
  "Social Media Management",
  "SEO & Digital Marketing",
  "Branding & Logos",
  "AI Automation & Agents",
  "ERP & CRM Solutions",
  "Cloud Solutions & DevOps",
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.92, y: -10, transition: { duration: 0.25 } },
};

// ─── PROJECT CARD ──────────────────────────────────────────────────────────────
const ProjectCard = ({ project }) => (
  <motion.article
    layout
    variants={cardVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    whileHover={{ y: -8 }}
    style={{
      background: 'white',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 16px 40px rgba(0,0,0,0.07)',
      border: `1px solid ${colors.stone[200]}`,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {/* Image / gradient banner */}
    <div style={{ height: '200px', background: project.gradient, position: 'relative', overflow: 'hidden' }}>
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={e => { e.target.style.display = 'none'; }}
        />
      )}
      {/* Category badge */}
      <span style={{
        position: 'absolute', top: 14, right: 14,
        background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)',
        color: 'white', padding: '4px 12px', borderRadius: '20px',
        fontSize: '0.75rem', fontWeight: 600,
      }}>
        {project.category}
      </span>
      {/* Hover overlay */}
      {project.link && (
        <motion.a
          href={project.link} target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}
          style={{
            position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            background: 'rgba(0,0,0,0.5)', color: 'white',
            textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500,
            gap: 8,
          }}
        >
          View Project <ArrowRight size={16} />
        </motion.a>
      )}
    </div>

    {/* Content */}
    <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: colors.stone[800], margin: 0 }}>
        {project.title}
      </h3>
      <p style={{ fontSize: '0.9rem', color: colors.stone[600], lineHeight: 1.6, margin: 0 }}>
        {project.description}
      </p>

      {/* Service tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto', paddingTop: 8 }}>
        {project.services.map(s => (
          <span key={s} style={{
            fontSize: '0.7rem', padding: '3px 10px',
            background: colors.gold[100], color: colors.gold[700],
            borderRadius: '20px', fontWeight: 500,
          }}>{s}</span>
        ))}
      </div>

      {project.link && (
        <motion.a
          href={project.link} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            marginTop: 10, color: colors.gold[600],
            textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500,
          }}
          whileHover={{ x: 5 }}
        >
          Visit Website <ArrowRight size={14} />
        </motion.a>
      )}
    </div>
  </motion.article>
);

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────────
const ProjectsPage = () => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return [...ALL_PROJECTS]
      .sort((a, b) => b.date.localeCompare(a.date))
      .filter(p => {
        const matchesFilter = activeFilter === 'All' || p.services.includes(activeFilter);
        const matchesSearch =
          !q ||
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.services.some(s => s.toLowerCase().includes(q)) ||
          p.description.toLowerCase().includes(q);
        return matchesFilter && matchesSearch;
      });
  }, [query, activeFilter]);

  return (
    <main style={{
      backgroundColor: colors.beige[50],
      fontFamily: "'Poppins', 'Inter', system-ui, sans-serif",
      minHeight: '100vh',
      paddingTop: '80px',
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* ── HERO HEADER ── */}
      <section style={{
        padding: '60px 20px 40px',
        background: `linear-gradient(135deg, ${colors.stone[800]} 0%, ${colors.stone[900]} 100%)`,
        textAlign: 'center',
      }}>
        <motion.div initial="initial" animate="animate" variants={stagger}>
          <motion.span variants={fadeInUp} style={{
            display: 'inline-block',
            background: `${colors.gold[400]}22`,
            border: `1px solid ${colors.gold[400]}55`,
            color: colors.gold[400],
            padding: '6px 20px', borderRadius: '40px',
            fontSize: '0.85rem', fontWeight: 500, marginBottom: 20,
            letterSpacing: '0.05em',
          }}>
            Our Portfolio
          </motion.span>
          <motion.h1 variants={fadeInUp} style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: 300, color: 'white', margin: '0 0 16px',
            lineHeight: 1.2,
          }}>
            Work We're&nbsp;
            <span style={{ fontWeight: 600, color: colors.gold[400] }}>Proud Of</span>
          </motion.h1>
          <motion.p variants={fadeInUp} style={{
            fontSize: '1.05rem', color: colors.stone[400],
            maxWidth: 600, margin: '0 auto',
          }}>
            Browse our projects, filter by service, and see how we've helped brands grow.
          </motion.p>
        </motion.div>
      </section>

      {/* ── SEARCH + FILTER ── */}
      <section style={{
        background: colors.beige[100],
        padding: '28px 20px',
        borderBottom: `1px solid ${colors.stone[200]}`,
      }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          {/* Row: search + filter button */}
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>

            {/* Search input */}
            <div style={{ position: 'relative', flex: 1 }}>
              <Search size={17} style={{
                position: 'absolute', left: 16, top: '50%',
                transform: 'translateY(-50%)', color: colors.stone[400],
                pointerEvents: 'none',
              }} />
              <input
                type="text"
                placeholder="Search projects, services, categories…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                style={{
                  width: '100%', padding: '13px 44px 13px 46px',
                  borderRadius: '40px',
                  border: `1.5px solid ${colors.stone[200]}`,
                  fontSize: '0.93rem', color: colors.stone[700],
                  background: colors.beige[50], outline: 'none',
                  boxSizing: 'border-box',
                  boxShadow: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onFocus={e => {
                  e.target.style.borderColor = colors.gold[400];
                  e.target.style.boxShadow = '0 0 0 3px rgba(201,178,139,0.15)';
                }}
                onBlur={e => {
                  e.target.style.borderColor = colors.stone[200];
                  e.target.style.boxShadow = 'none';
                }}
              />
              {query && (
                <button onClick={() => setQuery('')} style={{
                  position: 'absolute', right: 14, top: '50%',
                  transform: 'translateY(-50%)', background: 'none',
                  border: 'none', cursor: 'pointer', color: colors.stone[400],
                  display: 'flex', alignItems: 'center', padding: 0,
                }}>
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Filter by dropdown */}
            <div ref={dropdownRef} style={{ position: 'relative', flexShrink: 0 }}>
              <button
                onClick={() => setDropdownOpen(o => !o)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '13px 20px',
                  borderRadius: '40px',
                  border: `1.5px solid ${activeFilter !== 'All' ? colors.gold[500] : colors.stone[200]}`,
                  background: activeFilter !== 'All'
                    ? `linear-gradient(135deg, ${colors.gold[400]}, ${colors.gold[600]})`
                    : colors.beige[50],
                  color: activeFilter !== 'All' ? 'white' : colors.stone[600],
                  fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer',
                  boxShadow: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s',
                }}
              >
                <Filter size={15} />
                {activeFilter === 'All' ? 'Filter by' : activeFilter}
                <ChevronDown
                  size={15}
                  style={{
                    transition: 'transform 0.2s',
                    transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>

              {/* Dropdown list */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    style={{
                      position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                      background: 'white',
                      border: `1px solid ${colors.stone[200]}`,
                      borderRadius: '16px',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                      minWidth: 240,
                      maxHeight: 380,
                      overflowY: 'auto',
                      padding: '8px 0',
                      listStyle: 'none',
                      margin: 0,
                      zIndex: 100,
                    }}
                  >
                    {SERVICE_FILTERS.map(f => {
                      const active = activeFilter === f;
                      return (
                        <li key={f}>
                          <button
                            onClick={() => { setActiveFilter(f); setDropdownOpen(false); }}
                            style={{
                              width: '100%', textAlign: 'left',
                              padding: '10px 18px',
                              background: active ? colors.gold[100] : 'transparent',
                              border: 'none', cursor: 'pointer',
                              fontSize: '0.88rem', fontWeight: active ? 600 : 400,
                              color: active ? colors.gold[700] : colors.stone[700],
                              display: 'flex', alignItems: 'center',
                              justifyContent: 'space-between', gap: 8,
                              transition: 'background 0.15s',
                            }}
                            onMouseEnter={e => {
                              if (!active) e.currentTarget.style.background = colors.beige[100];
                            }}
                            onMouseLeave={e => {
                              if (!active) e.currentTarget.style.background = 'transparent';
                            }}
                          >
                            {f}
                            {active && <Check size={14} style={{ color: colors.gold[600], flexShrink: 0 }} />}
                          </button>
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS GRID ── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '50px 20px 80px' }}>
        {/* Header row */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 36, flexWrap: 'wrap', gap: 10,
        }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
              fontWeight: 300, color: colors.stone[800], margin: '0 0 4px',
            }}>
              {activeFilter !== 'All'
                ? <><span style={{ fontWeight: 600, color: colors.gold[600] }}>{activeFilter}</span> Projects</>
                : <>All <span style={{ fontWeight: 600, color: colors.gold[600] }}>Projects</span></>}
            </h2>
            <p style={{ margin: 0, color: colors.stone[500], fontSize: '0.9rem' }}>
              {filtered.length} project{filtered.length !== 1 ? 's' : ''} found
            </p>
          </div>
          {(query || activeFilter !== 'All') && (
            <button
              onClick={() => { setQuery(''); setActiveFilter('All'); }}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '8px 18px', borderRadius: '20px',
                border: `1.5px solid ${colors.stone[300]}`,
                background: 'white', color: colors.stone[600],
                fontSize: '0.85rem', cursor: 'pointer',
              }}
            >
              <X size={14} /> Clear filters
            </button>
          )}
        </div>

        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              layout
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 28,
              }}
            >
              {filtered.map(p => <ProjectCard key={`${p.id}-${p.title}`} project={p} />)}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ textAlign: 'center', padding: '80px 20px', color: colors.stone[500] }}
            >
              <Search size={40} style={{ opacity: 0.3, marginBottom: 16 }} />
              <p style={{ fontSize: '1.1rem', fontWeight: 500, margin: '0 0 8px' }}>No projects found</p>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Try a different search term or filter.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default ProjectsPage;
