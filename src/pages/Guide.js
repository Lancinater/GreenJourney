import React from 'react';
import styles from './Guide.module.css';

const Guide = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Oops!</h1>
      <p className={styles.message}>Please Check the link!</p>
      <a className={styles.homeLink} href="/">Return To Our Home!</a>
    </div>
  );
};

export default Guide;