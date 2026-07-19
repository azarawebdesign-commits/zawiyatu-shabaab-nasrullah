"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/styles.css";

const galleryImages = Array.from(
  { length: 456 },
  (_, i) => `/images/gallery/gallery-${i + 1}.jpg`
);

export default function GalleryPage() {
  const [open, setOpen] = useState(false);
const [index, setIndex] = useState(0);
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h1 className="text-4xl md:text-5xl font-bold text-green-800">
            Zawiyatu Shabaab Nasrullah Gallery
          </h1>

          <p className="mt-4 text-gray-600">
            Memories and moments from our programs and gatherings.
          </p>

        </div>


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {galleryImages.map((image, index) => (

            <motion.div
  key={image}
  onClick={() => {
    setIndex(index);
    setOpen(true);
  }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl shadow-md cursor-pointer"
            >

              <Image
                src={image}
                alt={`Maulid Gallery ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />

            </motion.div>
          

          ))}

        </div>
        <Lightbox
  open={open}
  close={() => setOpen(false)}
  index={index}
  slides={galleryImages.map((image) => ({
    src: image,
  }))}
  plugins={[Thumbnails, Counter]}
/>

      </div>

    </section>
  
  );
}