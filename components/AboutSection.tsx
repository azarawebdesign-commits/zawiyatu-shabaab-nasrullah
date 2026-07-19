"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
          <Image
            src="/images/about-zawiya.jpg"
            alt="Zawiyatu Shabaab Nasrullah"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>


        {/* Content */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>

          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            About Zawiyatu Shabaab Nasrullah
          </h2>


          <p className="text-gray-700 leading-relaxed mb-6">
            Zawiyatu Shabaab Nasrullah is a community dedicated to promoting
            Islamic knowledge, spiritual growth, unity, and service. Through
            religious programs, gatherings, and community activities, the
            Zawiya continues to inspire and connect people.
          </p>


          <p className="text-gray-700 leading-relaxed mb-8">
            Our mission is to preserve Islamic values, encourage learning,
            and create a platform where members of the community can grow
            together in faith and brotherhood.
          </p>

          <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="grid sm:grid-cols-3 gap-4 mb-8"
>

  <div className="bg-green-50 p-5 rounded-xl shadow-sm">
    <h3 className="font-bold text-green-800 mb-2">
      Our Mission
    </h3>
    <p className="text-sm text-gray-600">
      Promoting Islamic knowledge, unity, and spiritual growth.
    </p>
  </div>


  <div className="bg-green-50 p-5 rounded-xl shadow-sm">
    <h3 className="font-bold text-green-800 mb-2">
      Our Vision
    </h3>
    <p className="text-sm text-gray-600">
      Building a strong community guided by faith and service.
    </p>
  </div>


  <div className="bg-green-50 p-5 rounded-xl shadow-sm">
    <h3 className="font-bold text-green-800 mb-2">
      Our Values
    </h3>
    <p className="text-sm text-gray-600">
      Knowledge, brotherhood, worship, and helping others.
    </p>
  </div>

</motion.div>


          <button className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition">
            Read More
          </button>

        </motion.div>

      </div>

    </section>
  );
}