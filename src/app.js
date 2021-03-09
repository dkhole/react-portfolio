import React, {useState} from 'react';
import { HashRouter, Route } from "react-router-dom";
import './styles/index.css';
import hamStyles from './styles/hamburger.module.css';
import Home from './components/home.js';
import Projects from './components/projects.js';
import About from './components/about.js';

const enableNight = () => {   
    const faceLines = document.querySelectorAll(".face-line");
    faceLines.forEach((line) => {
      line.setAttribute("class","face-line-night");
    });
  
    const root = document.documentElement;
    root.style.setProperty('--background-col', 'rgb(47, 47, 47)');
    root.style.setProperty('--prim-font-col', 'rgb(255, 255, 255)');
    root.style.setProperty('--nav-col', 'rgb(30, 30, 30)');
    root.style.setProperty('--icon-col', 'rgb(240, 240, 240)');
    root.style.setProperty('--box-shadow', '-7px 5px 4px 3px rgba(0, 0, 0, 1)');
  
    const lightIcon = document.getElementById('light-icon');
    lightIcon.style.fill = 'var(--prim-orange)';
  }
  
  const disableNight = () => {
    const faceLines = document.querySelectorAll(".face-line-night");
    faceLines.forEach((line) => {
      line.setAttribute("class","face-line");
    });
    
    const root = document.documentElement;
    root.style.setProperty('--background-col', 'rgb(240, 240, 240)');
    root.style.setProperty('--prim-font-col', ' rgb(0, 0, 0)');
    root.style.setProperty('--nav-col', 'rgb(226, 226, 226)');
    root.style.setProperty('--icon-col', 'rgb(0, 0, 0)');
    root.style.setProperty('--box-shadow', '-7px 5px 4px 3px rgba(0, 0, 0, 0.1)');
  
    const lightIcon = document.getElementById('light-icon');
    lightIcon.style.fill = 'none';
  }

export default function App() {
    const [navStatus, setNavStatus] = useState(false);
    const [isNight, setIsNight] = useState(false);

    const toggleNightMode = () => {
        if(isNight) {
          //revert colors
          disableNight()
          setIsNight(false);
        } else {
          //change css variables
          enableNight()
          setIsNight(true);
        }
    }

    return(
        <HashRouter basename="/react-portfolio/">
            <Route exact path="/" render={() => (
            <Home toggleNightMode={toggleNightMode} isNight={isNight} navStatus={navStatus} setNavStatus={setNavStatus}/>
            )} />
            <Route exact path="/projects" render={() => (
            <Projects toggleNightMode={toggleNightMode} isNight={isNight} navStatus={navStatus} setNavStatus={setNavStatus}/>
            )} />
            <Route exact path="/about" render={() => (
            <About toggleNightMode={toggleNightMode} isNight={isNight} navStatus={navStatus} setNavStatus={setNavStatus}/>
            )} />
        </HashRouter>
    );
}

