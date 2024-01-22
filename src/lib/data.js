import {Post, User} from "@/lib/models";
import {connectToDatabase} from "@/lib/utils";
import { unstable_noStore } from "next/cache";

export const getPosts = async() => {
  try{
    connectToDatabase();
    return await Post.find();
  }catch(err) {
    console.log(err);
    throw new Error("Failed to fetch posts");
  }
}

export const getPost = async(slug) => {
  try{
    connectToDatabase();
    return await Post.findOne({slug});
  }catch(err) {
    console.log(err);
    throw new Error("Failed to fetch post");
  }
}

export const getUsers = async() => {
  try{
    connectToDatabase();
    return await User.find();
  }catch(err) {
    console.log(err);
    throw new Error("Failed to fetch users");
  }
}

export const getUser = async(id) => {
  unstable_noStore(); // It's unstable, so it may change in the future
  try{
    connectToDatabase();
    return await User.findById(id);
  }catch(err) {
    console.log(err);
    throw new Error("Failed to fetch user");
  }
}