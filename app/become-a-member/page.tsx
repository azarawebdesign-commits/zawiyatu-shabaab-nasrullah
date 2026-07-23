"use client";

import { useState } from "react";
import Link from "next/link";

export default function BecomeMemberPage() {
  const [accepted, setAccepted] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 py-16">

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h1 className="text-5xl font-bold text-green-800 text-center">
            Become a Member
          </h1>

          <p className="text-center text-gray-600 mt-4 text-lg">
            Join the Zawiyatu Shabaab Nasrullah family and become part of a
            community dedicated to Islamic knowledge, spiritual growth,
            unity and service.
          </p>

          <div className="mt-12 space-y-10">

            <section>
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                Who Can Apply?
              </h2>

              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Any Muslim of good character.</li>
                <li>Must abide by the constitution and regulations of the organization.</li>
                <li>Must provide accurate registration information.</li>
                <li>Must complete the registration fee payment.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                Membership Benefits
              </h2>

              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Participation in official Zawiya programmes.</li>
                <li>Islamic educational activities.</li>
                <li>Official Membership Card.</li>
                <li>Digital Membership ID.</li>
                <li>QR Verified Membership Card.</li>
              </ul>
            </section>

            <section className="bg-green-50 rounded-2xl p-8">

              <h2 className="text-3xl font-bold text-center text-green-800">
                Registration Fee
              </h2>

              <p className="text-center text-5xl font-bold text-yellow-600 mt-4">
                GH₵ 200.00
              </p>

            </section>

            <section className="bg-red-50 border border-red-300 rounded-2xl p-8">

              <h2 className="text-2xl font-bold text-red-700">
                Important Notice
              </h2>

              <ul className="list-disc ml-6 mt-5 space-y-3 text-gray-700">

                <li>
                  Registration fee must be paid before accessing the application form.
                </li>

                <li>
                  Payment does not guarantee membership approval.
                </li>

                <li>
                  Every application is reviewed by the Executive Committee.
                </li>

                <li className="font-bold text-red-700">
                  Money paid for the registration form is NON-REFUNDABLE.
                </li>

              </ul>

            </section>

            <div className="bg-gray-100 rounded-2xl p-6">

              <label className="flex items-start gap-4">

                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-1 w-5 h-5"
                />

                <span className="text-gray-700">
                  I have carefully read and understood the membership
                  requirements, payment policy, and registration process.
                  I understand that the registration fee is
                  <strong> non-refundable</strong> and that payment does not
                  guarantee approval into the organization.
                </span>

              </label>

            </div>

            <div className="text-center">

              <Link href="/registration/payment">

                <button
                  disabled={!accepted}
                  className="bg-green-700 hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-10 py-4 rounded-full text-lg font-semibold transition"
                >
                  Continue to Payment →
                </button>

              </Link>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}