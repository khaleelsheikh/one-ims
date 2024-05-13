import { db } from "@/app/lib/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { id, fullName, password, role } = body;

    // Check if the user already exists

    const existingUserById = await db.user.findUnique({
      where: { id: id },
    });

    if (existingUserById) {
      return new NextResponse.json(
        { user: null, message: `User with id ${id} already exists` },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.user.create({
      data: { id, fullName, password: hashedPassword, role },
    });
    return NextResponse.json(
      {
        newUser,
        message: `New user created successfully with user id ${id}`,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error in creating user" });
  }
}

// export async function GET() {
//   return NextResponse.json({ message: "YES" });
// }
