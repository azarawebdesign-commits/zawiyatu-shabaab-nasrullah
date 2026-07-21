import Image from "next/image";

export default function RamadanPage() {

  return (
    <main className="min-h-screen bg-gray-50 py-20">


      <div className="max-w-6xl mx-auto px-6">



        {/* Header */}

        <section className="text-center mb-16">


          <h1 className="text-5xl font-bold text-green-800 mb-5">
            Ramadan Programmes
          </h1>


          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Special activities and programmes organised
            during the blessed month of Ramadan by
            Zawiyatu Shabaab Nasrullah.
          </p>


        </section>







        {/* About Ramadan Programmes */}

        <section className="bg-white rounded-3xl shadow-lg p-8 mb-10">


          <h2 className="text-3xl font-bold text-green-800 mb-5">
            About Our Ramadan Programmes
          </h2>


          <p className="text-gray-700 leading-relaxed mb-4">

            Ramadan is a special month that encourages
            worship, reflection, unity, and kindness.
            Zawiyatu Shabaab Nasrullah uses this period
            to strengthen bonds among members and promote
            acts of goodness.

          </p>



          <p className="text-gray-700 leading-relaxed">

            Through organised programmes and participation,
            members come together to share the blessings
            and spirit of Ramadan.

          </p>


        </section>







        {/* Programmes */}

        <section className="bg-white rounded-3xl shadow-lg p-8 mb-10">


          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Ramadan Activities
          </h2>



          <div className="grid md:grid-cols-3 gap-6">


            <div className="bg-green-50 rounded-2xl p-6">

              <h3 className="text-xl font-bold text-green-800 mb-3">
                Community Participation
              </h3>


              <p className="text-gray-700">
                Encouraging members to come together
                and participate in Ramadan activities.
              </p>


            </div>





            <div className="bg-green-50 rounded-2xl p-6">

              <h3 className="text-xl font-bold text-green-800 mb-3">
                Support & Care
              </h3>


              <p className="text-gray-700">
                Promoting generosity, assistance,
                and support within the community.
              </p>


            </div>





            <div className="bg-green-50 rounded-2xl p-6">

              <h3 className="text-xl font-bold text-green-800 mb-3">
                Ramadan Memories
              </h3>


              <p className="text-gray-700">
                Preserving special moments and
                experiences from Ramadan programmes.
              </p>


            </div>


          </div>


        </section>







        {/* Image Section */}

        <section className="bg-white rounded-3xl shadow-lg overflow-hidden">


          <div className="relative h-96">


            <Image
              src="/images/activities/ramadan.jpg"
              alt="Ramadan Programmes"
              fill
              className="object-cover"
            />


          </div>




          <div className="p-8">


            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Ramadan Memories
            </h2>


            <p className="text-gray-700 leading-relaxed">

              A collection of memories from Ramadan
              programmes and activities of Zawiyatu
              Shabaab Nasrullah.

            </p>


          </div>


        </section>




      </div>


    </main>
  );
}