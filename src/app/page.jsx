import styles from './home.module.css';
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Welcome to my Blog App.</h1>
        <p className={styles.description}>Lorem ipsum dolowr sit amet, consectetur adipiscing elit. Donec placerat fringilla metus eget malesuada. Proin dictum risus ut ex tempus pulvinar. Vestibulum vehicula ex a lectus vestibulum dapibus.</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Get Started</button>
        </div>
        <div className={styles.socialContainer}>
          <Image src="/brands.png" alt="Image of brands" fill className={styles.brands}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="Image of home" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;