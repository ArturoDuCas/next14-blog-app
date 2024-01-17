import React from 'react';
import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          // src="/about.png"
          src="https://images.pexels.com/photos/14983436/pexels-photo-14983436/free-photo-of-italia-catedral-iconico-florencia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="about image"
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;