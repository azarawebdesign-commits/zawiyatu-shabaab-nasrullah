"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            Contact Us
          </h2>

          <p className="mt-4 text-gray-600">
            Get in touch with Zawiyatu Shabaab Nasrullah.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-8">


          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-2xl shadow-md text-center"
          >

            <MapPin
              size={40}
              className="mx-auto mb-4 text-[#d4af37]"
            />

            <h3 className="text-xl font-bold text-green-800 mb-2">
              Location
            </h3>

            <p className="text-gray-600">
              Sabon Zongo, Accra, Ghana
            </p>

          </motion.div>


          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-2xl shadow-md text-center"
          >

            <Phone
              size={40}
              className="mx-auto mb-4 text-[#d4af37]"
            />

            <h3 className="text-xl font-bold text-green-800 mb-2">
              Phone
            </h3>

            <p className="text-gray-600">
              +233 55 748 1721
            </p>

          </motion.div>


          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-2xl shadow-md text-center"
          >

            <Mail
              size={40}
              className="mx-auto mb-4 text-[#d4af37]"
            />

            <h3 className="text-xl font-bold text-green-800 mb-2">
              Email
            </h3>

            <p className="text-gray-600 break-all">
              zawiyatushabaabnasrullah@gmail.com
            </p>

          </motion.div>


        </div>

      </div>

    </section>
  );
}