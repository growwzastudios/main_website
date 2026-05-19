import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './Components/Navbar'
import ScrollToTop from './Components/ScrollToTop'
import Footer from './Components/Footer'

// ── Route-based code splitting ─────────────────────────────────────────────
// Each page is a separate chunk — mobile only downloads what it needs
const LandingPage       = lazy(() => import('./Components/LandingPage'))
const AboutUsPage       = lazy(() => import('./Components/AboutUS'))
const PremiumServicesPage = lazy(() => import('./Components/Services'))
const ProjectsPage      = lazy(() => import('./Components/Projects'))
const PremiumContactPage  = lazy(() => import('./Components/Contacts'))
const BlogPage          = lazy(() => import('./Components/Blogs'))

// Minimal page-transition skeleton — matches site background colour
const PageSkeleton = () => (
  <div style={{
    minHeight: '100vh',
    backgroundColor: '#faf7f2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <div style={{
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '3px solid #e8d9c4',
      borderTopColor: '#c9b28b',
      animation: 'spin 0.7s linear infinite',
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
)

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/"        element={<LandingPage />} />
          <Route path="/about"   element={<AboutUsPage />} />
          <Route path="/services" element={<PremiumServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact"  element={<PremiumContactPage />} />
          <Route path="/blogs"    element={<BlogPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App

