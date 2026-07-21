import Image from "next/image";

export default function LegacyPage() {

  const people = [
    {
      name: "Founding Members",
      role: "Founders of Zawiyatu Shabaab Nasrullah",
      image: "/images/journey/legacy/founders.jpg",
      description:
        "The dedicated members whose shared vision and commitment led to the establishment of Zawiyatu Shabaab Nasrullah.",
    },

    {
      name: "Sheikh Mohammed Badamasi",
      role: "Gave the name Zawiyatu Shabaab Nasrullah",
      image: "/images/journey/legacy/sheikh-badamasi.jpg",
      description:
        "A respected figure whose contribution in naming the Zawiya became an important part of its identity and history.",
    },

    {
      name: "Our Leaders",
      role: "Guidance and Leadership",
      image: "/images/journey/legacy/leaders.jpg",
      description:
        "The scholars, elders, and leaders who continue to guide the Zawiya through knowledge, dedication, and service.",
    },

    {
      name: "Our Members",
      role: "Building the Legacy Together",
      image: "/images/journey/legacy/members.jpg",
      description:
        "Every member who contributes time, effort, and dedication plays an important role in the growth of the Zawiya.",
    },
  ];


  return (
    <main className="min-h-screen bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-6">


        <section className="text-center mb-16">

          <h1 className="text-5xl font-bold text-green-800 mb-5">
            Legacy Wall
          </h1>


          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Honouring the individuals whose dedication,
            leadership, and service have contributed to the
            growth and success of Zawiyatu Shabaab Nasrullah.
          </p>


        </section>




        <div className="grid md:grid-cols-2 gap-8">


          {people.map((person) => (

            <div
              key={person.name}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >


              <div className="relative h-72">

                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                />

              </div>



              <div className="p-6">


                <h2 className="text-2xl font-bold text-green-800">
                  {person.name}
                </h2>


                <p className="text-green-700 font-semibold mt-2">
                  {person.role}
                </p>


                <p className="text-gray-600 mt-4 leading-relaxed">
                  {person.description}
                </p>


              </div>


            </div>

          ))}


        </div>


      </div>


    </main>
  );
}