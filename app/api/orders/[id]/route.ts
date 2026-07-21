import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";


// Get Single Order by Order Number
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    const order = await Order.findOne({
      orderNumber: id,
    });

    if (!order) {
      return NextResponse.json(
        {
          success: false,
          message: "Order not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      order,
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch order",
        error,
      },
      {
        status: 500,
      }
    );
  }
}


// Update Order Status
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await request.json();

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      {
        status: body.status,
      },
      {
        new: true,
      }
    );

    return NextResponse.json({
      success: true,
      order: updatedOrder,
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update order",
        error,
      },
      {
        status: 500,
      }
    );
  }
}