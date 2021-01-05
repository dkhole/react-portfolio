import React from 'react';
import LeftCorner from './leftCorner.js';
import Hamburger from './hamburger.js';
import RightCorner from './rightCorner.js';
import github from '../img/github.png';
import styles from '../styles/about.module.css';
import { ReactComponent as Face} from '../img/Ellipse2.svg';

export default function About() {
    return (
      <div id={styles.wrapper}>
        <LeftCorner />
        <Hamburger />
        <div id={styles['title-wrap']}>
          <span>About</span>
        </div>

        <div id={styles.profile}>
          <div id={styles.first}>
            <div id={styles['face-wrapper']}>
              <Face id={styles.face}/>
            </div>
          </div>
          <div id={styles.second}>
            <div id={styles.intro}>
              <div id={styles.name}>Daniel Jungho Lee</div>
              <div id={styles.country}>SYD,NSW</div>
            </div>
            <div id={styles.details}>
              <div id={styles.nationality}><span>Nationality:</span>Australian</div>
              <div id={styles.email}><span>Email:</span>dkhlee419@gmail.com</div>
              <div id={styles.github}><span>Github:</span>www.github.com/dkhole</div>
            </div>
            <div id={styles['skills-wrap']}>
              <div id={styles['skill-title']}>Skills:</div>
              <div id={styles.skills}>HTML, CSS, SASS, JS, TS, REACT, GATSBY, Node.js, Express.js, Heroku, Netlify, SQL</div>
            </div>
          </div>
        </div>

        <img id={styles.git} src={github} alt="logo"/>
        <RightCorner />
      </div>
    );
  }

  