import { db } from "@/app/lib/db";
import bcrypt from "bcrypt";
import supabase from "@/app/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { id, fullName, email, password, role } = await req.json();

    // Check if the user already exists

    const existingUserById = await db.user.findUnique({
      where: { id: Number(id) },
    });

    if (existingUserById) {
      return NextResponse.json(
        { message: `User with id ${id} already exists` },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.user.create({
      data: { id: parseInt(id), fullName, email, password: hashedPassword, role },
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
