import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Payment from "@/models/Payment";

export async function POST(request: Request) {
  try {
    await connectDB();

    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Access token is required",
        },
        {
          status: 400,
        }
      );
    }

    const payment = await Payment.findOne({
      accessToken: token,
      status: "success",
    });

    if (!payment) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or expired payment access",
        },
        {
          status: 401,
        }
      );
    }

    return NextResponse.json({
      success: true,
    });
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