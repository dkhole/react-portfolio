import React from 'react';
import styles from '../styles/project.module.css'
import git from '../img/github.png'
import { ReactComponent as Live} from '../img/livePreview.svg'

function CodeButton(props) {
    return (
        <div id={styles['code-wrap']}>
            {/* eslint-disable-next-line*/}
            <a id={styles.code} type="button" href={props.gitLink}><img src={git} alt="github logo for link"></img></a>
            
        </div>
    )
}

function LiveButton(props) {
    return (
        <div id={styles['live-wrap']}>
            
            {/* eslint-disable-next-line*/}
            <a id={styles.live} type="button" href={props.liveLink}><Live /></a>
        </div>
    )
}

export default function Project(props) {

    return (
      <div id={styles.wrapper}>
        <div id={styles['screenshot-wrap']} >
            <img id={styles.screenshot} src={props.screenshot} alt="weather gif"></img>
            <div id={styles.previews}>
                <CodeButton gitLink={props.gitLink}/>
                <LiveButton liveLink={props.liveLink}/>
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