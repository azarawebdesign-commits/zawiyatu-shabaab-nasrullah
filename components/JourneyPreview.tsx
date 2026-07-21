import Link from "next/link";

export default function JourneyPreview() {
  return (
    <section className="py-20 bg-green-50">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-green-800 mb-6">
          Our Journey
        </h2>


        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed mb-8">

          Founded on <strong>24th September 2023</strong>,
          Zawiyatu Shabaab Nasrullah was established with a
          vision to serve Allah and His Messenger Prophet
          Muhammad ﷺ and to share the teachings of
          Sheikh Ibrahima Nyass (RA).

          From a shared vision among dedicated members,
          the Zawiya continues to grow through faith,
          unity, learning, and service.

        </p>


        <Link
          href="/journey"
          className="inline-block bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition"
        >
          Read Our Full Story
        </Link>


      </div>

    </section>
  );
}