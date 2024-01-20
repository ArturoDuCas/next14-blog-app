import React, {Suspense} from 'react';
import styles from './postPage.module.css';
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";

const getData = async(slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("HTTP error, status = " + res.status);
  }

  return res.json();
}


const PostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src='https://images.pexels.com/photos/13798633/pexels-photo-13798633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="post image" fill/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.details}>
          <Image className={styles.avatar} src='/noavatar.png' alt="author image" height={30} width={30}/>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId}/>
          </Suspense>
          <div className={styles.detailsText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>


      </div>
    </div>
  );
};

export default PostPage;