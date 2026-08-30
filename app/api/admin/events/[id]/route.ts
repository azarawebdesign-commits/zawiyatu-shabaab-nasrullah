import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Event from "@/models/Event";

type Params = {
  params: Promise<{ id: string }>;
};

export async function GET(
  request: Request,
  { params }: Params
) {
  try {
    await connectDB();

    const { id } = await params;

    const event = await Event.findById(id);

    if (!event) {
      return NextResponse.json(
        {
          success: false,
          message: "Event not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      event,
    });
  } catch (error) {
    console.error("GET EVENT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch event",
      },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: Params
) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await request.json();

    const event = await Event.findByIdAndUpdate(
      id,
      {
        title: body.title,
        date: body.date,
        location: body.location,
        image: body.image,
        description: body.description,
        status: body.status,
        gallery: body.gallery || [],
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!event) {
      return NextResponse.json(
        {
          success: false,
          message: "Event not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Event updated successfully",
      event,
    });
  } catch (error) {
    console.error("UPDATE EVENT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update event",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: Params
) {
  try {
    await connectDB();

    const { id } = await params;

    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return NextResponse.json(
        {
          success: false,
          message: "Event not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    console.error("DELETE EVENT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete event",
      },
      { status: 500 }
    );
  }
}