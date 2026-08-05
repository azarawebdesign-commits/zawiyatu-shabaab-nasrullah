import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import Member from "@/models/Member";


export default async function AdminDashboardPage() {


  await connectDB();


  const totalMembers = await Member.countDocuments();


  const approvedMembers = await Member.countDocuments({
    status: "Approved",
  });


  const pendingMembers = await Member.countDocuments({
    status: "Pending",
  });


  const rejectedMembers = await Member.countDocuments({
    status: "Rejected",
  });



  return (

    <main className="min-h-screen bg-gray-50 p-8">


      <div className="max-w-7xl mx-auto">


        <h1 className="text-4xl font-bold text-green-800 mb-8">

          Admin Dashboard

        </h1>




        <div className="grid md:grid-cols-4 gap-6">



          <div className="bg-white rounded-2xl shadow p-6">

            <p className="text-gray-600">
              Total Members
            </p>

            <h2 className="text-3xl font-bold text-green-800">

              {totalMembers}

            </h2>

          </div>





          <div className="bg-white rounded-2xl shadow p-6">

            <p className="text-gray-600">
              Approved
            </p>

            <h2 className="text-3xl font-bold text-green-800">

              {approvedMembers}

            </h2>

          </div>





          <div className="bg-white rounded-2xl shadow p-6">

            <p className="text-gray-600">
              Pending
            </p>

            <h2 className="text-3xl font-bold text-yellow-600">

              {pendingMembers}

            </h2>

          </div>





          <div className="bg-white rounded-2xl shadow p-6">

            <p className="text-gray-600">
              Rejected
            </p>

            <h2 className="text-3xl font-bold text-red-600">

              {rejectedMembers}

            </h2>

          </div>



        </div>






        <div className="mt-10 bg-white rounded-3xl shadow p-8">


          <h2 className="text-2xl font-bold text-green-800 mb-6">

            Quick Actions

          </h2>




          <div className="flex flex-wrap gap-4">



            <Link

              href="/admin/members"

              className="bg-green-700 text-white px-6 py-3 rounded-xl"

            >

              Manage Members

            </Link>





            <Link

              href="/admin/applications"

              className="bg-blue-700 text-white px-6 py-3 rounded-xl"

            >

              Applications

            </Link>





            <Link

              href="/admin/orders"

              className="bg-purple-700 text-white px-6 py-3 rounded-xl"

            >

              Orders

            </Link>




          </div>


        </div>



      </div>


    </main>

  );

}