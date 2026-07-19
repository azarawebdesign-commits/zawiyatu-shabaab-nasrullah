"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">

      <div className="text-center max-w-lg">

        <Image
          src="/images/logo.png"
          alt="Zawiyatu Shabaab Nasrullah Logo"
          width={120}
          height={120}
          className="mx-auto mb-6"
        />

        <h1 className="text-6xl font-bold text-green-800">
          404
        </h1>

        <h2 className="text-2xl font-bold text-gray-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-4">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition"
        >
          Return Home
        </Link>

      </div>

    </main>
  );
}