"use server";

import {connectToDatabase} from "@/lib/utils";
import {Post, User} from "@/lib/models";
import {revalidatePath} from "next/cache";
import {signIn, signOut} from "@/lib/auth";
import bcrypt from "bcryptjs";

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


export const handleGithubLogin = async () => {
  await signIn("github");
}

export const handleLogout = async () => {
  await signOut();
}

export const register = async (prevState, formData) => {
  const { username, email, img, password, passwordRepeat } = Object.fromEntries(formData);

  if(password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    await connectToDatabase();

    // check if user exists
    const user = await User.findOne({username});
    if(user) {
      return { error: "User already exists" };
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img
    });

    await newUser.save();
    console.log("=> user saved");
    return { success: true }
  } catch(err) {
    console.error(err);
    return { error: "Error during the registration" };
  }
}

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch(err) {
    console.log(err.type);

    if(err.type === "CredentialsSignin") {
      return { error: "Invalid credentials" };
    }

    throw err;
  }
}