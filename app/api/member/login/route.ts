import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Member from "@/models/Member";

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const { membershipId, phone } = body;

    if (!membershipId || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Membership ID and phone number are required",
        },
        {
          status: 400,
        }
      );
    }


    const member = await Member.findOne({
      membershipId: membershipId.trim(),
      phone: phone.trim(),
    });


    if (!member) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid Membership ID or phone number",
        },
        {
          status: 401,
        }
      );
    }


    if (member.status !== "Approved") {
      return NextResponse.json(
        {
          success: false,
          message: "Your membership has not been approved yet",
        },
        {
          status: 403,
        }
      );
    }


    const response = NextResponse.json({
      success: true,
      message: "Login successful",
      member: {
        id: member._id,
        fullName: member.fullName,
        membershipId: member.membershipId,
      },
    });


    response.cookies.set(
      "memberId",
      member._id.toString(),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      }
    );


    return response;


  } catch (error) {

    console.error(error);


    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      {
        status: 500,
      }
    );

  }
}