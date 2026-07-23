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



    const year = new Date().getFullYear();


    const randomNumber = Math.floor(
      1000 + Math.random() * 9000
    );


    const membershipId =
      `ZSN-${year}-${randomNumber}`;



    member.status = "Active";

    member.membershipId = membershipId;


    await member.save();



    return NextResponse.json({

      success: true,

      message: "Member approved successfully",

      membershipId,

    });



  } catch(error) {


    console.error(error);


    return NextResponse.json(

      {
        success:false,
        message:"Approval failed",
      },

      {
        status:500,
      }

    );


  }

}