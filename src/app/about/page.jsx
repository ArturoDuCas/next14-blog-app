import React from 'react';
import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Me</h2>
        <h1 className={styles.title}>I am a third-year B.S. in Computer Science student at Tecnológico de Monterrey.</h1>
        <p className={styles.description}>Hi there! I am currently working on this project to learn Next.js. It is an exciting journey as I explore and enhance my skills in web development. Feel free to join me on this adventure!</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>3+</h1>
            <p>years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>3+</h1>
            <p>years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>3+</h1>
            <p>years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about image" fill className={styles.img}/>
      </div>

    </div>
  );
};

export default AboutPage;