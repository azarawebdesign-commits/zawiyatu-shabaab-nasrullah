import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Event from "@/models/Event";

export async function GET() {
  try {
    await connectDB();

    const events = await Event.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      events,
    });
  } catch (error) {
    console.error("GET EVENTS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch events",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const {
      title,
      date,
      location,
      image,
      description,
      status,
      gallery,
    } = body;

    if (
      !title ||
      !date ||
      !location ||
      !image ||
      !description
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields",
        },
        { status: 400 }
      );
    }

    const event = await Event.create({
      title,
      date,
      location,
      image,
      description,
      status: status || "Upcoming",
      gallery: gallery || [],
    });

    return NextResponse.json({
      success: true,
      message: "Event created successfully",
      event,
    });
  } catch (error) {
    console.error("CREATE EVENT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create event",
      },
      { status: 500 }
    );
  }
}