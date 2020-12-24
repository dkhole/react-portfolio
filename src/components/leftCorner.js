import React from 'react';
import styles from '../styles/leftCorner.module.css';

export default function LeftCorner() {
    return (
      <div id={styles.wrapper}>
          <hr id={styles.first}></hr>
          <hr id={styles.second}></hr>
      </div>
    );
  }