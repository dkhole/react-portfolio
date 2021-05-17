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
import scraper from '../img/scraper.png'

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
          <Project screenshot={scraper} title="Web Scraper" icons={['js', 'node']} subTitle="JS, Node.js" liveLink="https://github.com/dkhole/gum-scrape" gitLink="https://github.com/dkhole/gum-scrape" info="Command line tool to scrape a website, extract the data to .csv and email to user. Also working on an automated messaging tool for the same start-up. Wrote documentation for non-tecnical users: https://bit.ly/3uP2Z1s"/>
          <Project screenshot={physio} title="Physiotherapy Business Site" icons={['html', 'css', 'js', 'react', 'gatsby', 'netlify']} subTitle="Gatsby.js, CSS, Netlify" liveLink="https://agitated-bhabha-976a8e.netlify.app/" gitLink="https://github.com/dkhole/physio-cms" info="Waiting on client to finish sending over information but other then that the website is compelete. Designed using Figma to prototype and developed using Gatsby.js to optimize images and improve SEO. Fully fit with an admin section using Netlify CMS so client can update data whenever they want. Hosted on netlify."/>
          <Project screenshot={perntodo} title="PERN stack todo app" icons={['html', 'css', 'js', 'react', 'express', 'heroku', 'postgres']} subTitle="HTML, CSS, JS" liveLink="https://deploy-pern-todo.herokuapp.com/" gitLink="https://github.com/dkhole/pern-todo" info="Built with PostgreSQL, Express, React and Nodejs following a RESTful architecture. Has a slow start-up due to Heroku's free tier, if you dont want to create an account feel free to test using email: admin@gmail.com pass: admin."/>
          <Project screenshot={openChat} title="Open Chatroom" icons={['html', 'css', 'js', 'express', 'heroku']} subTitle="Express.js, ws.js, CSS, Heroku" liveLink="http://damp-basin-13711.herokuapp.com/" gitLink="https://github.com/dkhole/open-chat" info="An Open-chatroom that requires a username and colour to join. Implemented using ws.js."/>
          <Project screenshot={weather} title="Gif Weather App" icons={['html', 'css', 'js', 'react', 'not-mobile']} subTitle="React, Open Weather API" liveLink="https://dkhole.github.io/weather-gif/" gitLink="https://github.com/dkhole/weather-gif" info="A weather app that chooses a gif according to the weather. Built with react and OpenWeather API. Not currently mobile compatible."/>
          <Project screenshot={sequence} title="Sequence" icons={['html', 'css', 'js', 'react', 'not-mobile']} subTitle="React" liveLink="https://dkhole.github.io/sequence/" gitLink="https://github.com/dkhole/sequence" info="The board game Sequence remade in react. Mainly happy with the logic but want to revisit project as it was done early in my react journey. Currently only working in full screen and not on mobile devices. Thinking about implementing websockets for multiplayer"/>
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
          <Project screenshot={scraper} title="Web Scraper" icons={['js', 'node']} subTitle="JS, Node.js" liveLink="https://github.com/dkhole/gum-scrape" gitLink="https://github.com/dkhole/gum-scrape" info="Command line tool to scrape a website, extract the data to .csv and email to user. Also working on an automated messaging tool for the same start-up. Wrote documentation for non-tecnical users: https://bit.ly/3uP2Z1s"/>
          <Project screenshot={physio} title="Physiotherapy Business Site" icons={['html', 'css', 'js', 'react', 'gatsby', 'netlify']} subTitle="Gatsby.js, CSS, Netlify" liveLink="https://agitated-bhabha-976a8e.netlify.app/" gitLink="https://github.com/dkhole/physio-cms" info="Waiting on client to finish sending over information but other then that the website is compelete. Designed using Figma to prototype and developed using Gatsby.js to optimize images and improve SEO. Fully fit with an admin section using Netlify CMS so client can update data whenever they want. Hosted on netlify."/>
          <Project screenshot={perntodo} title="PERN stack todo app" icons={['html', 'css', 'js', 'react', 'express', 'heroku', 'postgres']} subTitle="HTML, CSS, JS" liveLink="https://deploy-pern-todo.herokuapp.com/" gitLink="https://github.com/dkhole/pern-todo" info="Built with PostgreSQL, Express, React and Nodejs following a RESTful architecture. Has a slow start-up due to Heroku's free tier, if you dont want to create an account feel free to test using email: admin@gmail.com pass: admin."/>
          <Project screenshot={openChat} title="Open Chatroom" icons={['html', 'css', 'js', 'express', 'heroku']} subTitle="Express.js, ws.js, CSS, Heroku" liveLink="http://damp-basin-13711.herokuapp.com/" gitLink="https://github.com/dkhole/open-chat" info="An Open-chatroom that requires a username and colour to join. Implemented using ws.js, has a slow start-up due to Heroku's free tier."/>
          <Project screenshot={weather} title="Gif Weather App" icons={['html', 'css', 'js', 'react', 'not-mobile']} subTitle="React, Open Weather API" liveLink="https://dkhole.github.io/weather-gif/" gitLink="https://github.com/dkhole/weather-gif" info="A weather app that chooses a gif according to the weather. Built with react and OpenWeather API. Not currently mobile compatible."/>
          <Project screenshot={sequence} title="Sequence" icons={['html', 'css', 'js', 'react', 'not-mobile']} subTitle="React" liveLink="https://dkhole.github.io/sequence/" gitLink="https://github.com/dkhole/sequence" info="The board game Sequence remade in react. Mainly happy with the logic but want to revisit project as it was done early in my react journey. Currently only working in full screen and not on mobile devices. Thinking about implementing websockets for multiplayer"/>
        </div>
        <img id={styles.git} src={github} alt="logo"/>
        <RightCorner />
      </div>
    );
  }
}