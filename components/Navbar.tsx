"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();

const cartCount = cart.reduce(
  (total, item) => total + item.quantity,
  0
);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Zawiyatu Shabaab Nasrullah Logo"
            width={60}
            height={60}
          />

          <div>
            <h1 className="text-xl font-bold text-green-800">
              Zawiyatu Shabaab Nasrullah
            </h1>

            <p className="text-sm text-gray-600">
              Official Website
            </p>
          </div>
        </div>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">

          <Link href="/#home" className="text-gray-700 hover:text-green-700">
            Home
          </Link>

          <Link href="/about" className="text-gray-700 hover:text-green-700">
            About
          </Link>

          <Link href="/#activities" className="text-gray-700 hover:text-green-700">
            Activities
          </Link>

          <Link href="/#events" className="text-gray-700 hover:text-green-700">
            Events
          </Link>

          <Link href="/gallery" className="text-gray-700 hover:text-green-700">
            Gallery
          </Link>

          <Link href="/store" className="text-gray-700 hover:text-green-700">
  Store
</Link>

<Link href="/cart" className="text-gray-700 hover:text-green-700">
  🛒 Cart ({cartCount})
</Link>


          {/* Cart */}
          <Link
            href="/cart"
            className="flex items-center gap-2 text-gray-700 hover:text-green-700"
          >
            <ShoppingCart size={20} />
            Cart
          </Link>


          <Link href="/#footer" className="text-gray-700 hover:text-green-700">
            Contact
          </Link>


          <Link
            href="/donate"
            className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition"
          >
            Donate
          </Link>

        </div>



        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-green-800"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>



        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-white shadow-lg px-6 py-6 flex flex-col gap-5 md:hidden"
            >


              <Link href="/#home" onClick={() => setMenuOpen(false)}>
                Home
              </Link>

              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>

              <Link href="/#activities" onClick={() => setMenuOpen(false)}>
                Activities
              </Link>

              <Link href="/#events" onClick={() => setMenuOpen(false)}>
                Events
              </Link>

              <Link href="/gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </Link>


              <Link href="/store" className="text-gray-700 hover:text-green-700">
  Store
</Link>

<Link href="/cart" className="text-gray-700 hover:text-green-700">
  🛒 Cart ({cartCount})
</Link>


              {/* Mobile Cart */}
              <Link
                href="/cart"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <ShoppingCart size={20} />
                Cart
              </Link>


              <Link href="/#footer" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>


              <Link
                href="/donate"
                onClick={() => setMenuOpen(false)}
                className="bg-green-700 text-white px-5 py-2 rounded-full text-center"
              >
                Donate
              </Link>


            </motion.div>

          )}
        </AnimatePresence>

      </nav>
    </header>
  );
}