"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/maulid-2026.jpg"
        alt="Zawiyatu Shabaab Nasrullah Annual Maulid"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>


      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6 max-w-4xl"
      >

        <motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <Image
    src="/images/logo.png"
    alt="Zawiyatu Shabaab Nasrullah Logo"
    width={120}
    height={120}
    className="mx-auto mb-6"
  />
</motion.div>


        <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="text-4xl md:text-6xl font-bold mb-6 text-[#d4af37]"
>
  Zawiyatu Shabaab Nasrullah
</motion.h1>


        <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="text-lg md:text-xl mb-8"
>
  Connecting hearts through faith, knowledge, and service.
  Welcome to our official website.
</motion.p>


        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.7 }}
  className="flex flex-col sm:flex-row justify-center gap-4"
>

          <a
  href="#about"
  className="bg-[#d4af37] text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition shadow-lg"
>
  Explore Our Zawiya
</a>


          <a
  href="#events"
  className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-[#14532d] transition backdrop-blur-sm"
>
  Upcoming Events
</a>

        </motion.div>

      </motion.div>

    </section>
  );
}