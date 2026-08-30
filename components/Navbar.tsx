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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
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
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">

          <Link
            href="/#home"
            className="text-gray-700 hover:text-green-700"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-gray-700 hover:text-green-700"
          >
            About
          </Link>

          <Link
            href="/leadership"
            className="text-gray-700 hover:text-green-700"
          >
            Leadership
          </Link>

          <Link
            href="/journey"
            className="text-gray-700 hover:text-green-700"
          >
            Our Journey
          </Link>

          {/* Tijaniyya */}
          <Link
            href="/tijaniyya"
            className="text-gray-700 hover:text-green-700"
          >
            Tijaniyya
          </Link>

          <Link
            href="/activities"
            className="text-gray-700 hover:text-green-700"
          >
            Activities
          </Link>

          <Link
            href="/events"
            className="text-gray-700 hover:text-green-700"
          >
            Events
          </Link>

          <Link
            href="/gallery"
            className="text-gray-700 hover:text-green-700"
          >
            Gallery
          </Link>

          <Link
            href="/store"
            className="text-gray-700 hover:text-green-700"
          >
            Store
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative text-gray-700 hover:text-green-700"
          >
            <ShoppingCart size={24} />

            {cartCount > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            href="/registration"
            className="text-gray-700 hover:text-green-700 font-medium"
          >
            Become a Member
          </Link>

          

          <Link
            href="/contact"
            className="text-gray-700 hover:text-green-700"
          >
            Contact
          </Link>

          {/* Donate */}
          <Link
            href="/donate"
            className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-green-800"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-white shadow-lg px-6 py-6 flex flex-col gap-5 md:hidden"
            >

              <Link href="/#home" onClick={closeMenu}>
                Home
              </Link>

              <Link href="/about" onClick={closeMenu}>
                About
              </Link>

              <Link href="/leadership" onClick={closeMenu}>
                Leadership
              </Link>

              <Link href="/journey" onClick={closeMenu}>
                Our Journey
              </Link>

              {/* Tijaniyya */}
              <Link href="/tijaniyya" onClick={closeMenu}>
                Tijaniyya
              </Link>

              <Link href="/activities" onClick={closeMenu}>
                Activities
              </Link>

              <Link href="/events" onClick={closeMenu}>
                Events
              </Link>

              <Link href="/gallery" onClick={closeMenu}>
                Gallery
              </Link>

              <Link href="/store" onClick={closeMenu}>
                Store
              </Link>


              {/* Cart */}
              <Link
                href="/cart"
                onClick={closeMenu}
                className="flex items-center gap-3"
              >
                <ShoppingCart size={22} />

                Cart

                {cartCount > 0 && (
                  <span className="bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link href="/registration" onClick={closeMenu}>
                Become a Member
              </Link>

              

              <Link href="/contact" onClick={closeMenu}>
                Contact
              </Link>

              {/* Donate */}
              <Link
                href="/donate"
                onClick={closeMenu}
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
