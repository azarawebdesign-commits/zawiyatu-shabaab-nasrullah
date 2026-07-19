"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-green-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          About Zawiyatu Shabaab Nasrullah
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-green-100 text-lg">
          A community dedicated to faith, knowledge, unity, worship, and service
          to humanity.
        </p>
      </section>


      {/* History */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Our History
          </h2>

          <p className="text-gray-700 leading-8">
            Zawiyatu Shabaab Nasrullah is an Islamic community established
            with the aim of promoting Islamic knowledge, spiritual growth,
            unity, and service among Muslims and the wider community.
            Through religious gatherings, teachings, and community programs,
            the Zawiya continues to create an environment of learning,
            brotherhood, and devotion.
          </p>

        </motion.div>

      </section>


      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-700 leading-8">
              To spread Islamic knowledge, encourage worship, strengthen
              unity among Muslims, and support the spiritual and social
              development of our community.
            </p>
          </div>


          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Our Vision
            </h2>

            <p className="text-gray-700 leading-8">
              To become a trusted Islamic institution that inspires faith,
              knowledge, unity, and positive community impact.
            </p>
          </div>

        </div>

      </section>


      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-green-800 text-center mb-10">
          Our Core Values
        </h2>


        <div className="grid md:grid-cols-4 gap-6">

          {[
            "Knowledge",
            "Unity",
            "Worship",
            "Service"
          ].map((value) => (

            <div
              key={value}
              className="bg-white shadow-md rounded-xl p-6 text-center border"
            >
              <h3 className="text-xl font-semibold text-green-700">
                {value}
              </h3>
            </div>

          ))}

        </div>

      </section>

    </main>
  );
}