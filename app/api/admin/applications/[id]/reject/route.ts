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



    member.status = "Rejected";


    await member.save();




    return NextResponse.json({

      success: true,

      message: "Application rejected successfully",

    });





  } catch(error) {


    console.error(error);



    return NextResponse.json(

      {
        success:false,
        message:"Rejection failed",
      },

      {
        status:500,
      }

    );


  }

}