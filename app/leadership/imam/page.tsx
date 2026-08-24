import Image from "next/image";

export default function ImamProfilePage() {

  return (
    <main className="min-h-screen bg-gray-50 py-20">


      <div className="max-w-5xl mx-auto px-6">



        {/* Header */}

        <section className="text-center mb-12">

          <h1 className="text-5xl font-bold text-green-800 mb-5">
            Imam Profile
          </h1>


          <p className="text-gray-600 text-lg">
            The spiritual leadership of Zawiyatu Shabaab Nasrullah.
          </p>


        </section>





        {/* Profile Card */}

        <section className="bg-white rounded-3xl shadow-lg overflow-hidden">


          <div className="relative h-96">

            <Image
              src="/images/leadership/imam.jpg"
              alt="Sheikh Muhammed Salis Baako"
              fill
              className="object-cover"
            />

          </div>




          <div className="p-8">


            <h2 className="text-3xl font-bold text-green-800 mb-3">
              Sheikh Muhammed Salis Baako
            </h2>


            <p className="text-green-700 font-semibold mb-6">
              Imam of Zawiyatu Shabaab Nasrullah
            </p>




            <div className="space-y-5 text-gray-700 leading-relaxed">


              <p>
                Sheikh Muhammed Salis Baako serves as the
                Imam and spiritual guide of Zawiyatu Shabaab
                Nasrullah.
              </p>



              <p>
                Through his leadership, he provides religious
                guidance, encourages Islamic learning, and
                supports the spiritual development of members
                of the Zawiya.
              </p>



              <p>
                His role represents dedication to preserving
                Islamic teachings, strengthening unity, and
                guiding the community with wisdom and service.
              </p>



            </div>


          </div>


        </section>






        {/* Responsibilities */}

        <section className="bg-white rounded-3xl shadow-lg p-8 mt-10">


          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Responsibilities of the Imam
          </h2>


          <ul className="space-y-3 text-gray-700">


            <li>
              • Leading prayers and religious gatherings.
            </li>


            <li>
              • Providing spiritual guidance to members.
            </li>


            <li>
              • Supporting Islamic education and learning.
            </li>


            <li>
              • Promoting unity, good character, and brotherhood.
            </li>


          </ul>


        </section>



      </div>


    </main>
  );
}