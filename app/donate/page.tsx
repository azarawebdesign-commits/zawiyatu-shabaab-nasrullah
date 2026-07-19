"use client";

import { HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export default function DonatePage() {
  return (
    <section className="min-h-screen py-20 bg-gray-50">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <HeartHandshake
            size={70}
            className="mx-auto mb-6 text-[#d4af37]"
          />

          <h1 className="text-4xl md:text-5xl font-bold text-green-800">
            Support Zawiyatu Shabaab Nasrullah
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Your contributions help us continue our religious programs,
            community activities, and service to the Ummah.
          </p>


          <div className="mt-10 bg-white p-8 rounded-2xl shadow-md text-left">

  <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
    How Your Donation Helps
  </h2>

  <ul className="space-y-3 text-gray-600">

    <li>
      🕌 Supporting Maulid programs and religious gatherings
    </li>

    <li>
      📖 Promoting Islamic learning and education
    </li>

    <li>
      🤝 Helping community activities and services
    </li>

    <li>
      🌙 Supporting Zawiya programs and spiritual activities
    </li>

  </ul>


  <div className="mt-8 bg-green-50 p-6 rounded-xl">

    <h3 className="text-xl font-bold text-green-800 mb-3">
      Mobile Money Donation
    </h3>

    <p className="text-gray-700">
      You can support Zawiyatu Shabaab Nasrullah through Mobile Money.
    </p>

    <p className="mt-3 font-semibold text-green-800">
      Contact MTN: +233 55 748 1721
      Contact Airtel/Tigo: 0560765521
      Account Name: Abdul Nasir Yussif
    </p>

  </div>


  <p className="mt-6 text-sm text-gray-500 text-center">
    Official bank donation details will be added after the organization
    registration process is completed.
  </p>

</div>

        </motion.div>

      </div>

    </section>
  );
}