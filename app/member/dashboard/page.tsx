import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import Member from "@/models/Member";
import Link from "next/link";
import MemberLogout from "@/components/MemberLogout";

export default async function MemberDashboardPage() {

  const cookieStore = await cookies();

  const memberId = cookieStore.get("memberId")?.value;


  if (!memberId) {
    redirect("/member/login");
  }


  await connectDB();


  const member = await Member.findById(memberId).lean();


  if (!member) {
    redirect("/member/login");
  }



  return (

    <main className="min-h-screen bg-gray-50 p-8">


      <div className="max-w-4xl mx-auto">


        <div className="bg-white rounded-3xl shadow-xl p-8">


          {/* Profile Header */}

          <div className="text-center mb-8">


            {member.photo && (

              <img

                src={member.photo}

                alt={member.fullName}

                className="w-32 h-32 rounded-full object-cover border-4 border-green-700 mx-auto"

              />

            )}



            <h1 className="text-3xl font-bold text-green-800 mt-4">

              Welcome, {member.fullName}

            </h1>


            <p className="text-gray-600">

              Member Dashboard

            </p>


          </div>





          {/* Membership Information */}

          <div className="grid md:grid-cols-2 gap-5">



            <div className="bg-green-50 rounded-xl p-5">

              <p className="text-gray-600">
                Membership ID
              </p>

              <h2 className="text-xl font-bold text-green-800">

                {member.membershipId}

              </h2>

            </div>




            <div className="bg-green-50 rounded-xl p-5">

              <p className="text-gray-600">
                Status
              </p>

              <h2 className="text-xl font-bold text-green-800">

                {member.status}

              </h2>

            </div>




            <div className="bg-green-50 rounded-xl p-5">

              <p className="text-gray-600">
                Membership Type
              </p>

              <h2 className="text-xl font-bold text-green-800">

                {member.membershipType}

              </h2>

            </div>




            <div className="bg-green-50 rounded-xl p-5">

              <p className="text-gray-600">
                Date Joined
              </p>

              <h2 className="text-xl font-bold text-green-800">

                {member.dateJoined}

              </h2>

            </div>



          </div>






          {/* Dashboard Actions */}

          <div className="mt-10 flex flex-wrap gap-4 justify-center">


  <Link
    href="/member/card"
    className="bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800"
  >
    View Membership Card
  </Link>



  <Link
    href="/member/profile"
    className="bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-gray-900"
  >
    My Profile
  </Link>



  <MemberLogout />


</div>




        </div>



      </div>


    </main>

  );

}