import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: NextResponse) {
  try {
    const body = await req.json();
    const { email, name } = body;

    //   Check if email exists
    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message: "User with this email already exists",
        },
        { status: 409 },
      );
    }

    const newUser = await db.user.create({
      data: {
        name,
        email,
      },
    });

    return NextResponse.json({
      user: newUser,
      message: "User created successfully",
      status: 201,
    });
    //   Implement further checking, not just email
  } catch (err) {}
}
