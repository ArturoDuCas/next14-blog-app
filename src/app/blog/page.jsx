import React from 'react';
import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

// import { getPosts} from "@/lib/data";

const getData = async() => {
  const res = await fetch("http://localhost:3000/api/blog");
  if(!res.ok) throw new Error(res.statusText);

  return await res.json();
}

const BlogPage = async () => {
  // const posts = await getPosts();
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post}/>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;