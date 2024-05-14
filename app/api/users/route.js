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
      return NextResponse.json(
        { user: null, message: `User with id ${id} already exists` },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.user.create({
      data: { id, fullName, password: hashedPassword, role },
    });

    const { password: newPassword, ...rest } = newUser;

    return NextResponse.json(
      {
        user: rest,
        message: `New user ${fullName} was created successfully with user id ${id} as ${role}`,
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
