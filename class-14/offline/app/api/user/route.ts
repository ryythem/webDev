import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function GET() {
  const user = await client.user.findFirst();
  return NextResponse.json({
    email: user?.email,
    name: "rythem",
  });
}

export async function POST(req: NextRequest) {
  //   //body
  const body = await req.json();
  try {
    await client.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    return NextResponse.json({
      body,
    });
  } catch (e) {
    return NextResponse.json(
      {
        message: "Error while signing up",
      },
      {
        status: 411,
      }
    );
  }

  //   //header
  //   console.log(req.headers.get("authorization"));

  //   //query parameters
  //   console.log(req.nextUrl.searchParams.get("name"));
}
