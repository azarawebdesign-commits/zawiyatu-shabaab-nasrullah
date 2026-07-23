import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Member from "@/models/Member";

export async function GET() {
  try {
    await connectDB();

    const applications = await Member.find({
      status: "Pending",
    }).sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      applications,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch applications",
      },
      {
        status: 500,
      }
    );
  }
}