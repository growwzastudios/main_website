import React, { useState, useMemo, useRef, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, X, Filter, ChevronDown, Check, SlidersHorizontal } from 'lucide-react';
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
  'All',
  'Web Design & Development',
  'Ecommerce Development',
  'Web Application Development',
  'Mobile App Development',
  'Graphics Designing',
  'Social Media Management',
  'SEO & Digital Marketing',
  'Branding & Logos',
  'AI Automation & Agents',
  'ERP & CRM Solutions',
  'Cloud Solutions & DevOps',
];

// ── Detect mobile once, avoid per-render checks ──────────────────────────────
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

// ── Lightweight animation variants (skip heavy scale on mobile) ───────────────
const fadeInUp = {
  initial: { opacity: 0, y: isMobile ? 16 : 30 },
  animate: { opacity: 1, y: 0, transition: { duration: isMobile ? 0.35 : 0.55, ease: 'easeOut' } },
};

const stagger = {
  animate: { transition: { staggerChildren: isMobile ? 0.05 : 0.08 } },
};

const cardVariants = {
  initial: { opacity: 0, y: isMobile ? 12 : 20 },
  animate: { opacity: 1, y: 0, transition: { duration: isMobile ? 0.3 : 0.45, ease: 'easeOut' } },
  exit:    { opacity: 0,           transition: { duration: 0.2 } },
};

// ─── PROJECT CARD (memoised to skip re-renders when filter changes other cards)
const ProjectCard = memo(({ project }) => (
  <motion.article
    variants={cardVariants}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.15 }}
    exit="exit"
    whileHover={isMobile ? undefined : { y: -8 }}
    style={{
      background: 'white',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 8px 24px rgba(0,0,0,0.07)',
      border: `1px solid ${colors.stone[200]}`,
      display: 'flex',
      flexDirection: 'column',
      contain: 'layout style paint',   // CSS containment — huge perf win
    }}
  >
    {/* Image / gradient banner */}
    <div style={{ height: '200px', background: project.gradient, position: 'relative', overflow: 'hidden' }}>
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          width="400"
          height="200"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={e => { e.target.style.display = 'none'; }}
        />
      )}
      {/* Category badge */}
      <span style={{
        position: 'absolute', top: 14, right: 14,
        background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(6px)',
        color: 'white', padding: '4px 12px', borderRadius: '20px',
        fontSize: '0.75rem', fontWeight: 600,
      }}>
        {project.category}
      </span>
      {/* Hover / tap overlay — only on desktop */}
      {project.link && !isMobile && (
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
      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: colors.stone[800], margin: 0, lineHeight: 1.35 }}>
        {project.title}
      </h3>
      <p style={{ fontSize: '0.88rem', color: colors.stone[600], lineHeight: 1.6, margin: 0 }}>
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
        <a
          href={project.link} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            marginTop: 10, color: colors.gold[600],
            textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500,
          }}
        >
          Visit Website <ArrowRight size={14} />
        </a>
      )}
    </div>
  </motion.article>
));
ProjectCard.displayName = 'ProjectCard';

