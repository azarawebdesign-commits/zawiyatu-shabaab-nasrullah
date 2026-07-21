import Image from "next/image";

export default function TahniyaPage() {

  return (
    <main className="min-h-screen bg-gray-50 py-20">


      <div className="max-w-6xl mx-auto px-6">



        {/* Header */}

        <section className="text-center mb-16">


          <h1 className="text-5xl font-bold text-green-800 mb-5">
            Tahniya Recitation
          </h1>


          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A meaningful tradition of remembrance,
            unity, and spiritual connection within
            Zawiyatu Shabaab Nasrullah.
          </p>


        </section>







        {/* About */}

        <section className="bg-white rounded-3xl shadow-lg p-8 mb-10">


          <h2 className="text-3xl font-bold text-green-800 mb-5">
            About Tahniya Recitation
          </h2>


          <p className="text-gray-700 leading-relaxed mb-4">

            Tahniya Recitation is one of the spiritual
            activities observed by members of Zawiyatu
            Shabaab Nasrullah.

          </p>



          <p className="text-gray-700 leading-relaxed">

            Through this gathering, members come together
            in remembrance, devotion, and appreciation
            of the teachings and traditions of the
            Zawiya.

          </p>


        </section>








        {/* Importance */}

        <section className="bg-white rounded-3xl shadow-lg p-8 mb-10">


          <h2 className="text-3xl font-bold text-green-800 mb-5">
            Importance of Tahniya
          </h2>


          <ul className="space-y-3 text-gray-700">


            <li>
              • Strengthens unity among members.
            </li>


            <li>
              • Encourages remembrance and devotion.
            </li>


            <li>
              • Preserves important spiritual traditions.
            </li>


            <li>
              • Creates a space for members to connect.
            </li>


          </ul>


        </section>








        {/* Memories */}

        <section className="bg-white rounded-3xl shadow-lg overflow-hidden">


          <div className="relative h-96">


            <Image
              src="/images/activities/tahniya.jpg"
              alt="Tahniya Recitation"
              fill
              className="object-cover"
            />


          </div>




          <div className="p-8">


            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Tahniya Memories
            </h2>


            <p className="text-gray-700 leading-relaxed">

              A collection of moments from Tahniya
              recitations, capturing the spiritual
              gatherings and shared experiences of
              Zawiyatu Shabaab Nasrullah.

            </p>


          </div>


        </section>




      </div>


    </main>
  );
}