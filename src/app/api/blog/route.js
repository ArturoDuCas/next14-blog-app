import {connectToDatabase} from "@/lib/utils";
import {Post} from "@/lib/models";
import {NextResponse} from "next/server";

export const GET = async (req) => {
  try {
    await connectToDatabase();
    const posts = await Post.find();

    return NextResponse.json(posts);



  } catch(err) {
    console.log(err);
    throw new Error("Error getting blog posts");
  }
}

