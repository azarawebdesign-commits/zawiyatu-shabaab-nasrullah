import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Donation from "@/models/Donation";

export async function POST(request: Request) {
  try {
    await connectDB();

    const { reference } = await request.json();

    if (!reference) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment reference is required",
        },
        {
          status: 400,
        }
      );
    }

    const paystackResponse = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(
        reference
      )}`,
      {
        method: "GET",

        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const paystackData = await paystackResponse.json();

    if (
      !paystackResponse.ok ||
      !paystackData.status ||
      paystackData.data?.status !== "success"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment has not been confirmed yet.",
        },
        {
          status: 400,
        }
      );
    }

    const donation = await Donation.findOneAndUpdate(
      {
        transactionId: reference,
      },
      {
        paymentStatus: "Paid",
      },
      {
        new: true,
      }
    );

    if (!donation) {
      return NextResponse.json(
        {
          success: false,
          message: "Donation record not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Donation payment verified successfully.",
    });
  } catch (error) {
    console.error("Donation verification error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Donation payment verification failed.",
      },
      {
        status: 500,
      }
    );
  }
}