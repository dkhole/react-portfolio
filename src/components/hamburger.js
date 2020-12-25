import React from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/hamburger.module.css';


export default function Hamburger() {
    return (
      
        <div id={styles.hamburger}>
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <div id={styles['ham-links']}>
              <Link to="/react-portfolio"><div>Home</div></Link>
              <Link to="/projects"><div>Projects</div></Link>
              <Link to="/about"><div>About</div></Link>
          </div>
        </div>
    );
  }