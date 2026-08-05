import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Donation from "@/models/Donation";


export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  try {


    await connectDB();


    const { id } = await params;


    const body = await request.json();



    console.log("Donation ID:", id);

    console.log("Update Data:", body);





    const donation = await Donation.findById(id);



    if (!donation) {

      return NextResponse.json(

        {
          success: false,
          message: "Donation record not found",
        },

        {
          status: 404,
        }

      );

    }





    donation.paymentStatus = body.paymentStatus;


    await donation.save();





    console.log(
      "Updated Donation:",
      donation
    );






    return NextResponse.json(

      {

        success: true,

        donation: {

          id: donation._id.toString(),

          donorName: donation.donorName,

          amount: donation.amount,

          paymentStatus: donation.paymentStatus,

        },

      }

    );





  } catch(error) {


    console.error(
      "Donation Update Error:",
      error
    );



    return NextResponse.json(

      {

        success:false,

        message:"Failed to update donation",

      },

      {

        status:500,

      }

    );


  }

}