// ─── FILTER DROPDOWN (mobile-safe) ────────────────────────────────────────────
const FilterDropdown = memo(({ activeFilter, onSelect }) => {
  const [open, setOpen] = useState(false);
  const btnRef  = useRef(null);
  const listRef = useRef(null);

  // Close on outside click / touch
  useEffect(() => {
    if (!open) return;
    const handler = e => {
      if (
        btnRef.current  && !btnRef.current.contains(e.target) &&
        listRef.current && !listRef.current.contains(e.target)
      ) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = e => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const isFiltered = activeFilter !== 'All';

  // ── compute dropdown position so it never overflows the viewport ─────────────
  const [dropPos, setDropPos] = useState({ top: 0, left: 0, width: 240 });
  useEffect(() => {
    if (!open || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const DROPDOWN_W = Math.max(240, rect.width);
    let left = rect.right - DROPDOWN_W;                // default: right-aligned
    if (left < 8) left = 8;                             // clamp to left edge
    if (left + DROPDOWN_W > window.innerWidth - 8)
      left = window.innerWidth - DROPDOWN_W - 8;        // clamp to right edge
    setDropPos({ top: rect.bottom + window.scrollY + 8, left, width: DROPDOWN_W });
  }, [open]);

  return (
    <div style={{ position: 'relative', flexShrink: 0 }}>
      {/* Toggle button */}
      <button
        ref={btnRef}
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          display: 'flex', alignItems: 'center', gap: 7,
          padding: '12px 18px',
          borderRadius: '40px',
          border: `1.5px solid ${isFiltered ? colors.gold[500] : colors.stone[200]}`,
          background: isFiltered
            ? `linear-gradient(135deg, ${colors.gold[400]}, ${colors.gold[600]})`
            : 'white',
          color: isFiltered ? 'white' : colors.stone[600],
          fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer',
          whiteSpace: 'nowrap',
          transition: 'all 0.2s',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          minHeight: 44,          // touch-friendly tap target
        }}
      >
        <SlidersHorizontal size={15} />
        {isFiltered ? (
          <span style={{ maxWidth: 120, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {activeFilter}
          </span>
        ) : 'Filter'}
        <ChevronDown
          size={14}
          style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none', flexShrink: 0 }}
        />
      </button>

      {/* Dropdown — rendered via a portal-style fixed overlay so it's NEVER clipped by parent overflow */}
      <AnimatePresence>
        {open && (
          <motion.ul
            ref={listRef}
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'fixed',
              top:  dropPos.top,
              left: dropPos.left,
              width: dropPos.width,
              background: 'white',
              border: `1px solid ${colors.stone[200]}`,
              borderRadius: '16px',
              boxShadow: '0 16px 48px rgba(0,0,0,0.16)',
              maxHeight: '60vh',   // never taller than 60% of screen height
              overflowY: 'auto',
              padding: '8px 0',
              listStyle: 'none',
              margin: 0,
              zIndex: 9999,        // always on top
              WebkitOverflowScrolling: 'touch',  // smooth scroll on iOS
            }}
          >
            {SERVICE_FILTERS.map(f => {
              const active = activeFilter === f;
              return (
                <li key={f} role="option" aria-selected={active}>
                  <button
                    onClick={() => { onSelect(f); setOpen(false); }}
                    style={{
                      width: '100%', textAlign: 'left',
                      padding: '11px 18px',
                      background: active ? colors.gold[100] : 'transparent',
                      border: 'none', cursor: 'pointer',
                      fontSize: '0.88rem', fontWeight: active ? 600 : 400,
                      color: active ? colors.gold[700] : colors.stone[700],
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'space-between', gap: 8,
                      minHeight: 44,   // touch-friendly
                    }}
                    onMouseEnter={e => { if (!active) e.currentTarget.style.background = colors.beige[100]; }}
                    onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}
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
  );
});
FilterDropdown.displayName = 'FilterDropdown';

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────────
const ProjectsPage = () => {
  const [query,        setQuery]        = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const handleSelect = useCallback(f => setActiveFilter(f), []);
  const clearAll     = useCallback(() => { setQuery(''); setActiveFilter('All'); }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return [...ALL_PROJECTS]
      .sort((a, b) => b.date.localeCompare(a.date))
      .filter(p => {
        const matchesFilter = activeFilter === 'All' || p.services.includes(activeFilter);
        const matchesSearch =
          !q ||
          p.title.toLowerCase().includes(q)       ||
          p.category.toLowerCase().includes(q)    ||
          p.services.some(s => s.toLowerCase().includes(q)) ||
          p.description.toLowerCase().includes(q);
        return matchesFilter && matchesSearch;
      });
  }, [query, activeFilter]);

  return (
    <main style={{
      backgroundColor: colors.beige[50],
      fontFamily: "'Inter', 'Poppins', system-ui, sans-serif",
      minHeight: '100vh',
      paddingTop: '80px',
    }}>

      {/* ── HERO + SEARCH merged into one seamless beige gradient zone ── */}
      <div style={{
        background: `linear-gradient(160deg, ${colors.beige[100]} 0%, ${colors.beige[50]} 100%)`,
        borderBottom: `1px solid ${colors.beige[200]}`,
      }}>

        {/* HERO HEADER */}
        <section style={{ padding: '52px 20px 32px', textAlign: 'center' }}>
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.span variants={fadeInUp} style={{
              display: 'inline-block',
              background: colors.gold[100],
              border: `1px solid ${colors.gold[200]}`,
              color: colors.gold[700],
              padding: '6px 20px', borderRadius: '40px',
              fontSize: '0.82rem', fontWeight: 500, marginBottom: 18,
              letterSpacing: '0.06em',
            }}>
              Our Portfolio
            </motion.span>

            <motion.h1 variants={fadeInUp} style={{
              fontSize: 'clamp(1.9rem, 6vw, 3.4rem)',
              fontWeight: 300, color: colors.stone[800], margin: '0 0 14px',
              lineHeight: 1.2,
            }}>
              Work We're&nbsp;
              <span style={{ fontWeight: 700, color: colors.gold[600] }}>Proud Of</span>
            </motion.h1>

            <motion.p variants={fadeInUp} style={{
              fontSize: '1rem', color: colors.stone[500],
              maxWidth: 580, margin: '0 auto',
              lineHeight: 1.65,
            }}>
              Browse our projects, filter by service, and see how we've helped brands grow.
            </motion.p>
          </motion.div>
        </section>

        {/* ── SEARCH + FILTER (seamlessly joined — same gradient background) ── */}
        <section style={{ padding: '0 20px 28px' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
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
                  placeholder="Search projects, services…"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  style={{
                    width: '100%', padding: '12px 44px 12px 46px',
                    borderRadius: '40px',
                    border: `1.5px solid ${colors.stone[200]}`,
                    fontSize: '0.92rem', color: colors.stone[700],
                    background: 'white', outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    minHeight: 44,
                  }}
                  onFocus={e => {
                    e.target.style.borderColor = colors.gold[400];
                    e.target.style.boxShadow   = '0 0 0 3px rgba(201,178,139,0.18)';
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = colors.stone[200];
                    e.target.style.boxShadow   = '0 2px 8px rgba(0,0,0,0.05)';
                  }}
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    style={{
                      position: 'absolute', right: 14, top: '50%',
                      transform: 'translateY(-50%)', background: 'none',
                      border: 'none', cursor: 'pointer', color: colors.stone[400],
                      display: 'flex', alignItems: 'center', padding: 4,
                      minHeight: 44, minWidth: 44, justifyContent: 'center',
                    }}
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              {/* Filter dropdown (mobile-safe) */}
              <FilterDropdown activeFilter={activeFilter} onSelect={handleSelect} />
            </div>
          </div>
        </section>
      </div>

      {/* ── PROJECTS GRID ── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '44px 16px 80px' }}>

        {/* Header row */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 32, flexWrap: 'wrap', gap: 10,
        }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 4vw, 2rem)',
              fontWeight: 300, color: colors.stone[800], margin: '0 0 4px',
            }}>
              {activeFilter !== 'All'
                ? <><span style={{ fontWeight: 600, color: colors.gold[600] }}>{activeFilter}</span> Projects</>
                : <>All <span style={{ fontWeight: 600, color: colors.gold[600] }}>Projects</span></>}
            </h2>
            <p style={{ margin: 0, color: colors.stone[500], fontSize: '0.88rem' }}>
              {filtered.length} project{filtered.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {(query || activeFilter !== 'All') && (
            <button
              onClick={clearAll}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '8px 18px', borderRadius: '20px',
                border: `1.5px solid ${colors.stone[300]}`,
                background: 'white', color: colors.stone[600],
                fontSize: '0.85rem', cursor: 'pointer',
                minHeight: 44,
              }}
            >
              <X size={14} /> Clear filters
            </button>
          )}
        </div>

        {/* Grid — no layout animation on mobile (it's expensive with many cards) */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
                gap: 24,
              }}
            >
              {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ textAlign: 'center', padding: '80px 20px', color: colors.stone[500] }}
            >
              <Search size={36} style={{ opacity: 0.3, marginBottom: 16 }} />
              <p style={{ fontSize: '1.05rem', fontWeight: 500, margin: '0 0 8px' }}>No projects found</p>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Try a different search term or filter.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default ProjectsPage;
