import React from 'react';
import { createPost, deletePost } from "@/lib/actions";

const ServerAction = () => {
  return (
    <div>
      <form action={ createPost }>
        <input type="text" placeholder="Title" name="title"/>
        <input type="text" placeholder="Description" name="description"/>
        <input type="text" placeholder="Slug" name="slug"/>
        <input type="text" placeholder="UserId" name="userId"/>
        <button>Create Post</button>
      </form>
      <form action={deletePost}>
        <input type="text" placeholder="Post ID" name="id"/>
        <button>Delete Post</button>
      </form>
    </div>
  );
};

export default ServerAction;