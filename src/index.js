import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './styles/index.css';
import Home from './components/home.js';
import Projects from './components/projects.js';
import About from './components/about.js';



let isNight = false;

function nightMode() {

  if(isNight) {
    //revert colors
    disableNight()
    isNight = false;
  } else {
    //change css variables
    enableNight()
    isNight = true;
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/react-portfolio" render={() => (
      <Home nightMode={nightMode} darkMode={isNight}/>
    )} />
    <Route path="/projects" render={() => (
      <Projects nightMode={nightMode} darkMode={isNight}/>
    )} />
    <Route path="/about" render={() => (
      <About nightMode={nightMode} darkMode={isNight}/>
    )} />
  </BrowserRouter>,
  document.getElementById('root')
);

function enableNight() {   
  const faceLines = document.querySelectorAll(".face-line");
  faceLines.forEach((line) => {
    line.setAttribute("class","face-line-night");
  });

  const root = document.documentElement;
  root.style.setProperty('--background-col', 'rgb(66, 66, 66)');
  root.style.setProperty('--prim-font-col', 'rgb(255, 255, 255)');
  root.style.setProperty('--nav-col', 'rgb(30, 30, 30)');
  root.style.setProperty('--icon-col', 'rgb(240, 240, 240)');

  const lightIcon = document.getElementById('light-icon');
  lightIcon.style.fill = 'var(--prim-orange)';
}

function disableNight() {
  const faceLines = document.querySelectorAll(".face-line-night");
  faceLines.forEach((line) => {
    line.setAttribute("class","face-line");
  });
  
  const root = document.documentElement;
  root.style.setProperty('--background-col', 'rgb(240, 240, 240)');
  root.style.setProperty('--prim-font-col', ' rgb(0, 0, 0)');
  root.style.setProperty('--nav-col', 'rgb(226, 226, 226)');
  root.style.setProperty('--icon-col', 'rgb(0, 0, 0)');

  const lightIcon = document.getElementById('light-icon');
  lightIcon.style.fill = 'none';
}