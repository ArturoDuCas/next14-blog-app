import React from 'react';
import styles from './postUser.module.css';
import {getUser} from "@/lib/data";
import Image from "next/image";

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);


  return (
    <>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : '/noavatar.png'}
        alt="author image"
        height={30} width={30}
      />
      <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </>
  );
};

export default PostUser;