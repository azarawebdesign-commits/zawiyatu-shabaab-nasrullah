import Image from "next/image";

export default function HistoricalGalleryPage() {

  const albums = [
    {
      year: "2023",
      title: "The Beginning",
      description:
        "Memories from the establishment of Zawiyatu Shabaab Nasrullah and the early days of our journey.",
      images: [
        "/images/journey/2023-1.jpg",
        "/images/journey/2023-2.jpg",
        "/images/journey/2023-3.jpg",
      ],
    },

    {
      year: "2024",
      title: "Growth and Development",
      description:
        "Moments that captured the growth of the Zawiya through activities, gatherings, and community service.",
      images: [
        "/images/journey/2024-1.jpg",
        "/images/journey/2024-2.jpg",
        "/images/journey/2024-3.jpg",
      ],
    },

    {
      year: "2025",
      title: "A Journey of Progress",
      description:
        "Important events and memories that marked another chapter in the history of the Zawiya.",
      images: [
        "/images/journey/2025-1.jpg",
        "/images/journey/2025-2.jpg",
        "/images/journey/2025-3.jpg",
      ],
    },

    {
      year: "2026",
      title: "Continuing the Legacy",
      description:
        "Recent memories reflecting the continued dedication, unity, and service of the Zawiya.",
      images: [
        "/images/journey/2026-1.jpg",
        "/images/journey/2026-2.jpg",
        "/images/journey/2026-3.jpg",
      ],
    },
  ];


  return (
    <main className="min-h-screen bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-6">


        <section className="text-center mb-16">

          <h1 className="text-5xl font-bold text-green-800 mb-5">
            Historical Gallery
          </h1>


          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A collection of memories preserving the history,
            growth, and achievements of Zawiyatu Shabaab Nasrullah.
          </p>


        </section>




        <div className="space-y-16">


          {albums.map((album) => (

            <section
              key={album.year}
              className="bg-white rounded-3xl shadow-lg p-8"
            >


              <div className="mb-8">

                <span className="text-green-700 font-bold text-lg">
                  {album.year}
                </span>


                <h2 className="text-3xl font-bold text-gray-800">
                  {album.title}
                </h2>


                <p className="text-gray-600 mt-3">
                  {album.description}
                </p>

              </div>




              <div className="grid md:grid-cols-3 gap-6">


                {album.images.map((image, index) => (

                  <div
                    key={index}
                    className="relative h-64 rounded-2xl overflow-hidden"
                  >

                    <Image
                      src={image}
                      alt={`${album.year} historical image`}
                      fill
                      className="object-cover"
                    />

                  </div>

                ))}


              </div>


            </section>

          ))}


        </div>


      </div>


    </main>
  );
}