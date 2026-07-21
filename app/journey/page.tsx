import Link from "next/link";

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">

      <div className="max-w-6xl mx-auto px-6">


        {/* Header */}
        <section className="text-center mb-16">

          <h1 className="text-5xl font-bold text-green-800 mb-5">
            Our Journey
          </h1>


          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Discover the history, vision, milestones, and legacy
            of Zawiyatu Shabaab Nasrullah from its humble beginning
            to the community it is today.
          </p>


        </section>



        {/* Founding Story */}
        <section className="bg-white rounded-3xl shadow-lg p-8 mb-10">

          <h2 className="text-3xl font-bold text-green-800 mb-5">
            Our Founding Story
          </h2>


          <p className="text-gray-700 leading-relaxed mb-4">
            Zawiyatu Shabaab Nasrullah was officially founded on
            <strong> 24th September 2023</strong> through the
            collective effort and dedication of its members.
          </p>


          <p className="text-gray-700 leading-relaxed mb-4">
            The Zawiya was established mainly to serve Allah and
            His Messenger Prophet Muhammad ﷺ and to share the
            teachings of Sheikh Ibrahima Nyass (RA).
          </p>


          <p className="text-gray-700 leading-relaxed">
            The name <strong>Zawiyatu Shabaab Nasrullah</strong>
            was given by Sheikh Mohammed Badamasi, marking the
            beginning of a journey built on faith, unity,
            knowledge, and service.
          </p>


        </section>




        {/* Vision */}
        <section className="bg-white rounded-3xl shadow-lg p-8 mb-10">

          <h2 className="text-3xl font-bold text-green-800 mb-5">
            Our Vision
          </h2>


          <ul className="space-y-3 text-gray-700">

            <li>
              • To serve Allah and His Messenger ﷺ.
            </li>

            <li>
              • To spread the teachings of Sheikh Ibrahima Nyass (RA).
            </li>

            <li>
              • To strengthen unity among Muslims.
            </li>

            <li>
              • To encourage Islamic learning and good character.
            </li>

          </ul>


        </section>




        {/* First Achievement */}
        <section className="bg-white rounded-3xl shadow-lg p-8 mb-10">

          <h2 className="text-3xl font-bold text-green-800 mb-5">
            Our First Major Achievement
          </h2>


          <p className="text-gray-700 leading-relaxed">
            One of the earliest milestones of Zawiyatu Shabaab
            Nasrullah was the decision to celebrate the birth of
            Prophet Muhammad ﷺ through <strong>Maulid Nabiyyi</strong>.
            This historic event became a symbol of unity,
            remembrance, and love for the Prophet ﷺ among members
            of the Zawiya.
          </p>


        </section>




        {/* Historical Sections */}

        <section className="grid md:grid-cols-2 gap-6">


          <Link
            href="/journey/timeline"
            className="bg-green-700 text-white rounded-2xl p-8 text-center hover:bg-green-800 transition"
          >

            <h3 className="text-2xl font-bold">
              Timeline
            </h3>

            <p className="mt-3">
              Explore the important milestones and growth of our Zawiya.
            </p>

          </Link>





          <Link
            href="/journey/gallery"
            className="bg-green-700 text-white rounded-2xl p-8 text-center hover:bg-green-800 transition"
          >

            <h3 className="text-2xl font-bold">
              Historical Gallery
            </h3>

            <p className="mt-3">
              View memories and historical moments.
            </p>

          </Link>





          <Link
            href="/journey/legacy"
            className="bg-green-700 text-white rounded-2xl p-8 text-center hover:bg-green-800 transition"
          >

            <h3 className="text-2xl font-bold">
              Legacy Wall
            </h3>

            <p className="mt-3">
              Honour the people who contributed to our journey.
            </p>

          </Link>





          <Link
            href="/journey/maulid"
            className="bg-green-700 text-white rounded-2xl p-8 text-center hover:bg-green-800 transition"
          >

            <h3 className="text-2xl font-bold">
              Annual Maulid Archive
            </h3>

            <p className="mt-3">
              Explore our yearly Maulid Nabiyyi celebrations.
            </p>

          </Link>


        </section>



      </div>

    </main>
  );
}