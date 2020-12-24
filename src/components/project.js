import React from 'react';
import styles from '../styles/project.module.css'
import git from '../img/github.png'
import { ReactComponent as Live} from '../img/livePreview.svg'

function CodeButton() {
    return (
        <div id={styles['code-wrap']}>
            <input id={styles.code} type="button"></input>
            <img src={git} alt="github logo for link"></img>
        </div>
    )
}

function LiveButton() {
    return (
        <div id={styles['live-wrap']}>
            <Live />
            <input id={styles.live} type="button"></input>
        </div>
    )
}

export default function Projects(props) {
    return (
      <div id={styles.wrapper}>
        <div id={styles['screenshot-wrap']}>
            <img id={styles.screenshot} src={props.screenshot} alt="weather gif"></img>
            <div id={styles.previews}>
                <CodeButton />
                <LiveButton />
            </div>
        </div>
        <div id={styles['text-wrap']}>
            <span id={styles.title}>{props.title}</span>
            <span id={styles['sub-title']}>{props.subTitle}</span>
            <span id={styles['info']}>{props.info}</span>
        </div>
      </div>
    );
}