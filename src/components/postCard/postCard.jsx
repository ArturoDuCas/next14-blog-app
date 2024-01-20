import React from 'react';
import Image from 'next/image';

import styles from './postCard.module.css';
import Link from "next/link";



const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/13798633/pexels-photo-13798633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="post image" fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>

      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda aut, consequatur eaque enim et eveniet expedita harum hic illo laudantium molestiae non provident quaerat qui rerum similique voluptas voluptate!</p>
        <Link className={styles.link} href="/blog/post">READ MORE</Link>
      </div>

    </div>
  );
};

export default PostCard;