"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  async function placeOrder() {
    if (!customerName || !phone || !address) {
      toast.error("Please fill all details");
      return;
    }

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerName,
          phone,
          address,
          items: cart.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            size: item.size,
          })),
          total,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Order placed successfully!");

        clearCart();

        router.push(
          `/order-success?orderNumber=${data.orderNumber}`
        );
      } else {
        toast.error("Failed to place order");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-green-800 mb-10">
          Checkout
        </h1>

        <div className="bg-white rounded-2xl shadow p-8">

          <input
            type="text"
            placeholder="Full Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 mb-4"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 mb-4"
          />

          <textarea
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 mb-6"
            rows={4}
          />

          <h2 className="text-2xl font-bold mb-6">
            Total: ₵{total}
          </h2>

          <button
            onClick={placeOrder}
            className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition"
          >
            Place Order
          </button>

        </div>
      </div>
    </main>
  );
}