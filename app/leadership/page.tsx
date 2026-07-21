import Image from "next/image";
import Link from "next/link";

export default function LeadershipPage() {

  const leaders = [
    {
      name: "Imam Sheikh Muhammed Salis Baako",
      role: "Imam of Zawiyatu Shabaab Nasrullah",
      image: "/images/leadership/imam.jpg",
      description:
        "The Imam provides spiritual guidance, leads prayers, and supports the religious development of members of the Zawiya.",
    },

    {
      name: "Sheikh Mohammed Badamasi",
      role: "Naming Figure of the Zawiya",
      image: "/images/leadership/sheikh-badamasi.jpg",
      description:
        "A respected figure whose contribution in naming Zawiyatu Shabaab Nasrullah became an important part of its identity.",
    },

    {
      name: "Executive Members",
      role: "Administration and Organisation",
      image: "/images/leadership/executives.jpg",
      description:
        "The executive team manages the activities, planning, and development of the Zawiya.",
    },

    {
      name: "Members and Volunteers",
      role: "The Strength of the Zawiya",
      image: "/images/leadership/members.jpg",
      description:
        "Dedicated members and volunteers contribute their time, effort, and support towards the growth of the Zawiya.",
    },
  ];


  return (
    <main className="min-h-screen bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-6">


        {/* Header */}
        <section className="text-center mb-16">

          <h1 className="text-5xl font-bold text-green-800 mb-5">
            Leadership & Community
          </h1>


          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Meet the leaders, guides, and dedicated members
            who contribute to the growth and success of
            Zawiyatu Shabaab Nasrullah.
          </p>


        </section>




        {/* Leaders */}
        <section className="grid md:grid-cols-2 gap-8">


          {leaders.map((leader) => (

            <div
              key={leader.name}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >

              <div className="relative h-72">

                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />

              </div>



              <div className="p-6">


                <h2 className="text-2xl font-bold text-green-800">
                  {leader.name}
                </h2>


                <p className="text-green-700 font-semibold mt-2">
                  {leader.role}
                </p>


                <p className="text-gray-600 mt-4 leading-relaxed">
                  {leader.description}
                </p>


              </div>


            </div>

          ))}


        </section>





        {/* Community Values */}

        <section className="bg-white rounded-3xl shadow-lg p-8 mt-12">


          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
            Our Community Values
          </h2>


          <div className="grid md:grid-cols-5 gap-5 text-center">


            {[
              "Faith",
              "Unity",
              "Knowledge",
              "Service",
              "Brotherhood",
            ].map((value) => (

              <div
                key={value}
                className="bg-green-50 rounded-2xl p-5"
              >

                <h3 className="font-bold text-green-800">
                  {value}
                </h3>

              </div>

            ))}


          </div>


        </section>




        {/* Future Sections */}

        <section className="grid md:grid-cols-3 gap-6 mt-12">


          <Link
            href="/leadership/imam"
            className="bg-green-700 text-white rounded-2xl p-6 text-center hover:bg-green-800"
          >

            <h3 className="text-xl font-bold">
              Imam Profile
            </h3>

            <p className="mt-2">
              Learn more about our spiritual leadership.
            </p>

          </Link>




          <Link
            href="/leadership/executives"
            className="bg-green-700 text-white rounded-2xl p-6 text-center hover:bg-green-800"
          >

            <h3 className="text-xl font-bold">
              Executive Team
            </h3>

            <p className="mt-2">
              Meet our administration members.
            </p>

          </Link>




          <Link
            href="/leadership/structure"
            className="bg-green-700 text-white rounded-2xl p-6 text-center hover:bg-green-800"
          >

            <h3 className="text-xl font-bold">
              Community Structure
            </h3>

            <p className="mt-2">
              Understand our organisation.
            </p>

          </Link>


        </section>


      </div>

    </main>
  );
}