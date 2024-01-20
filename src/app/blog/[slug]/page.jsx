import React from 'react';
import styles from './postPage.module.css';
import Image from "next/image";

const PostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src='https://images.pexels.com/photos/13798633/pexels-photo-13798633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="post image" fill/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.details}>
          <Image className={styles.avatar} src='/noavatar.png' alt="author image" height={30} width={30}/>
          <div className={styles.detailsText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>John Doe</span>
          </div>
          <div className={styles.detailsText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores commodi cumque dolorem ea nihil placeat praesentium recusandae soluta voluptas! Amet commodi explicabo fuga ipsa iusto modi necessitatibus tempore voluptas?
        </div>


      </div>
    </div>
  );
};

export default PostPage;