import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Member from "@/models/Member";


export async function GET() {

  try {

    await connectDB();


    const members = await Member.find({

      status: "Active",

    })
    .sort({

      createdAt: -1,

    });



    return NextResponse.json({

      success: true,

      members,

    });



  } catch(error) {


    console.error(error);



    return NextResponse.json(

      {

        success: false,

        message: "Failed to fetch members",

      },

      {

        status: 500,

      }

    );


  }

}