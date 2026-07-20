"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import { events } from "@/app/data/events";
import Link from "next/link";

export default function Events() {

  const upcomingEvents = events.filter(
    (event) => event.status === "Upcoming"
  );

  return (
    <section id="events" className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            Upcoming Events
          </h2>

          <p className="mt-4 text-gray-600">
            Stay updated with our latest programs and gatherings.
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-10">

          {upcomingEvents.map((event) => (

            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >

              <Image
                src={event.image}
                alt={event.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />


              <div className="p-6">

                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  {event.title}
                </h3>


                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <CalendarDays size={18} />
                  <span>{event.date}</span>
                </div>


                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin size={18} />
                  <span>{event.location}</span>
                </div>


                <p className="text-gray-600 mb-6">
                  {event.description}
                </p>


                <Link
                  href={`/events/${event.title
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                  className="inline-block bg-[#166534] text-white px-6 py-2 rounded-full hover:bg-[#14532d] transition shadow-md"
                >
                  View Details
                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}