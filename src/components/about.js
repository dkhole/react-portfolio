import React from 'react';
import LeftCorner from './leftCorner.js';
import Hamburger from './hamburger.js';
import RightCorner from './rightCorner.js';
import github from '../img/github.png';
import styles from '../styles/about.module.css';

export default function About() {
    return (
      <div id={styles.wrapper}>
        <LeftCorner />
        <Hamburger />
        <div id={styles['title-wrap']}>
          <span>About</span>
        </div>

        <div id={styles.profile}>
          <img alt="profile"></img>
          <div id={styles.info}>
            <div id={styles.name}>Daniel Jungho Lee</div>
            <div id={styles.country}>SYD,NSW</div>
            <div id={styles.nationality}>Australian</div>
            <div id={styles.email}>dkhlee419@gmail.com</div>
            <div id={styles.github}>www.github.com/dkhole</div>
            <div id={styles['skill-title']}>Skills</div>
            <div id={styles.skills}>HTML, CSS, SASS, JS, TS, REACT, GATSBY, Node.js, Express.js, Heroku, Netlify, SQL</div>
          </div>
        </div>

        <img id={styles.git} src={github} alt="logo"/>
        <RightCorner />
      </div>
    );
  }

  