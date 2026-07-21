"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = galleryImages.map((image) => ({
    src: image,
  }));

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            Our Gallery
          </h2>

          <p className="mt-4 text-gray-600">
            Moments and memories from Zawiyatu Shabaab Nasrullah.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-2xl shadow-md cursor-pointer"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <Image
                src={image}
                alt={`Gallery image ${i + 1}`}
                width={500}
                height={400}
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-block bg-[#166534] text-white px-8 py-3 rounded-full hover:bg-[#14532d] transition shadow-md"
          >
            View Full Gallery
          </Link>
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
        />
      </div>
    </section>
  );
}