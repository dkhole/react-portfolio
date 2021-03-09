import React, { useEffect } from 'react';
import LeftCorner from './leftCorner.js';
import Hamburger from './hamburger.js';
import RightCorner from './rightCorner.js';
import github from '../img/github.png';
import styles from '../styles/about.module.css';
import { ReactComponent as Face} from '../img/face.svg';
import { ReactComponent as Html} from '../img/html-5.svg';
import { ReactComponent as Css} from '../img/css.svg';
import { ReactComponent as Sass} from '../img/sass.svg';
import { ReactComponent as Javascript} from '../img/javascript.svg';
import { ReactComponent as Typescript} from '../img/typescript.svg';
import { ReactComponent as ReactIcon} from '../img/react.svg';
import { ReactComponent as Gatsby} from '../img/gatsby.svg';
import { ReactComponent as Node} from '../img/nodejs.svg';
import { ReactComponent as Heroku} from '../img/heroku.svg';
import { ReactComponent as Netlify} from '../img/netlify.svg';
import { ReactComponent as Postgres} from '../img/postgresql.svg';
import { ReactComponent as Express} from '../img/expressjs.svg';

export default function About({isNight, toggleNightMode, navStatus, setNavStatus}) {
  useEffect(() => {
    if(isNight) {
      //revert colors
      const faceLines = document.querySelectorAll(".face-line");
      faceLines.forEach((line) => {
        line.setAttribute("class","face-line-night");
      });
    }
  }, [isNight]);
  
  if(navStatus) {
    return (
      <div id={styles.wrapper} style={{left: "-200px"}}>
        <LeftCorner />
        <Hamburger toggleNightMode={toggleNightMode} isNight={isNight} navStatus={navStatus} setNavStatus={setNavStatus}/>
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
            <div id={styles.about}>
              <span>I'm at the moment focused on the web but building is my passion and programming is my tool. Seeing an end result is what really drives me and writing clean thoughtful code to get me there is what gives me a sense of accomplisment. I am comfortable using the below technologies and am working everyday to better my skills.</span>
            </div>
              <div id={styles.skills}><Html /> <Css /> <Sass /> <Javascript /> <Typescript /> <ReactIcon /> <Gatsby /> <Node /> <Express /> <Heroku /> <Netlify /> <Postgres /></div>
          </div>
        </div>

        <img id={styles.git} src={github} alt="logo"/>
        <RightCorner />
      </div>
    );
  } else {
    return (
      <div id={styles.wrapper}>
        <LeftCorner />
        <Hamburger toggleNightMode={toggleNightMode} isNight={isNight} navStatus={navStatus} setNavStatus={setNavStatus}/>
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
            <div id={styles.about}>
            <span>I'm at the moment focused on the web but building is my passion and programming is my tool. Seeing an end result is what really drives me and writing clean thoughtful code to get me there is what gives me a sense of accomplisment. I am comfortable using the below technologies and am working everyday to better my skills.</span>
            </div>
              <div id={styles.skills}><Html /> <Css /> <Sass /> <Javascript /> <Typescript /> <ReactIcon /> <Gatsby /> <Node /> <Express /> <Heroku /> <Netlify /> <Postgres /></div>
          </div>
        </div>

        <img id={styles.git} src={github} alt="logo"/>
        <RightCorner />
      </div>
    );
  }

}

  