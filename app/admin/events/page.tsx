"use client";

import { useEffect, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  CalendarDays,
  MapPin,
} from "lucide-react";

type Event = {
  _id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  status: "Upcoming" | "Past";
  gallery: string[];
};

export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    image: "",
    description: "",
    status: "Upcoming" as "Upcoming" | "Past",
    gallery: "",
  });

  async function loadEvents() {
    try {
      setLoading(true);

      const response = await fetch("/api/admin/events");

      const data = await response.json();

      if (data.success) {
        setEvents(data.events);
      }
    } catch (error) {
      console.error("Failed to load events:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEvents();
  }, []);

  function resetForm() {
    setForm({
      title: "",
      date: "",
      location: "",
      image: "",
      description: "",
      status: "Upcoming",
      gallery: "",
    });

    setEditingEvent(null);
    setShowForm(false);
  }

  function startEdit(event: Event) {
    setEditingEvent(event);

    setForm({
      title: event.title,
      date: event.date,
      location: event.location,
      image: event.image,
      description: event.description,
      status: event.status,
      gallery: event.gallery.join("\n"),
    });

    setShowForm(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const gallery = form.gallery
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean);

      const payload = {
        ...form,
        gallery,
      };

      const url = editingEvent
        ? `/api/admin/events/${editingEvent._id}`
        : "/api/admin/events";

      const method = editingEvent ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        alert(data.message || "Something went wrong.");
        return;
      }

      alert(
        editingEvent
          ? "Event updated successfully."
          : "Event created successfully."
      );

      resetForm();
      loadEvents();
    } catch (error) {
      console.error("Event save error:", error);
      alert("Unable to save event.");
    }
  }

  async function deleteEvent(id: string) {
    const confirmed = confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(`/api/admin/events/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        alert(data.message || "Failed to delete event.");
        return;
      }

      alert("Event deleted successfully.");

      loadEvents();
    } catch (error) {
      console.error("Delete event error:", error);
      alert("Unable to delete event.");
    }
  }

  return (
    <div className="max-w-7xl mx-auto">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-green-800">
            Events
          </h1>

          <p className="text-gray-600 mt-2">
            Add, edit and manage Zawiyatu Shabaab Nasrullah events.
          </p>
        </div>

        <button
          onClick={() => {
            setEditingEvent(null);

            setForm({
              title: "",
              date: "",
              location: "",
              image: "",
              description: "",
              status: "Upcoming",
              gallery: "",
            });

            setShowForm(true);
          }}
          className="flex items-center justify-center gap-2 bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800 transition"
        >
          <Plus size={20} />
          Add Event
        </button>

      </div>


      {/* Add/Edit Form */}

      {showForm && (
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-10">

          <h2 className="text-2xl font-bold text-green-800 mb-6">
            {editingEvent ? "Edit Event" : "Add New Event"}
          </h2>


          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Title */}

            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Event Title
              </label>

              <input
                type="text"
                required
                value={form.title}
                onChange={(e) =>
                  setForm({
                    ...form,
                    title: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Example: Maulid Nabiyyi 2027"
              />
            </div>


            {/* Date */}

            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Date
              </label>

              <input
                type="text"
                required
                value={form.date}
                onChange={(e) =>
                  setForm({
                    ...form,
                    date: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Example: 24 January 2027"
              />
            </div>


            {/* Location */}

            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Location
              </label>

              <input
                type="text"
                required
                value={form.location}
                onChange={(e) =>
                  setForm({
                    ...form,
                    location: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Example: Sabon Zongo, Accra"
              />
            </div>


            {/* Image */}

            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Event Image
              </label>

              <input
                type="text"
                required
                value={form.image}
                onChange={(e) =>
                  setForm({
                    ...form,
                    image: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                placeholder="/images/events/maulid-2027.jpg"
              />

              <p className="text-sm text-gray-500 mt-2">
                Enter the image path from your public folder.
              </p>
            </div>


            {/* Description */}

            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Description
              </label>

              <textarea
                required
                rows={5}
                value={form.description}
                onChange={(e) =>
                  setForm({
                    ...form,
                    description: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Write a description of the event..."
              />
            </div>


            {/* Status */}

            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Status
              </label>

              <select
                value={form.status}
                onChange={(e) =>
                  setForm({
                    ...form,
                    status: e.target.value as
                      | "Upcoming"
                      | "Past",
                  })
                }
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="Upcoming">
                  Upcoming
                </option>

                <option value="Past">
                  Past
                </option>
              </select>
            </div>


            {/* Gallery */}

            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Event Gallery
              </label>

              <textarea
                rows={5}
                value={form.gallery}
                onChange={(e) =>
                  setForm({
                    ...form,
                    gallery: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                placeholder={`/images/events/photo1.jpg
/images/events/photo2.jpg
/images/events/photo3.jpg`}
              />

              <p className="text-sm text-gray-500 mt-2">
                Put one image path on each line.
              </p>
            </div>


            {/* Buttons */}

            <div className="flex flex-wrap gap-3 pt-3">

              <button
                type="submit"
                className="bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition"
              >
                {editingEvent
                  ? "Update Event"
                  : "Create Event"}
              </button>

              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>

            </div>

          </form>

        </div>
      )}


      {/* Events List */}

      <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">

        <h2 className="text-2xl font-bold text-green-800 mb-6">
          All Events
        </h2>


        {loading ? (

          <p className="text-gray-600">
            Loading events...
          </p>

        ) : events.length === 0 ? (

          <div className="text-center py-12">

            <CalendarDays
              size={50}
              className="mx-auto text-gray-400 mb-4"
            />

            <p className="text-gray-600">
              No events have been added yet.
            </p>

          </div>

        ) : (

          <div className="space-y-6">

            {events.map((event) => (

              <div
                key={event._id}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >

                <div className="grid md:grid-cols-[220px_1fr]">

                  {/* Image */}

                  <div className="bg-gray-100">

                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 md:h-full object-cover"
                    />

                  </div>


                  {/* Content */}

                  <div className="p-6">

                    <div className="flex flex-wrap items-start justify-between gap-4">

                      <div>

                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                            event.status === "Upcoming"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {event.status}
                        </span>

                        <h3 className="text-2xl font-bold text-green-800">
                          {event.title}
                        </h3>

                      </div>


                      <div className="flex gap-2">

                        <button
                          onClick={() => startEdit(event)}
                          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                          <Pencil size={17} />
                          Edit
                        </button>

                        <button
                          onClick={() => deleteEvent(event._id)}
                          className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                        >
                          <Trash2 size={17} />
                          Delete
                        </button>

                      </div>

                    </div>


                    <div className="mt-4 space-y-2 text-gray-600">

                      <div className="flex items-center gap-2">
                        <CalendarDays size={18} />
                        <span>{event.date}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin size={18} />
                        <span>{event.location}</span>
                      </div>

                    </div>


                    <p className="text-gray-600 mt-4 leading-relaxed">
                      {event.description}
                    </p>

                    {event.gallery?.length > 0 && (
                      <p className="text-sm text-gray-500 mt-4">
                        Gallery: {event.gallery.length} image
                        {event.gallery.length === 1 ? "" : "s"}
                      </p>
                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}