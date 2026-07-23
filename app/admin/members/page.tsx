"use client";

import { useEffect, useState } from "react";


export default function MembersPage() {


  const [members, setMembers] = useState<any[]>([]);



  useEffect(() => {


    fetch("/api/members")

      .then((res) => res.json())

      .then((data) => {

        setMembers(data.members || []);

      });


  }, []);




  const updateStatus = async (
    id: string,
    status: string
  ) => {


    const updateData = {
      status,
    };



    await fetch(`/api/members/${id}`, {

      method: "PATCH",

      headers: {

        "Content-Type": "application/json",

      },

      body: JSON.stringify(updateData),

    });




    setMembers((prev) =>

      prev.map((member) =>

        member._id === id

          ? {

              ...member,

              ...updateData,

            }

          : member

      )

    );


  };




  return (

    <main className="min-h-screen bg-gray-50 p-8">


      <div className="max-w-7xl mx-auto">


        <h1 className="text-4xl font-bold text-green-800 mb-8">
          Members Management
        </h1>



        <div className="bg-white rounded-3xl shadow p-6">


          {members.length === 0 ? (


            <p className="text-gray-500">
              No member applications found.
            </p>


          ) : (


            <div className="space-y-4">


              {members.map((member) => (


                <div

                  key={member._id}

                  className="border rounded-xl p-5"

                >


                  <h2 className="font-bold text-xl text-green-800">
                    {member.fullName}
                  </h2>



                  <p>
                    Phone: {member.phone}
                  </p>



                  <p>
                    Membership: {member.membershipType}
                  </p>



                  <p>
                    Status:{" "}

                    <span className="font-semibold">

                      {member.status}

                    </span>

                  </p>



                  {member.membershipId && (

                    <p className="font-semibold text-green-700">

                      Membership ID: {member.membershipId}

                    </p>

                  )}




                  <div className="flex gap-3 mt-5">


                    <a

                      href={`/admin/members/${member._id}`}

                      className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"

                    >

                      View Profile

                    </a>



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