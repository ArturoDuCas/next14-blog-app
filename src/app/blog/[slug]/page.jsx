import React, {Suspense} from 'react';
import styles from './postPage.module.css';
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import {getPost} from "@/lib/data";
import {getGradient} from "@/utils/gradients";

export const generateMetadata = async ({params}) => {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.description,
  }
}
const PostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {post.img ?
          <Image className={styles.img} src={post.img} alt="post image" fill/>
          :
          <div className={styles.emptyDiv}
               style={{
                 backgroundImage: getGradient(post.id),
           }}/>
        }
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.details}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId}/>
          </Suspense>
          <div className={styles.detailsText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt?.toString().slice(4,16)}</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.description}
        </div>


      </div>
    </div>
  );
};

export default PostPage;