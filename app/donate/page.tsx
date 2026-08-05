export const dynamic = "force-dynamic";

import { connectDB } from "@/lib/mongodb";
import Donation from "@/models/Donation";
import Link from "next/link";


export default async function DonationsPage() {


  await connectDB();



  const donations = await Donation.find({

    paymentStatus: "Paid",

  })

  .sort({

    createdAt: -1,

  })

  .lean();






  const total = donations.reduce(

    (sum, donation) =>

      sum + Number(donation.amount || 0),

    0

  );





  const supporters = donations.length;



  const target = 50000;



  const progress = Math.min(

    Math.round((total / target) * 100),

    100

  );






  return (

    <main className="min-h-screen bg-gray-50 py-20">


      <div className="max-w-6xl mx-auto px-6">





        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-10">


          <div>

            <h1 className="text-4xl md:text-5xl font-bold text-green-800">

              Donation Supporters

            </h1>


            <p className="text-gray-600 mt-3">

              Thank you to everyone supporting Zawiyatu Shabaab Nasrullah.

            </p>


          </div>






          <Link

            href="/donate/form"

            className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800"

          >

            Make Donation

          </Link>



        </div>









        <div className="bg-green-800 text-white rounded-3xl p-8 text-center">


          <p className="text-lg">

            Total Donations Received

          </p>


          <h2 className="text-5xl font-bold mt-3">

            ₵ {total}

          </h2>



        </div>









        <div className="grid md:grid-cols-2 gap-6 mt-8">



          <div className="bg-white rounded-3xl shadow p-6">


            <h3 className="text-gray-600">

              Total Supporters

            </h3>


            <p className="text-4xl font-bold text-green-800 mt-2">

              {supporters}

            </p>


          </div>






          <div className="bg-white rounded-3xl shadow p-6">


            <h3 className="text-gray-600">

              Fundraising Progress

            </h3>


            <p className="font-bold text-green-800 mt-2">

              ₵ {total} / ₵ {target}

            </p>




            <div className="w-full bg-gray-200 rounded-full h-4 mt-4">


              <div

                className="bg-green-700 h-4 rounded-full"

                style={{

                  width:`${progress}%`

                }}

              />


            </div>



            <p className="text-sm text-gray-500 mt-2">

              {progress}% completed

            </p>



          </div>




        </div>









        <div className="mt-10 bg-white rounded-3xl shadow p-6">


          <h2 className="text-2xl font-bold text-green-800 mb-6">

            Recent Supporters

          </h2>






          {donations.length === 0 ? (


            <p className="text-gray-500">

              No donations recorded yet.

            </p>



          ) : (


            <div className="space-y-4">



              {donations.map((donation:any)=>(


                <div

                  key={donation._id.toString()}

                  className="border rounded-xl p-5 flex justify-between items-center"

                >


                  <div>

                    <h3 className="font-bold text-lg">

                      {donation.donorName}

                    </h3>


                    <p className="text-gray-600">

                      {donation.purpose}

                    </p>


                  </div>





                  <div className="text-right">


                    <p className="font-bold text-green-800 text-xl">

                      ₵ {donation.amount}

                    </p>


                    <p className="text-sm text-gray-500">

                      {donation.date}

                    </p>


                  </div>



                </div>


              ))}



            </div>


          )}



        </div>





      </div>


    </main>

  );

}