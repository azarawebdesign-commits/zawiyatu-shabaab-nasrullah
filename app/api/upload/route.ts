import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";


export async function POST(request: Request) {

  try {

    const formData = await request.formData();


    const file = formData.get("file") as File;


    if (!file) {

      return NextResponse.json(
        {
          message: "No file uploaded",
        },
        {
          status: 400,
        }
      );

    }


    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);



    const result = await new Promise((resolve, reject) => {


      cloudinary.uploader.upload_stream(

        {
          folder: "zawiya-products",
        },


        (error, result) => {

          if (error) reject(error);

          else resolve(result);

        }

      ).end(buffer);



    });



    return NextResponse.json(result);



  } catch (error) {


    return NextResponse.json(

      {
        message: "Upload failed",
        error,
      },

      {
        status: 500,
      }

    );


  }

}