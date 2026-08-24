"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function DonationPaymentSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const reference = searchParams.get("reference");

  const [message, setMessage] = useState(
    "Verifying your donation, please wait..."
  );

  useEffect(() => {
    async function verifyDonation() {
      if (!reference) {
        setMessage("Invalid donation payment information.");
        return;
      }

      try {
        const response = await fetch(
          "/api/donations/paystack/verify",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              reference,
            }),
          }
        );

        const data = await response.json();

        if (data.success) {
          setMessage(
            "Your donation has been successfully received. Thank you for supporting Zawiyatu Shabaab Nasrullah."
          );

          setTimeout(() => {
            router.push("/donate");
          }, 3000);
        } else {
          setMessage(
            data.message ||
              "We could not confirm your donation payment yet."
          );
        }
      } catch (error) {
        console.error(error);

        setMessage(
          "Unable to verify your donation payment. Please contact us if your account was charged."
        );
      }
    }

    verifyDonation();
  }, [reference, router]);

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="bg-white shadow-xl rounded-3xl p-10 text-center max-w-md">
        <div className="text-5xl mb-5">❤️</div>

        <h1 className="text-2xl font-bold text-green-800 mb-4">
          Donation Payment
        </h1>

        <p className="text-gray-600">
          {message}
        </p>
      </div>
    </main>
  );
}