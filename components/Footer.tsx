"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#14532d] text-white py-12"
    >

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            Zawiyatu Shabaab Nasrullah
          </h2>

          <p className="mt-4 text-green-100">
            Serving the Ummah through Knowledge, Unity and Worship.
          </p>

          <div className="flex gap-4 mt-6">

            <a
              href="https://www.facebook.com/share/1DTsJxQDHx/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4af37] transition"
            >
              <FaFacebook size={28} />
            </a>

            <a
              href="https://www.tiktok.com/@zawiyatushabaabnasrullah?_r=1&_t=ZS-989MnDwC5s0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4af37] transition"
            >
              <FaTiktok size={28} />
            </a>

            <a
              href="https://youtube.com/@zawiyatushabaabnasrullah?si=L_t0b3194yRoseTc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4af37] transition"
            >
              <FaYoutube size={28} />
            </a>

          </div>

        </div>


        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">

            <li>
              <Link href="/#home" className="hover:text-[#d4af37] transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/#about" className="hover:text-[#d4af37] transition">
                About
              </Link>
            </li>

            <li>
              <Link href="/#activities" className="hover:text-[#d4af37] transition">
                Activities
              </Link>
            </li>

            <li>
              <Link href="/#events" className="hover:text-[#d4af37] transition">
                Events
              </Link>
            </li>

            <li>
              <Link href="/gallery" className="hover:text-[#d4af37] transition">
                Gallery
              </Link>
            </li>

            <li>
              <Link href="/donate" className="hover:text-[#d4af37] transition">
                Donate
              </Link>
            </li>

          </ul>

        </div>


        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p>📍 Penny Wise, Sabon Zongo, Accra, Ghana</p>
          <p>📞 +233 55 748 1721</p>
          <p>✉️ zawiyatushabaabnasrullah@gmail.com</p>
        </div>

      </div>


      <div className="border-t border-green-700 mt-10 pt-6 text-center text-green-200">
        ©️ 2026 Zawiyatu Shabaab Nasrullah. All Rights Reserved.
      </div>

      <div className="border-t border-green-700 mt-10 pt-6 text-center text-green-200">
        Developed by THE AZARA STUDIO
      </div>

    </motion.footer>
  );
}