import {connectToDatabase} from "@/lib/utils";
import {Post} from "@/lib/models";
import {NextResponse} from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    await connectToDatabase();
    const post = await Post.findOne({slug});

    return NextResponse.json(post);
  } catch(err) {
    console.log(err);
    throw new Error("Error getting blog post");
  }
}

export const DELETE = async (req, { params }) => {
  const { slug } = params;
  try {
    await connectToDatabase();
    await Post.deleteOne({slug});

    return NextResponse.json("Post deleted");
  } catch(err) {
    console.log(err);
    throw new Error("Error deleting blog post");
  }
}