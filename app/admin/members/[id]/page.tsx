"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";


export default function MemberProfilePage() {


  const params = useParams();

  const id = params.id as string;



  const [member, setMember] = useState<any>(null);

  const [error, setError] = useState("");





  useEffect(() => {


    async function fetchMember() {


      try {


        const response = await fetch(
          `/api/members/${id}`
        );



        const data = await response.json();



        if(data.success){

          setMember(data.member);

        } else {

          setError("Member not found");

        }



      } catch(error){


        console.error(error);


        setError(
          "Failed to load member profile"
        );


      }


    }





    if(id){

      fetchMember();

    }



  }, [id]);







  if(!member){


    return (

      <main className="min-h-screen bg-gray-50 p-8">


        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow p-8">


          <p className="text-gray-600">

            {error || "Loading member profile..."}

          </p>


        </div>


      </main>

    );


  }







  return (

    <main className="min-h-screen bg-gray-50 p-8">


      <div className="max-w-3xl mx-auto">



        <div className="bg-white rounded-3xl shadow-lg p-8">





          <div className="text-center mb-8">



            {member.photo && (

              <img

                src={member.photo}

                alt={member.fullName}

                className="w-40 h-40 rounded-full object-cover border-4 border-green-700 mx-auto mb-5"

              />

            )}




            <h1 className="text-3xl font-bold text-green-800">

              {member.fullName}

            </h1>



            {member.membershipId && (

              <p className="text-green-700 font-bold mt-2">

                {member.membershipId}

              </p>

            )}



          </div>







          <div className="space-y-4 text-gray-700">



            <p>

              <strong>Name:</strong> {member.fullName}

            </p>



            <p>

              <strong>Phone:</strong> {member.phone}

            </p>



            <p>

              <strong>WhatsApp:</strong> {member.whatsapp}

            </p>



            <p>

              <strong>Email:</strong> {member.email}

            </p>



            <p>

              <strong>Gender:</strong> {member.gender}

            </p>



            <p>

              <strong>Date of Birth:</strong> {member.dateOfBirth}

            </p>



            <p>

              <strong>Address:</strong> {member.address}

            </p>



            <p>

              <strong>Occupation:</strong> {member.occupation}

            </p>



            <p>

              <strong>Date Joined:</strong> {member.dateJoined}

            </p>



            <p>

              <strong>Membership Type:</strong> {member.membershipType}

            </p>




            <p>

              <strong>Status:</strong>{" "}

              <span className="font-semibold">

                {member.status}

              </span>

            </p>




            {member.membershipId && (

              <p className="bg-green-50 p-4 rounded-xl text-green-800 font-bold">

                Membership ID: {member.membershipId}

              </p>

            )}





          </div>







          <hr className="my-8" />







          <div>


            <h2 className="text-xl font-bold text-green-800 mb-4">

              Emergency Contact

            </h2>




            <div className="space-y-3 text-gray-700">


              <p>

                <strong>Name:</strong> {member.emergencyName}

              </p>



              <p>

                <strong>Relationship:</strong>{" "}

                {member.emergencyRelationship}

              </p>



              <p>

                <strong>Phone:</strong> {member.emergencyPhone}

              </p>



            </div>

            <div className="mt-8 text-center">

  <a

    href={`/admin/members/${id}/card`}

    className="inline-block bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800"

  >

    Generate Membership Card

  </a>

</div>



          </div>





        </div>


      </div>


    </main>

  );


}