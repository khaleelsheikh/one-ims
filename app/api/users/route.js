import { db } from "@/app/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { userId, name, password, role } = body;

    //check if the user already exists

    const existingUserById = await db.user.findUnique({
      where: { userId: userId },
    });

    if (existingUserById) {
      return new NextResponse.json(
        { user: null, message: `User with ${userId} already exists` },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: { userId, name, password: hashedPassword, role },
    });
    return NextResponse.json(
      {
        newUser,
        message: `New user created successfully with user id ${userId}`,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error in creating user" });
  }
}
