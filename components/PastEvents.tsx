"use client";

import Image from "next/image";
import { events } from "@/app/data/events";
import { CalendarDays, MapPin } from "lucide-react";

export default function PastEvents() {

  const pastEvents = events.filter(
    (event) => event.status === "Past"
  );


  if (pastEvents.length === 0) {
    return null;
  }


  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            Past Events
          </h2>

          <p className="mt-4 text-gray-600">
            Memories from our previous programs and gatherings.
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-10">

          {pastEvents.map((event) => (

            <div
              key={event.title}
              className="bg-white rounded-2xl overflow-hidden shadow-md"
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


                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={18} />
                  <span>{event.location}</span>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}