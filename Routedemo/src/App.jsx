import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import NavScroll from './NavScroll.jsx'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Service from './Service.jsx';
import API from './API.jsx';

export default function App() {
 

  return (
    <>
     <Router>
      <NavScroll /> {/* Always render Navbar component */}
      <Routes>
      
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/ser" element={<Service />} />
       <Route path="/api" element={<API />} />
      </Routes>
    </Router>

    </>
  )
}


