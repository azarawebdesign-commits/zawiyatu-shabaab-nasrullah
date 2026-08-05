"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { albums } from "@/lib/gallery-data";


export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-green-800">
            Gallery
          </h1>

          <p className="mt-4 text-gray-600">
            Browse our events and memories through organized photo albums.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {albums.map((album) => (
            <motion.div
              key={album.slug}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/gallery/${album.slug}`}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition">

                  <Image
                    src={album.cover}
                    alt={album.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-6">

                    <h2 className="text-2xl font-bold text-green-800">
                      {album.title}
                    </h2>

                    <p className="text-gray-600 mt-3">
                      {album.description}
                    </p>

                    <div className="mt-5 flex justify-between text-sm text-gray-500">
                      <span>📅 {album.date}</span>
                      <span>📷 {album.photos} Photos</span>
                    </div>

                  </div>

                </div>
              </Link>
            </motion.div>
          ))}

        </div>

      </div>
    </main>
  );
}