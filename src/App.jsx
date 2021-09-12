import Topbar from './Components/TopBar/TopBar'
import Intro from './Components/Intro/Intro'
import Portfolio from './Components/Portfolio/portfolio'
import Works from './Components/Works/Works'
import Tesstimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Menu from './Components/Menu/Menu'
import './app.scss'
import React, { useState } from 'react';
function App() {
 const [menuOpen,setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <div className="section">
      
    <Intro />
    <Portfolio />
    <Works />
    <Tesstimonials />
    <Contact />
    </div>
    </div>
    
  );
}

export default App;
