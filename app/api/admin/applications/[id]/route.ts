import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Member from "@/models/Member";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {

    await connectDB();

    const { id } = await params;

    const member = await Member.findById(id);

    if (!member) {

      return NextResponse.json(
        {
          success: false,
          message: "Application not found",
        },
        {
          status: 404,
        }
      );

    }

    return NextResponse.json({
      success: true,
      member,
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