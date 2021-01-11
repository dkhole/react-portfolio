import React, { useState } from 'react';
import styles from '../styles/project.module.css'
import git from '../img/github.png'
import { ReactComponent as Live} from '../img/livePreview.svg'
import { ReactComponent as Html} from '../img/html-5.svg';
import { ReactComponent as Css} from '../img/css.svg';
import { ReactComponent as Javascript} from '../img/javascript.svg';
import { ReactComponent as ReactIcon} from '../img/react.svg';
import { ReactComponent as Gatsby} from '../img/gatsby.svg';
import { ReactComponent as Heroku} from '../img/heroku.svg';
import { ReactComponent as Netlify} from '../img/netlify.svg';
import { ReactComponent as Express} from '../img/expressjs.svg';
import { ReactComponent as Mobile} from '../img/mobile.svg';

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
    const [xTilt, setXTilt] = useState(0);
    const [yTilt, setYTilt] = useState(0);
    const [trans, setTrans] = useState('none');
    const [transZ, setTransZ] = useState(0);
    
    let icons = props.icons.map(
        icon => {
            switch(icon) {
                case 'html':
                    return <Html />
                case 'css':
                    return <Css />
                case 'js':
                    return <Javascript />
                case 'react':
                    return <ReactIcon />
                case 'gatsby':
                    return <Gatsby />
                case 'express':
                    return <Express />
                case 'netlify':
                    return <Netlify />
                case 'heroku':
                    return <Heroku />
                case 'not-mobile':
                    return <Mobile />
                default:
                    // eslint-disable-next-line
                    return;
            }    
        }
    )

    function animateTilt(e) {

        //calculate mouse pos relative to container

        const relX = e.pageX - e.currentTarget.getBoundingClientRect().x;
        const relY = e.screenY - e.currentTarget.getBoundingClientRect().y;

       
        console.log(e, e.currentTarget.getBoundingClientRect());

        let xAxis = e.currentTarget.getBoundingClientRect().width / 2 - relX;
        let yAxis = e.currentTarget.getBoundingClientRect().height / 2 - relY;

        setXTilt(xAxis / 30);
        setYTilt(yAxis / 30);
    }

    function remTransition() {
        setTrans('none');
        setTransZ('75px');
    }

    function animateTiltBack() {
        setXTilt(0);
        setYTilt(0);
        setTrans('all 0.5s ease');
        setTransZ('0');
    }

    return (
      <div id={styles.tilt} onMouseMove={animateTilt} onMouseEnter={remTransition} onMouseLeave={animateTiltBack}>
        <div id={styles.wrapper} style={{transform: `rotateY(${xTilt}deg) rotateX(${yTilt}deg)`, transition: trans}}>
            <div id={styles['screenshot-wrap']} style={{transform: `translateZ(${transZ})`}}>
                <img id={styles.screenshot} src={props.screenshot} alt="weather gif"></img>
                <div id={styles.previews}>
                    <CodeButton gitLink={props.gitLink}/>
                    <LiveButton liveLink={props.liveLink}/>
                </div>
            </div>
            <div id={styles['text-wrap']} style={{transform: `translateZ(${transZ})`}}>
                <span id={styles.title}>{props.title}</span>
                <div id={styles['sub-title']}>{icons}</div>
                <span id={styles['info']}>{props.info}</span>
            </div>
        </div>
      </div>
    );
}