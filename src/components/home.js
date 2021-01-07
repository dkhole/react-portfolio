import React from 'react';
import styles from '../styles/home.module.css';
import LeftCorner from './leftCorner.js';
import Hamburger from './hamburger.js';
import RightCorner from './rightCorner.js';
import { ReactComponent as Face} from '../img/face.svg';
import github from '../img/github.png';
import buttonStyles from '../styles/button.module.css';
import { Link } from "react-router-dom";

function Button() {
  return (
    <div id={buttonStyles.wrapper}>
      <div id={buttonStyles.shadow}></div>
      <Link to="/projects"><input type="button" value="Projects"></input></Link>
    </div>
  );
}

export default function Home() {
    return (
      <div id={styles.home}>
          <LeftCorner />
          <Hamburger />
          <div id={styles['title-wrap']}>
              <span id={styles.name}>Daniel J<span>.</span> Lee</span>
              <span id={styles['sub-title']}>Web Development</span>
              <Button />
          </div>
          <div id={styles['face-wrap']}>
            <Face id={styles.face}/>
          </div>
          <img src={github} id={styles.git} alt="github-logo"/>
          <RightCorner />     
      </div>
    );
  }