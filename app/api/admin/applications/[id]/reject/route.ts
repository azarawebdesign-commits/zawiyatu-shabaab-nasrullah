import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Member from "@/models/Member";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await request.json();

    const reason =
      typeof body.reason === "string"
        ? body.reason.trim()
        : "";

    if (!reason) {
      return NextResponse.json(
        {
          success: false,
          message: "Rejection reason is required",
        },
        {
          status: 400,
        }
      );
    }

    const member = await Member.findById(id);

    if (!member) {
      return NextResponse.json(
        {
          success: false,
          message: "Member not found",
        },
        {
          status: 404,
        }
      );
    }

    if (member.status !== "Pending") {
      return NextResponse.json(
        {
          success: false,
          message:
            "This application has already been processed",
        },
        {
          status: 400,
        }
      );
    }

    member.status = "Rejected";

    member.executiveNotes = reason;

    await member.save();

    return NextResponse.json({
      success: true,
      message: "Application rejected successfully",
    });

  } catch (error) {
    console.error(
      "Application rejection error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Rejection failed",
      },
      {
        status: 500,
      }
    );
  }
}