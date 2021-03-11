import React, { Fragment, useEffect } from 'react';
import styles from '../styles/home.module.css';
import LeftCorner from './leftCorner.js';
import Hamburger from './hamburger.js';
import RightCorner from './rightCorner.js';
import { ReactComponent as Face} from '../img/face.svg';
import github from '../img/github.png';
import buttonStyles from '../styles/button.module.css';
import { Link } from "react-router-dom";
import ReactTypingEffect from 'react-typing-effect';

const Button = () => {
  return (
    <div id={buttonStyles.wrapper}>
      <div id={buttonStyles.shadow}></div>
      <Link to="/projects"><input type="button" value="Projects"></input></Link>
    </div>
  );
}

const drawFaceSvg = () => {
  const lines = document.querySelectorAll('.face-line');
  lines.forEach((line) => {
    const length = line.getTotalLength();
    // Clear any previous transition
    line.style.transition = line.style.WebkitTransition = 'none';
    // Set up the starting positions
    line.style.strokeDasharray = length + ' ' + length;
    line.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    line.getBoundingClientRect();
    // Define our transition
    line.style.transition = line.style.WebkitTransition =
      'stroke-dashoffset 2s ease-in-out';
    // Go!
    line.style.strokeDashoffset = '0';
  });
}

export default function Home({ isNight, toggleNightMode, navStatus, setNavStatus }) {

  useEffect(() => {
    if(isNight) {
      //revert colors
      const faceLines = document.querySelectorAll(".face-line");
      faceLines.forEach((line) => {
        line.setAttribute("class","face-line-night");
      });
    }
  }, [isNight]);

  useEffect(() => {
    //draw face svg effect
    drawFaceSvg();
  }, []);

  if(navStatus) {
    return (
      <div id={styles.home} style={{left: "-200px"}}>
          <LeftCorner />
          <Hamburger toggleNightMode={toggleNightMode} isNight={isNight} navStatus={navStatus} setNavStatus={setNavStatus}/>
          <div id={styles['title-wrap']}>
              <span id={styles.name}>Daniel J<span>.</span> Lee</span>
              <Button />
          </div>
          <div id={styles['face-wrap']}>
            <Face id={styles.face}/>
          </div>
          <img src={github} id={styles.git} alt="github-logo"/>
          <RightCorner />     
      </div>
    );
  } else {
    return (
      <div id={styles.home}>
          <LeftCorner />
          <Hamburger toggleNightMode={toggleNightMode} isNight={isNight} navStatus={navStatus} setNavStatus={setNavStatus}/>
          <div id={styles['title-wrap']}>
              {/*<span id={styles.name}>Daniel J<span>.</span> Lee</span>*/}
              <ReactTypingEffect 
                id={styles.name}
                text={"Daniel J. Lee"} 
                typingDelay={400}
                eraseSpeed={100}
                displayTextRenderer={(text) => {
                    return (
                      <span id={styles.name}>
                        {
                          text.split('').map((char, index) => {
                            if(index === 8) {
                              return <span>{char}</span>;
                            } else {
                              return <>{char}</>
                            }
                          })
                        }
                      </span>
                    );
                  }
                }
              />

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

  }