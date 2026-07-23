import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Member from "@/models/Member";


export async function GET(
  request: Request,
  context: {
    params: Promise<{ id: string }>;
  }
) {

  try {


    await connectDB();


    const { id } = await context.params;



    const member = await Member.findById(id);



    if (!member) {

      return NextResponse.json(

        {
          success:false,
          message:"Member not found",
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


    console.error(error);


    return NextResponse.json(

      {
        success:false,
        message:"Failed to fetch member",
      },

      {
        status:500,
      }

    );


  }

}


export async function PATCH(
  request: Request,
  context: {
    params: Promise<{ id: string }>;
  }
) {

  try {

    await connectDB();


    const { id } = await context.params;


    const body = await request.json();


    const updatedMember = await Member.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
      }
    );


    return NextResponse.json({

      success: true,

      member: updatedMember,

    });


  } catch(error) {


    console.error(error);


    return NextResponse.json(

      {
        success: false,
        message: "Failed to update member",
      },

      {
        status: 500,
      }

    );

  }

}