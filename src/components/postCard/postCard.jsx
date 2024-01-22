import React from 'react';
import Image from 'next/image';

import styles from './postCard.module.css';
import Link from "next/link";
import {getGradient} from "@/utils/gradients";


const PostCard = ({ post }) => {


  return (
    <div className={styles.container}>
      <div className={styles.top}>
          <div className={styles.imgContainer}>
            {post.img ?
              <Image src={post.img} alt="post image" fill className={styles.img}/>
              :
              <div className={styles.emptyDiv}
                   style={{
                     backgroundImage: getGradient(post._id),
                   }}/>
              }
          </div>
        <span className={styles.date}>01.01.2024</span>
      </div>

      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
      </div>

    </div>
  );
};

export default PostCard;