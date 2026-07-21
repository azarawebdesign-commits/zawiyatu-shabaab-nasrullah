import Image from "next/image";

export default function MaulidPage() {

  return (
    <main className="min-h-screen bg-gray-50 py-20">


      <div className="max-w-6xl mx-auto px-6">



        {/* Header */}

        <section className="text-center mb-16">


          <h1 className="text-5xl font-bold text-green-800 mb-5">
            Maulid Nabiyyi
          </h1>


          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Celebrating the birth of Prophet Muhammad ﷺ
            and preserving the love, remembrance, and unity
            of Zawiyatu Shabaab Nasrullah.
          </p>


        </section>






        {/* Introduction */}

        <section className="bg-white rounded-3xl shadow-lg p-8 mb-10">


          <h2 className="text-3xl font-bold text-green-800 mb-5">
            About Maulid Nabiyyi
          </h2>


          <p className="text-gray-700 leading-relaxed mb-4">

            Maulid Nabiyyi is a special occasion where Muslims
            gather to remember the birth, life, and teachings
            of Prophet Muhammad ﷺ.

          </p>



          <p className="text-gray-700 leading-relaxed">

            For Zawiyatu Shabaab Nasrullah, Maulid Nabiyyi
            represents love for the Prophet ﷺ, unity among
            members, and dedication to preserving Islamic
            traditions.

          </p>


        </section>







        {/* Zawiya History */}

        <section className="bg-white rounded-3xl shadow-lg p-8 mb-10">


          <h2 className="text-3xl font-bold text-green-800 mb-5">
            Our Maulid Journey
          </h2>


          <p className="text-gray-700 leading-relaxed">

            One of the first major achievements of Zawiyatu
            Shabaab Nasrullah was the decision to celebrate
            Maulid Nabiyyi. This milestone brought members
            together and established a tradition that continues
            to strengthen the bond of the Zawiya.

          </p>


        </section>







        {/* Featured Memory */}

        <section className="bg-white rounded-3xl shadow-lg overflow-hidden">


          <div className="relative h-96">


            <Image
              src="/images/activities/maulid.jpg"
              alt="Maulid Nabiyyi Celebration"
              fill
              className="object-cover"
            />


          </div>



          <div className="p-8">


            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Maulid Memories
            </h2>


            <p className="text-gray-700 leading-relaxed">

              Moments from our Maulid Nabiyyi celebrations,
              capturing gatherings, recitations, and memories
              shared by members of Zawiyatu Shabaab Nasrullah.

            </p>


          </div>


        </section>




      </div>


    </main>
  );
}