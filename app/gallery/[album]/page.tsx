"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

export default function AlbumPage() {
  const params = useParams();

  const album = params.album as string;

  const galleryImages = Array.from(
    { length: 456 },
    (_, i) => ({
      src: `/images/gallery/${album}/gallery-${i + 1}.jpg`,
    })
  );

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const albumTitle =
    album === "january-2026-annual-maulid"
      ? "January 2026 Annual Maulid"
      : album;

  return (
    <main className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold text-green-800">
            {albumTitle}
          </h1>

          <p className="mt-4 text-gray-600">
            Pictorial images from this event.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {galleryImages.map((image, i) => (

            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                setCurrentIndex(i);
                setOpen(true);
              }}
              className="overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >

              <Image
                src={image.src}
                alt={`${albumTitle} ${i + 1}`}
                width={500}
                height={350}
                className="w-full h-60 object-cover"
                loading="lazy"
              />

            </motion.div>

          ))}

        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={galleryImages}
          plugins={[Thumbnails, Counter]}
        />

      </div>

    </main>
  );
}