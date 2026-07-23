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


    const member = await Member.findOne({

      membershipId: id,

      status: "Active",

    }).select(
      "fullName membershipId membershipType status photo dateJoined"
    );



    if (!member) {

      return NextResponse.json(

        {
          success:false,
          message:"Invalid membership ID",
        },

        {
          status:404,
        }

      );

    }



    return NextResponse.json({

      success:true,

      member,

    });



  } catch(error) {


    console.error("Verification error:", error);



    return NextResponse.json(

      {
        success:false,
        message:"Internal server error",
      },

      {
        status:500,
      }

    );


  }

}