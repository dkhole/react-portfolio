import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './styles/index.css';
import Home from './components/home.js';
import Projects from './components/projects.js';
import About from './components/about.js';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route path="/projects" component={Projects} />
    <Route path="/about" component={About} />
  </BrowserRouter>,
  document.getElementById('root')
);