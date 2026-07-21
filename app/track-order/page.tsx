"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TrackOrderPage() {
  const router = useRouter();

  const [orderNumber, setOrderNumber] = useState("");

  function trackOrder() {
    if (!orderNumber.trim()) return;

    router.push(
      `/track-order/${encodeURIComponent(orderNumber)}`
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Track Your Order
        </h1>

        <p className="text-gray-600 mb-8">
          Enter your order number below to check its current status.
        </p>

        <input
          type="text"
          placeholder="Example: ZSN-20260721-0001"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 mb-6"
        />

        <button
          onClick={trackOrder}
          className="w-full bg-green-700 text-white py-3 rounded-full hover:bg-green-800 transition"
        >
          Track Order
        </button>

      </div>
    </main>
  );
}