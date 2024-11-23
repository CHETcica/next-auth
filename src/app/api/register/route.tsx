import { NextResponse } from "next/server";
import User from "../../../../modals/user";
import bcrypt from "bcryptjs";
import { connectMongoDB } from "../../../../lib/mongodb";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectMongoDB();
    await User.create({name, email, password: hashedPassword, });

    console.log(name, email, password)

    return NextResponse.json({message: "User registered."}, { status: 201 })
    
  } catch (error) {
    return new NextResponse("Error occurred while registering", { status: 500 });
  }
}
