import { NextResponse } from "next/server";


export async function POST(request: Request) {


  const { password } = await request.json();



  if (password !== process.env.ADMIN_PASSWORD) {

    return NextResponse.json({

      success: false,

      message: "Wrong password",

    });

  }



  const response = NextResponse.json({

    success: true,

    message: "Login successful",

  });



  response.cookies.set(
    "adminAuth",
    "true",
    {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    }
  );



  return response;

}