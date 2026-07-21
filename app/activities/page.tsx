import Image from "next/image";
import Link from "next/link";

export default function ActivitiesPage() {

  const activities = [
    {
      title: "Maulid Nabiyyi",
      description:
        "A special celebration commemorating the birth of Prophet Muhammad ﷺ, bringing members together in remembrance, love, and devotion.",
      image: "/images/activities/maulid.jpg",
      link: "/activities/maulid",
    },

    {
      title: "Tahniya Recitation",
      description:
        "A meaningful recitation programme that strengthens faith, remembrance, and unity among members of the Zawiya.",
      image: "/images/activities/tahniya.jpg",
      link: "/activities/tahniya",
    },

    {
      title: "Community Service",
      description:
        "Activities focused on supporting members, helping the community, and promoting kindness and togetherness.",
      image: "/images/activities/service.jpg",
      link: "/activities/service",
    },

    {
      title: "Ramadan Programmes",
      description:
        "Special activities organised during Ramadan to encourage worship, togetherness, and community participation.",
      image: "/images/activities/ramadan.jpg",
      link: "/activities/ramadan",
    },
  ];


  return (
    <main className="min-h-screen bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-6">


        {/* Header */}

        <section className="text-center mb-16">

          <h1 className="text-5xl font-bold text-green-800 mb-5">
            Activities & Programmes
          </h1>


          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore the programmes and activities that bring
            members of Zawiyatu Shabaab Nasrullah together
            in faith, service, and unity.
          </p>


        </section>




        {/* Activities Cards */}

        <section className="grid md:grid-cols-2 gap-8">


          {activities.map((activity) => (

            <Link
              href={activity.link}
              key={activity.title}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >


              <div className="relative h-72">

                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />

              </div>



              <div className="p-6">


                <h2 className="text-2xl font-bold text-green-800">
                  {activity.title}
                </h2>


                <p className="text-gray-600 mt-3 leading-relaxed">
                  {activity.description}
                </p>


                <p className="text-green-700 font-semibold mt-5">
                  Learn More →
                </p>


              </div>


            </Link>

          ))}


        </section>



      </div>

    </main>
  );
}