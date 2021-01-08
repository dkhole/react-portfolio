import React from 'react';
import Hamburger from './hamburger';
import LeftCorner from './leftCorner';
import RightCorner from './rightCorner';
import github from '../img/github.png';
import Project from './project.js';
import styles from '../styles/projects.module.css';
import weather from '../img/weather.png'
import calculator from '../img/calculator.png'
import openChat from '../img/openchat.png'
import sequence from '../img/sequence.png'
import physio from '../img/physio.png'
import todo from '../img/todo.png'


export default function Projects(props) {
    return (
      <div id={styles.wrapper}>
        <LeftCorner />
        <Hamburger toggleNightMode={props.nightMode} darkMode={props.darkMode} />
        <div id={styles['title-wrap']}>
          <span>Projects</span>
        </div>
        <div id={styles['projects-wrap']}>
          <Project screenshot={weather} title="Gif Weather App" icons={['html', 'css' ,'react']} subTitle="React, Open Weather API" liveLink="https://dkhole.github.io/weather-gif/" gitLink="https://github.com/dkhole/weather-gif" info="A weather app that chooses a gif according to the weather. Built with react and OpenWeather API"/>
          <Project screenshot={calculator} title="Google-Themed Calculator" icons={['html', 'css' ,'js']} subTitle="HTML, CSS, JS" liveLink="https://dkhole.github.io/calculator/" gitLink="https://github.com/dkhole/calculator" info="An old-fashioned calculator themed to fit google's style. One of my first projects to test my CSS."/>
          <Project screenshot={openChat} title="Open Chatroom" icons={['html', 'css', 'express', 'heroku']} subTitle="Express.js, ws.js, CSS, Heroku" liveLink="http://damp-basin-13711.herokuapp.com/" gitLink="https://github.com/dkhole/open-chat" info="An Open-chatroom that only requires a username and colour to join."/>
          <Project screenshot={sequence} title="Sequence" icons={['html', 'css', 'react']} subTitle="React" liveLink="https://dkhole.github.io/sequence/" gitLink="https://github.com/dkhole/sequence" info="The board game Sequence remade in react. Did quite early in my react journey, really want to redo but haven't prioritised it yet. Currently only working in full screen and not on mobile devices."/>
          <Project screenshot={physio} title="Physiotherapy Business Site" icons={['html', 'css', 'gatsby', 'netlify']} subTitle="Gatsby.js, CSS, Netlify" liveLink="https://unruffled-golick-4f53d4.netlify.app/" gitLink="https://github.com/dkhole/gatsby-movement-mechanics" info="First freelance project, still a WIP as we need more assets and content but the bone structure is working. First proper project with Gatsby.JS and static site generation."/>
          <Project screenshot={todo} title="Todo List" icons={['html', 'css', 'js']} subTitle="Webpack, JS, CSS" liveLink="https://dkhole.github.io/todo/" gitLink="https://github.com/dkhole/todo" info="This project really helped me see the benefits of react, with all the different event listeners the JS code got a little messy. Planning on revisiting with react and using the same dot design. Not mobile compatible."/>
        </div>
        <img id={styles.git} src={github} alt="logo"/>
        <RightCorner />
      </div>
    );
}