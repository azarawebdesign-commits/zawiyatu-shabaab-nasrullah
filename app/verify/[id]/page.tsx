"use client";


import { useEffect, useState } from "react";
import { useParams } from "next/navigation";


export default function VerifyMemberPage() {


  const params = useParams();

  const id = params.id as string;


  const [member, setMember] = useState<any>(null);

  const [loading, setLoading] = useState(true);



  useEffect(() => {


    async function verifyMember() {


      try {


        const response = await fetch(
          `/api/verify/${id}`
        );


        const data = await response.json();



        if(data.success){

          setMember(data.member);

        }


      } catch(error){


        console.error(error);


      } finally {


        setLoading(false);


      }


    }



    if(id){

      verifyMember();

    }



  },[id]);





  if(loading){


    return (

      <main className="min-h-screen flex items-center justify-center">

        <p>
          Verifying membership...
        </p>

      </main>

    );


  }







  if(!member){


    return (

      <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">


        <div className="bg-white rounded-3xl shadow p-8 text-center">


          <h1 className="text-3xl font-bold text-red-600">

            Invalid Membership

          </h1>


          <p className="mt-3 text-gray-600">

            This membership ID could not be verified.

          </p>


        </div>


      </main>

    );


  }







  return (

    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">


      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center">


        <div className="bg-green-800 text-white rounded-2xl p-5">


          <h1 className="text-xl font-bold">

            Zawiyatu Shabaab Nasrullah

          </h1>


          <p>

            Membership Verification

          </p>


        </div>





        {member.photo && (

          <img

            src={member.photo}

            alt={member.fullName}

            className="w-32 h-32 rounded-full object-cover border-4 border-green-700 mx-auto mt-6"

          />

        )}






        <h2 className="text-2xl font-bold text-green-800 mt-5">

          {member.fullName}

        </h2>



        <p className="mt-2">

          Membership ID:

        </p>


        <p className="font-bold text-green-700">

          {member.membershipId}

        </p>





        <div className="mt-6 space-y-2 text-left">


          <p>

            <strong>Type:</strong>{" "}

            {member.membershipType}

          </p>



          <p>

            <strong>Date Joined:</strong>{" "}

            {member.dateJoined}

          </p>



          <p>

            <strong>Status:</strong>{" "}

            <span className="text-green-700 font-bold">

              {member.status}

            </span>

          </p>



        </div>




        <div className="mt-8 bg-green-50 rounded-xl p-4">

          ✅ Verified Member

        </div>



      </div>


    </main>

  );


}