"use client";

import { useState } from "react";
import { Copy, MessageCircle, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function DonationFormPage() {
  const [form, setForm] = useState({
    donorName: "",
    email: "",
    phone: "",
    amount: "",
    purpose: "General Support",
    paymentMethod: "Paystack",
  });

  const [loading, setLoading] = useState(false);

  const copyNumber = async () => {
    await navigator.clipboard.writeText("+233557481721");
    toast.success("MTN Mobile Money number copied!");
  };

  async function payWithPaystack() {
    if (!form.donorName || !form.phone || !form.amount) {
      toast.error("Please fill in your name, phone number and amount.");
      return;
    }

    const amount = Number(form.amount);

    if (!Number.isFinite(amount) || amount <= 0) {
      toast.error("Please enter a valid donation amount.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "/api/donations/paystack",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            donorName: form.donorName,
            email: form.email,
            phone: form.phone,
            amount,
            purpose: form.purpose,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        toast.error(
          data.message ||
            "Unable to initialize donation payment."
        );

        setLoading(false);
        return;
      }

      window.location.href = data.authorizationUrl;
    } catch (error) {
      console.error(error);

      toast.error(
        "Something went wrong while starting the payment."
      );

      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="text-center">

            <HeartHandshake
              size={70}
              className="mx-auto mb-6 text-[#d4af37]"
            />

            <h1 className="text-4xl md:text-5xl font-bold text-green-800">
              Make A Donation
            </h1>

            <p className="mt-5 text-gray-600">
              Your support helps Zawiyatu Shabaab Nasrullah
              continue its programs.
            </p>

          </div>


          {/* DONATION FORM */}

          <div className="mt-10 bg-white rounded-3xl shadow p-8">

            <h2 className="text-2xl font-bold text-green-800 mb-6">
              Donation Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                placeholder="Full Name"
                value={form.donorName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    donorName: e.target.value,
                  })
                }
                className="border rounded-xl p-3"
              />

              <input
                placeholder="Email Address (optional)"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                className="border rounded-xl p-3"
              />

              <input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
                className="border rounded-xl p-3"
              />

              <input
                placeholder="Amount (GHS)"
                type="number"
                min="1"
                value={form.amount}
                onChange={(e) =>
                  setForm({
                    ...form,
                    amount: e.target.value,
                  })
                }
                className="border rounded-xl p-3"
              />

              <select
                value={form.purpose}
                onChange={(e) =>
                  setForm({
                    ...form,
                    purpose: e.target.value,
                  })
                }
                className="border rounded-xl p-3 md:col-span-2"
              >
                <option>General Support</option>
                <option>Maulid Nabiyyi</option>
                <option>Ramadan Programs</option>
                <option>Education</option>
                <option>Community Service</option>
                <option>Zawiya Development</option>
              </select>

            </div>


            <button
              onClick={payWithPaystack}
              disabled={loading}
              className="mt-6 w-full bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading
                ? "Connecting to Paystack..."
                : "Donate with Paystack"}
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Secure payment powered by Paystack
            </p>

          </div>


          {/* MANUAL PAYMENT */}

          <div className="mt-8 bg-green-50 rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-green-800 mb-5">
              Send Payment Manually
            </h2>

            <p>
              MTN Mobile Money:
              <strong> +233 55 748 1721</strong>
            </p>

            <p className="mt-3">
              AirtelTigo Money:
              <strong> +233 56 076 5521</strong>
            </p>

            <p className="mt-3">
              Account Name:
              <strong> Abdul Nasir Yussif</strong>
            </p>


            <div className="mt-6 flex flex-col md:flex-row gap-4">

              <button
                onClick={copyNumber}
                className="flex items-center justify-center gap-2 bg-green-700 text-white px-6 py-3 rounded-full"
              >
                <Copy size={18} />
                Copy MTN Number
              </button>


              <a
                href="https://wa.me/233557481721"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

            </div>

          </div>

        </motion.div>
      </div>
    </main>
  );
}