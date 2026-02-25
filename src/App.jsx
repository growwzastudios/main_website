import './App.css'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import AboutUsPage from './Components/AboutUS'
import Footer from './Components/Footer'
import { Routes,Route } from 'react-router-dom'
import PremiumServicesPage from './Components/Services'
import PremiumContactPage from './Components/Contacts'
import BlogPage from './Components/Blogs'
function App() {
  

  return (
    <>
<Navbar className="sticky top-0 z-50"/>
     <Routes>
<Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<PremiumServicesPage />} />
          <Route path="/contact" element={<PremiumContactPage />} />
          <Route path="/blogs" element={<BlogPage/>} />
     </Routes>
<Footer className="mt-60"/>
    
     
    </>
  )
}

export default App
