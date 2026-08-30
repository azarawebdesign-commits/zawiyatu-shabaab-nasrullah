import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import { connectDB } from "@/lib/mongodb";
import Event from "@/models/Event";

function eventSlug(title: string) {
  return title.toLowerCase().replaceAll(" ", "-");
}

export default async function EventsPage() {
  await connectDB();

  const events = await Event.find()
    .sort({ createdAt: -1 })
    .lean();

  const upcomingEvents = events.filter(
    (event) => event.status === "Upcoming"
  );

  const pastEvents = events.filter(
    (event) => event.status === "Past"
  );

  return (
    <main className="min-h-screen bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <section className="text-center mb-16">

          <h1 className="text-5xl font-bold text-green-800 mb-5">
            Events & Programmes
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Stay connected with the latest events, programmes,
            gatherings, and activities of Zawiyatu Shabaab Nasrullah.
          </p>

        </section>


        {/* Upcoming Events */}
        <section>

          <h2 className="text-3xl font-bold text-green-800 mb-8">
            Upcoming Events
          </h2>

          {upcomingEvents.length === 0 ? (

            <div className="bg-white rounded-2xl shadow p-8 text-center">
              <p className="text-gray-600">
                There are currently no upcoming events.
              </p>
            </div>

          ) : (

            <div className="grid md:grid-cols-2 gap-8">

              {upcomingEvents.map((event) => (

                <div
                  key={event._id.toString()}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition"
                >

                  <Image
                    src={event.image}
                    alt={event.title}
                    width={800}
                    height={500}
                    className="w-full h-72 object-cover"
                  />

                  <div className="p-6">

                    <h3 className="text-2xl font-bold text-green-800 mb-4">
                      {event.title}
                    </h3>

                    <div className="flex items-center gap-3 text-gray-600 mb-3">
                      <CalendarDays size={20} />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600 mb-4">
                      <MapPin size={20} />
                      <span>{event.location}</span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {event.description}
                    </p>

                    <Link
                      href={`/events/${eventSlug(event.title)}`}
                      className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
                    >
                      View Details
                    </Link>

                  </div>

                </div>

              ))}

            </div>

          )}

        </section>


        {/* Past Events */}
        <section className="mt-20">

          <h2 className="text-3xl font-bold text-green-800 mb-8">
            Past Events
          </h2>

          {pastEvents.length === 0 ? (

            <div className="bg-white rounded-2xl shadow p-8 text-center">
              <p className="text-gray-600">
                No past events available.
              </p>
            </div>

          ) : (

            <div className="grid md:grid-cols-2 gap-8">

              {pastEvents.map((event) => (

                <div
                  key={event._id.toString()}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition"
                >

                  <Image
                    src={event.image}
                    alt={event.title}
                    width={800}
                    height={500}
                    className="w-full h-72 object-cover"
                  />

                  <div className="p-6">

                    <div className="inline-block bg-gray-200 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                      Past Event
                    </div>

                    <h3 className="text-2xl font-bold text-green-800 mb-4">
                      {event.title}
                    </h3>

                    <div className="flex items-center gap-3 text-gray-600 mb-3">
                      <CalendarDays size={20} />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600 mb-4">
                      <MapPin size={20} />
                      <span>{event.location}</span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {event.description}
                    </p>

                    <Link
                      href={`/events/${eventSlug(event.title)}`}
                      className="inline-block border-2 border-green-700 text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-700 hover:text-white transition"
                    >
                      View Event
                    </Link>

                  </div>

                </div>

              ))}

            </div>

          )}

        </section>

      </div>

    </main>
  );
}