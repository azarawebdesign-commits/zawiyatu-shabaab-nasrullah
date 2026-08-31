import Image from "next/image";

const imams = [
  {
    name: "Imam Shiekh Tijani Dan Kano",
    title: "Imam of Zawiyatu Shabaab Nasrullah",
    image: "/images/leadership/imam.jpg",
    alt: "Imam Shiekh Tijani Dan Kano",
    description: [
      "Imam Shiekh Tijani Dan Kano serves as the Imam and spiritual guide of Zawiyatu Shabaab Nasrullah.",
      "Through his leadership, he provides religious guidance, encourages Islamic learning, and supports the spiritual development of members of the Zawiya.",
      "His role represents dedication to preserving Islamic teachings, strengthening unity, and guiding the community with wisdom and service.",
    ],
  },
  {
    name: "Imam Sheikh Muhammed Mustapha Badamasi",
    title: "Imam of Zawiyatu Shabaab Nasrullah",
    image: "/images/leadership/imam-2.jpg",
    alt: "Imam Sheikh Muhammed Mustapha Badamasi",
    description: [
      "Imam Sheikh Muhammed Mustapha Badamasi serves as an Imam and spiritual leader of Zawiyatu Shabaab Nasrullah.",
      "Through his service and guidance, he contributes to the religious development of members and encourages Islamic learning, unity, and good character.",
      "His leadership reflects a commitment to serving the Zawiya and strengthening the spiritual bonds of the community.",
    ],
  },
];

export default function ImamProfilePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-800 mb-5">
            Imam Profile
          </h1>

          <p className="text-gray-600 text-lg">
            The spiritual leadership of Zawiyatu Shabaab Nasrullah.
          </p>
        </section>

        {/* Imam Profiles */}
        <section className="grid md:grid-cols-2 gap-8">
          {imams.map((imam) => (
            <article
              key={imam.name}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              {/* Imam Image */}
              <div className="relative h-96">
                <Image
                  src={imam.image}
                  alt={imam.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Imam Information */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-green-800 mb-3">
                  {imam.name}
                </h2>

                <p className="text-green-700 font-semibold mb-6">
                  {imam.title}
                </p>

                <div className="space-y-5 text-gray-700 leading-relaxed">
                  {imam.description.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Responsibilities */}
        <section className="bg-white rounded-3xl shadow-lg p-8 mt-10">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Responsibilities of the Imams
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>
              • Leading prayers and religious gatherings.
            </li>

            <li>
              • Providing spiritual guidance to members.
            </li>

            <li>
              • Supporting Islamic education and learning.
            </li>

            <li>
              • Promoting unity, good character, and brotherhood.
            </li>
          </ul>
        </section>

      </div>
    </main>
  );
}