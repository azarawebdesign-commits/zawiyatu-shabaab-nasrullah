"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";


export default function AdminMembersTable({
  members,
}: {
  members: any[];
}) {


  const [memberList, setMemberList] = useState(members);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");





  async function updateStatus(
    id: string,
    status: string
  ) {


    try {


      const response = await fetch(
        `/api/members/${id}`,
        {

          method: "PATCH",

          headers: {

            "Content-Type": "application/json",

          },

          body: JSON.stringify({

            status,

          }),

        }
      );



      if(response.ok){


        setMemberList((prev:any[]) =>

          prev.map((member)=>


            member._id === id

            ? {

                ...member,

                status,

              }

            : member


          )

        );



        toast.success(
          `Member ${status}`
        );


      }



    } catch(error){


      toast.error(
        "Failed to update member"
      );


    }


  }







  const filteredMembers = memberList.filter(
    (member)=>{


      const matchesSearch =

      member.fullName
        ?.toLowerCase()
        .includes(search.toLowerCase())

      ||

      member.phone
        ?.toLowerCase()
        .includes(search.toLowerCase())

      ||

      member.membershipId
        ?.toLowerCase()
        .includes(search.toLowerCase());




      const matchesFilter =

      filter === "All"

      ||

      member.status === filter;



      return matchesSearch && matchesFilter;


    }
  );








  return (

    <div>



      <div className="flex flex-col md:flex-row gap-4 mb-8">


        <input

          type="text"

          placeholder="Search members..."

          value={search}

          onChange={(e)=>setSearch(e.target.value)}

          className="flex-1 border rounded-xl px-4 py-3"

        />



        <select

          value={filter}

          onChange={(e)=>setFilter(e.target.value)}

          className="border rounded-xl px-4 py-3"

        >

          <option value="All">
            All
          </option>

          <option value="Approved">
            Approved
          </option>

          <option value="Pending">
            Pending
          </option>

          <option value="Rejected">
            Rejected
          </option>


        </select>


      </div>






      <div className="overflow-x-auto">


        <table className="w-full">


          <thead>

            <tr className="bg-green-800 text-white">


              <th className="p-3 text-left">
                Name
              </th>


              <th className="p-3 text-left">
                ID
              </th>


              <th className="p-3 text-left">
                Type
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


          {filteredMembers.map((member)=>(


            <tr
              key={member._id}
              className="border-b"
            >


              <td className="p-3">
                {member.fullName}
              </td>




              <td className="p-3 font-semibold text-green-800">

                {member.membershipId || "-"}

              </td>




              <td className="p-3">

                {member.membershipType}

              </td>




              <td className="p-3">

                {member.status}

              </td>





              <td className="p-3">


                <div className="flex flex-wrap gap-2">



                  <Link

                    href={`/admin/members/${member._id}`}

                    className="bg-blue-600 text-white px-3 py-2 rounded-lg"

                  >

                    View

                  </Link>





                  {member.status !== "Approved" && (

                    <button

                      onClick={() =>
                        updateStatus(
                          member._id,
                          "Approved"
                        )
                      }

                      className="bg-green-700 text-white px-3 py-2 rounded-lg"

                    >

                      Approve

                    </button>

                  )}






                  {member.status !== "Rejected" && (

                    <button

                      onClick={() =>
                        updateStatus(
                          member._id,
                          "Rejected"
                        )
                      }

                      className="bg-red-600 text-white px-3 py-2 rounded-lg"

                    >

                      Reject

                    </button>

                  )}



                </div>


              </td>



            </tr>


          ))}



          </tbody>


        </table>


      </div>



    </div>

  );

}