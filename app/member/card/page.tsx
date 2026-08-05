import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import Member from "@/models/Member";
import { QRCodeCanvas } from "qrcode.react";

export default async function MemberCardPage() {


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

    <main className="min-h-screen bg-gray-100 p-8">


      <div className="max-w-sm mx-auto">


        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border">


          <div className="bg-green-800 text-white text-center p-5">


            <img

              src="/images/logo.png"

              alt="Logo"

              className="w-16 h-16 mx-auto object-contain"

            />


            <h1 className="font-bold text-lg mt-2">

              Zawiyatu Shabaab Nasrullah

            </h1>


            <p className="text-sm">

              Official Membership Card

            </p>


          </div>





          <div className="p-6 text-center">


            {member.photo && (

              <img

                src={member.photo}

                alt={member.fullName}

                className="w-28 h-28 rounded-full object-cover border-4 border-green-700 mx-auto"

              />

            )}



            <h2 className="text-xl font-bold text-green-800 mt-4">

              {member.fullName}

            </h2>



            <p className="text-gray-600">

              {member.membershipType}

            </p>




            <div className="bg-green-50 rounded-xl p-4 mt-5">


              <p className="text-sm">

                Membership ID

              </p>


              <p className="text-xl font-bold text-green-800">

                {member.membershipId}

              </p>


            </div>



            <div className="mt-6 flex justify-center">

              <QRCodeCanvas

                value={`/verify/${member.membershipId}`}

                size={120}

              />

            </div>



            <div className="text-left mt-6 space-y-2 text-sm">


              <p>

                <strong>Date Joined:</strong> {member.dateJoined}

              </p>


              <p>

                <strong>Status:</strong> {member.status}

              </p>


            </div>


          </div>



        </div>





        <button

          onClick={() => window.print()}

          className="mt-6 w-full bg-green-700 text-white py-3 rounded-xl"

        >

          Print Membership Card

        </button>



      </div>


    </main>

  );

}