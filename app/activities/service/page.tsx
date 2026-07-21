import Image from "next/image";

export default function CommunityServicePage() {

  return (
    <main className="min-h-screen bg-gray-50 py-20">


      <div className="max-w-6xl mx-auto px-6">



        {/* Header */}

        <section className="text-center mb-16">


          <h1 className="text-5xl font-bold text-green-800 mb-5">
            Community Service
          </h1>


          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Serving our members and the wider community
            through kindness, support, and unity.
          </p>


        </section>







        {/* About */}

        <section className="bg-white rounded-3xl shadow-lg p-8 mb-10">


          <h2 className="text-3xl font-bold text-green-800 mb-5">
            About Our Community Service
          </h2>


          <p className="text-gray-700 leading-relaxed mb-4">

            Zawiyatu Shabaab Nasrullah believes in supporting
            people through acts of kindness, cooperation,
            and service to the community.

          </p>



          <p className="text-gray-700 leading-relaxed">

            Through different initiatives and collective
            efforts, members contribute towards helping
            others and strengthening the bond within the
            community.

          </p>


        </section>







        {/* Activities */}

        <section className="bg-white rounded-3xl shadow-lg p-8 mb-10">


          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Areas of Service
          </h2>



          <div className="grid md:grid-cols-3 gap-6">


            <div className="bg-green-50 rounded-2xl p-6">

              <h3 className="text-xl font-bold text-green-800 mb-3">
                Member Support
              </h3>

              <p className="text-gray-700">
                Supporting members during important moments
                and community needs.
              </p>

            </div>




            <div className="bg-green-50 rounded-2xl p-6">

              <h3 className="text-xl font-bold text-green-800 mb-3">
                Welfare Activities
              </h3>

              <p className="text-gray-700">
                Promoting care, unity, and assistance
                among members.
              </p>

            </div>




            <div className="bg-green-50 rounded-2xl p-6">

              <h3 className="text-xl font-bold text-green-800 mb-3">
                Community Assistance
              </h3>

              <p className="text-gray-700">
                Contributing positively to the wider
                community through service.
              </p>

            </div>


          </div>


        </section>







        {/* Memories */}

        <section className="bg-white rounded-3xl shadow-lg overflow-hidden">


          <div className="relative h-96">


            <Image
              src="/images/activities/service.jpg"
              alt="Community Service"
              fill
              className="object-cover"
            />


          </div>




          <div className="p-8">


            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Service Memories
            </h2>


            <p className="text-gray-700 leading-relaxed">

              Moments showing the dedication and cooperation
              of members of Zawiyatu Shabaab Nasrullah
              in serving others.

            </p>


          </div>


        </section>



      </div>


    </main>
  );
}