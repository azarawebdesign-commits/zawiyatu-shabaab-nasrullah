import { NextResponse } from "next/server";


export async function POST(request: Request) {

  try {

    const { password } = await request.json();


    const adminPassword = process.env.ADMIN_PASSWORD;


    if (!adminPassword) {

      return NextResponse.json(
        {
          success: false,
          message: "Admin password not configured",
        },
        {
          status: 500,
        }
      );

    }



    if (password !== adminPassword) {

      return NextResponse.json(
        {
          success: false,
          message: "Wrong password",
        },
        {
          status: 401,
        }
      );

    }



    const response = NextResponse.json({
      success: true,
    });



    response.cookies.set(
      "admin_auth",
      "true",
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24,
        path: "/",
      }
    );


    return response;



  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message: "Login failed",
      },
      {
        status: 500,
      }
    );

  }

}