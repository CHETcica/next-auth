import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../modals/user";

export async function POST(req: Request) {
    try {
      await connectMongoDB();
      const { email } = await req.json();
      const user = await User.findOne({ email }).select("_id")
      console.log("User:", user)
    } catch (error) {
        console.log(error)
    }
  }