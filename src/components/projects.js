import React from 'react';
import Hamburger from './hamburger';
import LeftCorner from './leftCorner';
import RightCorner from './rightCorner';
import github from '../img/github.png';
import Project from './project.js';
import styles from '../styles/projects.module.css';
import weather from '../img/weather.png'

export default function Projects(props) {

    return (
      <div id={styles.wrapper}>
        <LeftCorner />
        <Hamburger toggleNightMode={props.nightMode} darkMode={props.darkMode} />
        <div id={styles['title-wrap']}>
          <span>Projects</span>
        </div>
        <div id={styles['projects-wrap']}>
          <Project screenshot={weather} title="Gif Weather App" subTitle="React, Open Weather API" info="A weather app that chooses a gif according to the weather. Built with react and OpenWeather API"/>
          <Project screenshot={weather} title="Gif Weather App" subTitle="React, Open Weather API" info="A weather app that chooses a gif according to the weather. Built with react and OpenWeather API"/>
        </div>
        <img id={styles.git} src={github} alt="logo"/>
        <RightCorner />
      </div>
    );
}