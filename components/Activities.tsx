"use client"

import { motion } from "framer-motion";
import {
  BookOpen,
  Moon,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

const activities = [
  {
    title: "Islamic Lectures",
    description:
      "Regular lectures and gatherings focused on Islamic knowledge and spiritual development.",
    icon: BookOpen,
  },
  {
    title: "Qur’an & Religious Education",
    description:
      "Promoting learning, understanding, and teaching of the Qur’an and Islamic teachings.",
    icon: GraduationCap,
  },
  {
    title: "Maulid Programs",
    description:
      "Organizing Maulid gatherings and programs that bring the community together.",
    icon: Moon,
  },
  {
    title: "Community Service",
    description:
      "Supporting and serving the community through unity and charitable activities.",
    icon: HeartHandshake,
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            Our Activities
          </h2>

          <p className="mt-4 text-gray-600">
            Discover the programs and services of Zawiyatu Shabaab Nasrullah.
          </p>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <motion.div
  key={activity.title}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  whileHover={{ y: -8 }}
  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
>

                <Icon
                  size={45}
                  className="text-[#d4af37] mb-5"
                />

                <h3 className="text-xl font-bold text-green-800 mb-3">
                  {activity.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}