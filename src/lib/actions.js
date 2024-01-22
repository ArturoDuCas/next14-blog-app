"use server";

import {connectToDatabase} from "@/lib/utils";
import {Post} from "@/lib/models";
import {revalidatePath} from "next/cache";

export const createPost = async (formData) => {
  const { title, description, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDatabase();
    const newPost = new Post({
      title,
      description,
      slug,
      userId,
    });

    await newPost.save();
    revalidatePath("/blog");
    console.log("=> post saved");
  } catch(error) {
    console.error(error);
    throw new Error("Error connecting to database");
  }

}

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDatabase();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    console.log("=> post deleted");
  } catch(error) {
    console.error(error);
    throw new Error("Error connecting to database");
  }
};