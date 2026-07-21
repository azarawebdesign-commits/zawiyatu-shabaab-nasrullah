export default function TimelinePage() {
  const milestones = [
    {
      year: "24 September 2023",
      title: "The Founding of Zawiyatu Shabaab Nasrullah",
      description:
        "Zawiyatu Shabaab Nasrullah was officially founded through the collective effort and commitment of its members. The Zawiya was established to serve Allah and His Messenger Prophet Muhammad ﷺ and to share the teachings of Sheikh Ibrahima Nyass (RA).",
    },

    {
      year: "2023",
      title: "The Beginning of Our Journey",
      description:
        "After its establishment, the Zawiya began its spiritual journey with gatherings, learning, remembrance, and activities aimed at strengthening faith and unity among members.",
    },

    {
      year: "First Maulid Nabiyyi Celebration",
      title: "Our First Major Achievement",
      description:
        "One of the earliest and most memorable milestones was the decision to celebrate the birth of Prophet Muhammad ﷺ through Maulid Nabiyyi. This historic event brought members together in love, remembrance, and devotion.",
    },

    {
      year: "Today",
      title: "Continuing the Legacy",
      description:
        "Zawiyatu Shabaab Nasrullah continues to grow with dedication, unity, and commitment to serving Allah, honouring the Prophet ﷺ, and preserving the teachings of Sheikh Ibrahima Nyass (RA).",
    },
  ];


  return (
    <main className="min-h-screen bg-gray-50 py-20">

      <div className="max-w-5xl mx-auto px-6">


        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold text-green-800 mb-5">
            Our Timeline
          </h1>

          <p className="text-gray-600 text-lg">
            A journey of faith, dedication, unity, and service.
          </p>

        </div>



        <div className="relative border-l-4 border-green-700 ml-4 space-y-12">


          {milestones.map((item, index) => (

            <div
              key={index}
              className="relative pl-10"
            >


              <div className="absolute -left-[14px] top-2 w-6 h-6 bg-green-700 rounded-full border-4 border-white">
              </div>



              <div className="bg-white rounded-2xl shadow-lg p-6">


                <span className="text-green-700 font-bold">
                  {item.year}
                </span>


                <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-3">
                  {item.title}
                </h2>


                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>


              </div>


            </div>

          ))}


        </div>


      </div>


    </main>
  );
}