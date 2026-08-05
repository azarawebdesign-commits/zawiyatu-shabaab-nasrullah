"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";


export default function DonationsPage() {


  const [donations, setDonations] = useState<any[]>([]);



  async function fetchDonations() {


    const res = await fetch("/api/donations");


    const data = await res.json();



    if (data.success) {

      setDonations(data.donations);

    }


  }





  useEffect(() => {

    fetchDonations();

  }, []);







  async function approveDonation(id:string){

  const res = await fetch(
    `/api/donations/${id}`,
    {
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        paymentStatus:"Paid",
      }),
    }
  );


  const data = await res.json();


  console.log("PATCH RESPONSE:", data);


  if(data.success){

    toast.success("Donation approved");

    fetchDonations();

  }

}







  const total = donations

    .filter(

      (item) => item.paymentStatus === "Paid"

    )

    .reduce(

      (sum, item) =>

        sum + Number(item.amount),

      0

    );







  return (

    <main className="min-h-screen bg-gray-50 p-8">


      <div className="max-w-7xl mx-auto">



        <h1 className="text-4xl font-bold text-green-800 mb-8">

          Donations Management

        </h1>






        <div className="bg-green-800 text-white rounded-3xl p-6 mb-8">


          <p className="text-lg">

            Confirmed Donations

          </p>


          <h2 className="text-4xl font-bold">

            ₵ {total}

          </h2>


        </div>







        <div className="bg-white rounded-3xl shadow p-6">


          <h2 className="text-2xl font-bold mb-5">

            Donation Records

          </h2>






          <div className="overflow-x-auto">


          <table className="w-full">


            <thead>


              <tr className="bg-green-800 text-white">


                <th className="p-3 text-left">
                  Donor
                </th>


                <th className="p-3 text-left">
                  Amount
                </th>


                <th className="p-3 text-left">
                  Purpose
                </th>


                <th className="p-3 text-left">
                  Status
                </th>


                <th className="p-3 text-left">
                  Action
                </th>


              </tr>


            </thead>







            <tbody>


            {donations.map((donation)=>(



              <tr

                key={donation._id}

                className="border-b"

              >



                <td className="p-3">

                  {donation.donorName}

                </td>





                <td className="p-3 font-bold">

                  ₵ {donation.amount}

                </td>






                <td className="p-3">

                  {donation.purpose}

                </td>






                <td className="p-3">


                  <span

                    className={

                      (donation.paymentStatus || "Pending")

                      === "Paid"

                      ?

                      "text-green-700 font-bold"

                      :

                      "text-yellow-600 font-bold"

                    }

                  >


                    {donation.paymentStatus || "Pending"}


                  </span>



                </td>









                <td className="p-3">



                {(donation.paymentStatus || "Pending") === "Pending" && (



                  <button


                    onClick={() =>

                      approveDonation(donation._id)

                    }


                    className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"


                  >

                    Confirm Payment


                  </button>



                )}



                </td>






              </tr>



            ))}



            </tbody>



          </table>


          </div>




        </div>



      </div>


    </main>

  );


}