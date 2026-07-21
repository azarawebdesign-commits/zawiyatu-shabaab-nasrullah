import Image from "next/image";

export default function MaulidArchivePage() {

  const maulids = [
    {
      year: "2023",
      title: "The Beginning of Our Maulid Journey",
      date: "First Maulid Nabiyyi Celebration",
      description:
        "Our first celebration of the birth of Prophet Muhammad ﷺ marked a historic milestone in the journey of Zawiyatu Shabaab Nasrullah. It brought members together in remembrance, love, and devotion to the Prophet ﷺ.",
      image: "/images/journey/maulid/2023.jpg",
    },

    {
      year: "2024",
      title: "Growing Together in Faith",
      date: "Maulid Nabiyyi Celebration",
      description:
        "A continuation of our tradition of celebrating the Prophet Muhammad ﷺ while strengthening unity, learning, and spiritual connection among members.",
      image: "/images/journey/maulid/2024.jpg",
    },

    {
      year: "2025",
      title: "A Chapter of Progress",
      date: "Maulid Nabiyyi Celebration",
      description:
        "Another memorable gathering that reflected the continued growth and commitment of Zawiyatu Shabaab Nasrullah.",
      image: "/images/journey/maulid/2025.jpg",
    },

    {
      year: "2026",
      title: "A Memorable Maulid Celebration",
      date: "23rd - 24th January 2026",
      description:
        "The 2026 Maulid celebration became one of the significant moments in the history of the Zawiya. Activities included the slaughter of a cow on 23rd January and the main Maulid celebration on 24th January. The occasion was honoured by the presence of Chief of Sabon Zango, Sarki Yahaya Hamisu Baako, and also marked the appointment of Imam Sheikh Muhammed Salis Baako.",
      image: "/images/journey/maulid/2026.jpg",
    },
  ];


  return (
    <main className="min-h-screen bg-gray-50 py-20">

      <div className="max-w-6xl mx-auto px-6">


        <section className="text-center mb-16">

          <h1 className="text-5xl font-bold text-green-800 mb-5">
            Annual Maulid Archive
          </h1>


          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Preserving the memories, celebrations, and milestones
            of Maulid Nabiyyi throughout the history of
            Zawiyatu Shabaab Nasrullah.
          </p>


        </section>




        <div className="space-y-12">


          {maulids.map((maulid) => (

            <section
              key={maulid.year}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >


              <div className="grid md:grid-cols-2">


                <div className="relative h-80">

                  <Image
                    src={maulid.image}
                    alt={maulid.title}
                    fill
                    className="object-cover"
                  />

                </div>



                <div className="p-8">


                  <span className="text-green-700 font-bold text-lg">
                    {maulid.year}
                  </span>


                  <h2 className="text-3xl font-bold text-gray-800 mt-2">
                    {maulid.title}
                  </h2>


                  <p className="text-green-700 font-semibold mt-3">
                    {maulid.date}
                  </p>


                  <p className="text-gray-600 leading-relaxed mt-5">
                    {maulid.description}
                  </p>


                  <button
                    className="mt-6 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800"
                  >
                    View Memories
                  </button>


                </div>


              </div>


            </section>

          ))}


        </div>


      </div>


    </main>
  );
}