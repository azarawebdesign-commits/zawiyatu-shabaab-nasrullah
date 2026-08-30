export default function CommunityStructurePage() {

  const sections = [
    {
      title: "Spiritual Leadership",
      description:
        "The Imam provides religious guidance, leads prayers, teaches Islamic values, and supports the spiritual growth of members.",
    },

    {
      title: "Executive Council",
      description:
        "The Executive Council oversees administration, planning, decision-making, and the smooth running of the affairs of the Zawiya.",
    },

    {
      title: "Event Organisation",
      description:
        "The Event Committee plans and coordinates programmes such as Maulid Nabiyyi celebrations, gatherings, and community activities.",
    },

    {
      title: "Media & Communication",
      description:
        "The Azara Studio manages photography, videography, graphic design, website updates, and communication with members and the public.",
    },

    {
      title: "Welfare & Member Support",
      description:
        "The Welfare Team supports members, promotes unity, and assists with community needs and charitable activities.",
    },

    {
      title: "General Members",
      description:
        "Members form the foundation of the Zawiya through participation, dedication, service, and commitment to its mission.",
    },
  ];



  return (
    <main className="min-h-screen bg-gray-50 py-20">


      <div className="max-w-6xl mx-auto px-6">



        {/* Header */}

        <section className="text-center mb-16">

          <h1 className="text-5xl font-bold text-green-800 mb-5">
            Community Structure
          </h1>


          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Understanding the organisation, leadership,
            and teamwork that support Zawiyatu Shabaab Nasrullah.
          </p>


        </section>





        {/* Structure Diagram */}

        <section className="bg-white rounded-3xl shadow-lg p-8 mb-12">


          <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
            Our Leadership Structure
          </h2>


          <div className="text-center space-y-4">


            <div className="bg-green-700 text-white rounded-xl p-4 max-w-sm mx-auto">
              Imam
            </div>


            <div className="text-green-800 text-2xl">
              ↓
            </div>


            <div className="bg-green-700 text-white rounded-xl p-4 max-w-sm mx-auto">
              Executive Council
            </div>


            <div className="text-green-800 text-2xl">
              ↓
            </div>


            <div className="grid md:grid-cols-4 gap-4">


              {[
                "Chairman",
                "Vice Chairman",
                "Secretary",
                "Treasurer",
              ].map((role) => (

                <div
                  key={role}
                  className="bg-green-50 rounded-xl p-4 font-semibold text-green-800"
                >
                  {role}
                </div>

              ))}


            </div>


          </div>


        </section>







        {/* Departments */}

        <section className="grid md:grid-cols-2 gap-8">


          {sections.map((section) => (

            <div
              key={section.title}
              className="bg-white rounded-3xl shadow-lg p-6"
            >


              <h2 className="text-2xl font-bold text-green-800 mb-3">
                {section.title}
              </h2>


              <p className="text-gray-700 leading-relaxed">
                {section.description}
              </p>


            </div>

          ))}


        </section>



      </div>


    </main>
  );
}