import React from 'react';
import styles from '../styles/rightCorner.module.css';

export default function RightCorner() {
    return (
      <div id={styles.wrapper}>
          <hr id={styles.first}></hr>
          <hr id={styles.second}></hr>
      </div>
    );
  }