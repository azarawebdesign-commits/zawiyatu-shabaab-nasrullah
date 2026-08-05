import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import Member from "@/models/Member";

export default async function MemberProfilePage() {

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


      <div className="max-w-3xl mx-auto">


        <div className="bg-white rounded-3xl shadow-xl p-8">



          <div className="text-center mb-8">


            {member.photo && (

              <img

                src={member.photo}

                alt={member.fullName}

                className="w-36 h-36 rounded-full object-cover border-4 border-green-700 mx-auto"

              />

            )}



            <h1 className="text-3xl font-bold text-green-800 mt-4">

              {member.fullName}

            </h1>


            <p className="text-green-700 font-bold">

              {member.membershipId}

            </p>


          </div>




          <div className="space-y-4 text-gray-700">


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
              <strong>Membership Type:</strong> {member.membershipType}
            </p>


            <p>
              <strong>Date Joined:</strong> {member.dateJoined}
            </p>


            <p>
              <strong>Status:</strong> {member.status}
            </p>



          </div>





          <hr className="my-8" />





          <h2 className="text-xl font-bold text-green-800 mb-4">

            Emergency Contact

          </h2>




          <div className="space-y-3 text-gray-700">


            <p>
              <strong>Name:</strong> {member.emergencyName}
            </p>


            <p>
              <strong>Relationship:</strong> {member.emergencyRelationship}
            </p>


            <p>
              <strong>Phone:</strong> {member.emergencyPhone}
            </p>


          </div>



        </div>


      </div>


    </main>

  );

}