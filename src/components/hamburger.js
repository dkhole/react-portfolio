import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/hamburger.module.css';
import { ReactComponent as ProjIcon} from '../img/layers.svg';
import { ReactComponent as About} from '../img/about.svg';
import { ReactComponent as Home} from '../img/home.svg';
import { ReactComponent as Light} from '../img/light.svg';

export default function Hamburger(props) {
  function handleChange(e) {
    if (e.target.checked) {
      //get roots first child and change its position to left -200px
      const root = document.getElementById('root');
      const wrapper = root.children[0];
      wrapper.style.left = "-200px";
    } else {
      const root = document.getElementById('root');
      const wrapper = root.children[0];
      wrapper.style.left = "0";
    }
  }

  useEffect(() => {
    if(props.darkMode) {
      //revert colors
      const lightIcon = document.getElementById("light-icon");
      lightIcon.style.fill= "var(--prim-orange)";
    }
  }, [props.darkMode]);

  return (
    <div id={styles.hamburger}>
      <input type="checkbox" onChange={ handleChange }/>

      <span></span>
      <span></span>
      <span></span>

      <div id={styles['ham-links']}>
          <Link to="/"><div id="home-wrap"><Home id="home" className={styles.icon}/></div></Link>
          <Link to="/projects"><div id="proj-wrap"><ProjIcon id="proj" className={styles.icon}/></div></Link>
          <Link to="/about"><div id="about-wrap"><About id="about" className={styles.icon}/></div></Link>
          <div id="light-wrap" onClick={props.toggleNightMode}><Light id="light" className={styles.icon}/></div>
      </div>
    </div>
  );
}