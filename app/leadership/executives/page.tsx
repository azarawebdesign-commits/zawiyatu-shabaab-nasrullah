import Image from "next/image";

export default function ExecutivesPage() {

  const executives = [
    {
      name: "Chairman",
      role: "Leadership & Coordination",
      image: "/images/leadership/executives/chairman.jpeg",
      description:
        "Provides overall leadership, coordinates activities, and helps guide the direction and development of the Zawiya.",
    },

    {
      name: "President",
      role: "Support & Administration",
      image: "/images/leadership/executives/president.jpeg",
      description:
        "Supports the Chairman and assists in managing the affairs and activities of the Zawiya.",
    },

    {
      name: "Secretary",
      role: "Documentation & Communication",
      image: "/images/leadership/executives/secretary.jpg",
      description:
        "Responsible for records, official communication, meeting documentation, and administrative support.",
    },

    {
      name: "Treasurer",
      role: "Financial Management",
      image: "/images/leadership/executives/treasurer.jpg",
      description:
        "Manages financial records, contributions, and ensures accountability in financial matters.",
    },
  ];



  const committees = [
    {
      title: "Event Committee",
      description:
        "Responsible for planning and organizing major events, including Maulid Nabiyyi celebrations and other programmes.",
    },

    {
      title: "Media Team",
      description:
        "@THE AZARA STUDIO Handles photography, videography, website management, graphic design, and digital communication.",
    },

    {
      title: "Welfare Team",
      description:
        "Supports members, coordinates welfare activities, and promotes care and unity within the community.",
    },
  ];



  return (
    <main className="min-h-screen bg-gray-50 py-20">


      <div className="max-w-7xl mx-auto px-6">



        {/* Header */}

        <section className="text-center mb-16">

          <h1 className="text-5xl font-bold text-green-800 mb-5">
            Executive Team
          </h1>


          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Meet the administrative leaders and committees
            responsible for organizing and supporting the
            activities of Zawiyatu Shabaab Nasrullah.
          </p>


        </section>





        {/* Executive Members */}

        <section className="grid md:grid-cols-2 gap-8">


          {executives.map((member) => (

            <div
              key={member.name}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >


              <div className="relative h-72">

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />

              </div>



              <div className="p-6">


                <h2 className="text-2xl font-bold text-green-800">
                  {member.name}
                </h2>


                <p className="text-green-700 font-semibold mt-2">
                  {member.role}
                </p>


                <p className="text-gray-600 mt-4 leading-relaxed">
                  {member.description}
                </p>


              </div>


            </div>

          ))}


        </section>






        {/* Committees */}

        <section className="mt-14 bg-white rounded-3xl shadow-lg p-8">


          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
            Our Committees
          </h2>



          <div className="grid md:grid-cols-3 gap-6">


            {committees.map((committee) => (

              <div
                key={committee.title}
                className="bg-green-50 rounded-2xl p-6"
              >


                <h3 className="text-xl font-bold text-green-800 mb-3">
                  {committee.title}
                </h3>


                <p className="text-gray-700">
                  {committee.description}
                </p>


              </div>

            ))}


          </div>


        </section>



      </div>


    </main>
  );
}