import Image from "next/image";
import { events } from "@/app/data/events";
import { CalendarDays, MapPin } from "lucide-react";

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const event = events.find(
    (item) =>
      item.title
        .toLowerCase()
        .replaceAll(" ", "-") === id
  );


  if (!event) {
    return (
      <div className="p-10 text-center">
        Event not found
      </div>
    );
  }


  return (
    <main className="min-h-screen bg-gray-50 py-20">

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <Image
            src={event.image}
            alt={event.title}
            width={1200}
            height={600}
            className="w-full h-96 object-cover"
          />


          <div className="p-8">

            <h1 className="text-4xl font-bold text-green-800">
              {event.title}
            </h1>


            <div className="mt-6 space-y-3 text-gray-600">

              <div className="flex items-center gap-3">
                <CalendarDays />
                <span>{event.date}</span>
              </div>


              <div className="flex items-center gap-3">
                <MapPin />
                <span>{event.location}</span>
              </div>

            </div>


            <p className="mt-8 text-lg text-gray-700">
              {event.description}
            </p>

            {event.gallery.length > 0 && (
  <div className="mt-12">

    <h2 className="text-3xl font-bold text-green-800 mb-6">
      Event Gallery
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      {event.gallery.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`${event.title} ${index + 1}`}
          width={400}
          height={300}
          className="rounded-xl object-cover w-full h-48 hover:scale-105 transition"
        />
      ))}

    </div>

  </div>
)}


          </div>

        </div>

      </div>

    </main>
  );
}