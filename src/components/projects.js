import React from 'react';
import Hamburger from './hamburger';
import LeftCorner from './leftCorner';
import RightCorner from './rightCorner';
import github from '../img/github.png';
import Project from './project.js';
import styles from '../styles/projects.module.css';
import weather from '../img/weather.png'
import perntodo from '../img/perntodo.png'
import openChat from '../img/openchat.png'
import sequence from '../img/sequence.png'
import physio from '../img/physio.png'

export default function Projects({ toggleNightMode, isNight, navStatus, setNavStatus }) {
  if(navStatus) {
    return (
      <div id={styles.wrapper} style={{left: "-200px"}}>
        <LeftCorner />
        <Hamburger toggleNightMode={toggleNightMode} isNight={isNight} navStatus={navStatus} setNavStatus={setNavStatus}/>
        <div id={styles['title-wrap']}>
          <span>Projects</span>
        </div>
        <div id={styles['projects-wrap']}>
          <Project screenshot={perntodo} title="PERN stack todo app" icons={['html', 'css' ,'js', 'react', 'express', 'heroku', 'postgres']} subTitle="HTML, CSS, JS" liveLink="https://dkhole.github.io/calculator/" gitLink="https://github.com/dkhole/calculator" info="Built with PostgreSQL, Express, React and Nodejs. User authentication was implemented using JWT tokens saved in local storage. I understand the security implications involving XSS but figured the 1hr expiry was a good enough window for non-sensitive data. Had some difficulty deploying to heroku but learnt a lot in the process, if you dont want to create an account feel free to test using email:admin@gmail.com pass: admin."/>
          <Project screenshot={weather} title="Gif Weather App" icons={['html', 'css' ,'react', 'not-mobile']} subTitle="React, Open Weather API" liveLink="https://dkhole.github.io/weather-gif/" gitLink="https://github.com/dkhole/weather-gif" info="A weather app that chooses a gif according to the weather. Built with react and OpenWeather API, my first real go at UI. Not currently mobile compatible."/>
          <Project screenshot={openChat} title="Open Chatroom" icons={['html', 'css', 'express', 'heroku']} subTitle="Express.js, ws.js, CSS, Heroku" liveLink="http://damp-basin-13711.herokuapp.com/" gitLink="https://github.com/dkhole/open-chat" info="An Open-chatroom that requires a username and colour to join. Implemented websockets using ws.js, figured i would learn more using ws.js over socket.io"/>
          <Project screenshot={sequence} title="Sequence" icons={['html', 'css', 'react', 'not-mobile']} subTitle="React" liveLink="https://dkhole.github.io/sequence/" gitLink="https://github.com/dkhole/sequence" info="The board game Sequence remade in react. Mainly happy with the logic but want to revisit project as it was done early in my react journey. Currently only working in full screen and not on mobile devices. Thinking about implementing websockets for multiplayer"/>
          <Project screenshot={physio} title="Physiotherapy Business Site" icons={['html', 'css', 'gatsby', 'netlify']} subTitle="Gatsby.js, CSS, Netlify" liveLink="https://unruffled-golick-4f53d4.netlify.app/" gitLink="https://github.com/dkhole/gatsby-movement-mechanics" info="First freelance project, still a WIP so it's filled with stock images and text but the bone structure is working. Built with Gatsby.JS to optimize images and improve SEO and hosted on netlify."/>
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
          <span>Projects</span>
        </div>
        <div id={styles['projects-wrap']}>
        <Project screenshot={perntodo} title="PERN stack todo app" icons={['html', 'css' ,'js', 'react', 'express', 'heroku', 'postgres']} subTitle="HTML, CSS, JS" liveLink="https://dkhole.github.io/calculator/" gitLink="https://github.com/dkhole/calculator" info="Built with PostgreSQL, Express, React and Nodejs. User authentication was implemented using JWT tokens saved in local storage. I understand the security implications involving XSS but figured the 1hr expiry was a good enough window for non-sensitive data. Had some difficulty deploying to heroku but learnt a lot in the process, if you dont want to create an account feel free to test using email:admin@gmail.com pass: admin."/>
          <Project screenshot={weather} title="Gif Weather App" icons={['html', 'css' ,'react', 'not-mobile']} subTitle="React, Open Weather API" liveLink="https://dkhole.github.io/weather-gif/" gitLink="https://github.com/dkhole/weather-gif" info="A weather app that chooses a gif according to the weather. Built with react and OpenWeather API, my first real go at UI. Not currently mobile compatible."/>
          <Project screenshot={openChat} title="Open Chatroom" icons={['html', 'css', 'express', 'heroku']} subTitle="Express.js, ws.js, CSS, Heroku" liveLink="http://damp-basin-13711.herokuapp.com/" gitLink="https://github.com/dkhole/open-chat" info="An Open-chatroom that requires a username and colour to join. Implemented websockets using ws.js, figured i would learn more using ws.js over socket.io"/>
          <Project screenshot={sequence} title="Sequence" icons={['html', 'css', 'react', 'not-mobile']} subTitle="React" liveLink="https://dkhole.github.io/sequence/" gitLink="https://github.com/dkhole/sequence" info="The board game Sequence remade in react. Mainly happy with the logic but want to revisit project as it was done early in my react journey. Currently only working in full screen and not on mobile devices. Thinking about implementing websockets for multiplayer"/>
          <Project screenshot={physio} title="Physiotherapy Business Site" icons={['html', 'css', 'gatsby', 'netlify']} subTitle="Gatsby.js, CSS, Netlify" liveLink="https://unruffled-golick-4f53d4.netlify.app/" gitLink="https://github.com/dkhole/gatsby-movement-mechanics" info="First freelance project, still a WIP so it's filled with stock images and text but the bone structure is working. Built with Gatsby.JS to optimize images and improve SEO and hosted on netlify."/>
        </div>
        <img id={styles.git} src={github} alt="logo"/>
        <RightCorner />
      </div>
    );
  }
}