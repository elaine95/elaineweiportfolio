//import './App.css';
import './app.scss';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Menu from "./components/menu/Menu";
import { useState } from 'react';
import Lifestyle from './components/lifestyle/Lifestyle';


function App() {
  const[menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">     
        <Intro />
        <Portfolio />        
        <Experience />
        <Lifestyle />
        <Contact />
      </div>
      
    </div>
  );
}

export default App;
