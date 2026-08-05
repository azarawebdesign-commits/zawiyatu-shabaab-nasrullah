"use client";

import { useEffect, useState } from "react";
import AdminMembersTable from "@/components/AdminMembersTable";
import MemberExportButtons from "@/components/MemberExportButtons";


export default function MembersPage() {


  const [members, setMembers] = useState<any[]>([]);



  useEffect(() => {


    fetch("/api/members")

      .then((res) => res.json())

      .then((data) => {

        setMembers(data.members || []);

      });


  }, []);





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


            <>


              <MemberExportButtons members={members} />


              <AdminMembersTable members={members} />


            </>


          )}



        </div>



      </div>


    </main>

  );

}