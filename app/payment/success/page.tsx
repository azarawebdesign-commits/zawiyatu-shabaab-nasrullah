"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";


export default function PaymentSuccessPage() {


  const router = useRouter();

  const searchParams = useSearchParams();


  const reference =
    searchParams.get("reference");

  const token =
    searchParams.get("token");



  const [message, setMessage] =
    useState(
      "Verifying payment, please wait while we confirm your payment..."
    );




  useEffect(() => {


    async function verifyPayment(){


      if(!reference || !token){


        setMessage(
          "Invalid payment information."
        );


        return;


      }





      try{


        const response =
          await fetch(
            "/api/payment/verify",
            {


              method:"POST",


              headers:{


                "Content-Type":
                "application/json",

              },


              body:JSON.stringify({

                reference,

                token,

              }),


            }
          );





        const data =
          await response.json();





        if(data.success){


          setMessage(
            "Payment confirmed. Redirecting to registration..."
          );



          setTimeout(()=>{


            router.push(
              `/register?token=${token}`
            );


          },2000);



        }else{


          setMessage(

            data.message ||

            "Payment verification failed."

          );


        }





      }catch(error){


        console.error(error);


        setMessage(
          "Unable to verify payment. Please try again."
        );


      }


    }





    verifyPayment();



  },[reference,token,router]);






  return (

    <main className="min-h-screen bg-gray-50 flex items-center justify-center">


      <div className="bg-white shadow-xl rounded-3xl p-10 text-center max-w-md">


        <div className="text-5xl mb-5">

          ⏳

        </div>



        <h1 className="text-2xl font-bold text-green-800 mb-4">

          Payment Verification

        </h1>




        <p className="text-gray-600">

          {message}

        </p>



      </div>


    </main>

  );

}