"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle,
  ShieldCheck,
  ArrowLeft,
  RefreshCw,
} from "lucide-react";

type Member = {
  fullName: string;
  membershipId: string;
  membershipType?: string;
  status?: string;
  photo?: string;
  dateJoined?: string;
};

export default function VerifyMemberPage() {
  const params = useParams();

  const id = params.id as string;

  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function verifyMember() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`/api/verify/${id}`);

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.message || "Invalid membership ID"
          );
        }

        setMember(data.member);
      } catch (error) {
        console.error("Verification error:", error);

        setError(
          error instanceof Error
            ? error.message
            : "This membership could not be verified."
        );
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      verifyMember();
    }
  }, [id]);

  /* ----------------------------- */
  /* Loading */
  /* ----------------------------- */

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-lg p-10 text-center max-w-sm w-full">
          <RefreshCw
            size={40}
            className="mx-auto text-green-700 animate-spin mb-5"
          />

          <h1 className="text-xl font-bold text-gray-800">
            Verifying Membership
          </h1>

          <p className="text-gray-500 mt-2">
            Please wait while we verify this membership.
          </p>
        </div>
      </main>
    );
  }

  /* ----------------------------- */
  /* Invalid Member */
  /* ----------------------------- */

  if (!member) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">

        <div className="max-w-md w-full">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            {/* Header */}

            <div className="bg-green-900 text-white p-7 text-center">

              <img
                src="/images/logo.png"
                alt="Zawiyatu Shabaab Nasrullah"
                className="w-20 h-20 object-contain bg-white rounded-full p-2 mx-auto"
              />

              <h1 className="text-xl font-bold mt-4">
                Zawiyatu Shabaab Nasrullah
              </h1>

              <p className="text-green-200 text-sm mt-1">
                Membership Verification
              </p>

            </div>

            {/* Error */}

            <div className="p-8 text-center">

              <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto">

                <ShieldCheck
                  size={42}
                  className="text-red-600"
                />

              </div>

              <h2 className="text-2xl font-bold text-red-700 mt-6">
                Membership Not Verified
              </h2>

              <p className="text-gray-600 mt-3 leading-relaxed">
                {error ||
                  "This membership ID could not be verified."}
              </p>

              <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-4">

                <p className="text-xs text-gray-500">
                  Membership ID
                </p>

                <p className="font-bold text-gray-800 mt-1 break-all">
                  {id}
                </p>

              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-2 mt-7 bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800 transition"
              >
                <ArrowLeft size={18} />
                Back to Website
              </Link>

            </div>

          </div>

        </div>

      </main>
    );
  }

  /* ----------------------------- */
  /* Verified Member */
  /* ----------------------------- */

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-5">

      <div className="max-w-md mx-auto">

        {/* Main Verification Card */}

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Header */}

          <div className="bg-green-900 text-white px-6 py-7 text-center">

            <img
              src="/images/logo.png"
              alt="Zawiyatu Shabaab Nasrullah"
              className="w-20 h-20 object-contain bg-white rounded-full p-2 mx-auto"
            />

            <h1 className="text-xl font-bold mt-4">
              Zawiyatu Shabaab Nasrullah
            </h1>

            <p className="text-green-200 text-sm mt-1">
              Official Membership Verification
            </p>

          </div>


          {/* Verification Badge */}

          <div className="px-6 pt-7 text-center">

            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm">

              <CheckCircle size={18} />

              Verified Member

            </div>

          </div>


          {/* Member Photo */}

          <div className="flex justify-center mt-6">

            {member.photo ? (

              <img
                src={member.photo}
                alt={member.fullName}
                className="w-32 h-32 rounded-full object-cover border-4 border-green-700 shadow-md"
              />

            ) : (

              <div className="w-32 h-32 rounded-full bg-green-100 border-4 border-green-700 flex items-center justify-center">

                <ShieldCheck
                  size={55}
                  className="text-green-700"
                />

              </div>

            )}

          </div>


          {/* Name */}

          <div className="text-center px-6 mt-5">

            <h2 className="text-2xl font-bold text-green-900">
              {member.fullName}
            </h2>

            <p className="text-gray-500 mt-1">
              {member.membershipType || "Member"}
            </p>

          </div>


          {/* Membership ID */}

          <div className="mx-6 mt-6 bg-green-50 border border-green-100 rounded-2xl p-5 text-center">

            <p className="text-xs uppercase tracking-wider text-gray-500">
              Membership ID
            </p>

            <p className="text-xl font-bold text-green-800 mt-2 break-all">
              {member.membershipId}
            </p>

          </div>


          {/* Details */}

          <div className="px-6 py-6">

            <div className="border border-gray-100 rounded-2xl overflow-hidden">

              <div className="flex justify-between gap-4 px-5 py-4 border-b border-gray-100">

                <span className="text-gray-500 text-sm">
                  Membership Type
                </span>

                <span className="font-semibold text-gray-800 text-right">
                  {member.membershipType || "Member"}
                </span>

              </div>


              <div className="flex justify-between gap-4 px-5 py-4 border-b border-gray-100">

                <span className="text-gray-500 text-sm">
                  Date Joined
                </span>

                <span className="font-semibold text-gray-800 text-right">
                  {member.dateJoined || "—"}
                </span>

              </div>


              <div className="flex justify-between gap-4 px-5 py-4">

                <span className="text-gray-500 text-sm">
                  Status
                </span>

                <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">

                  <CheckCircle size={14} />

                  {member.status || "Active"}

                </span>

              </div>

            </div>

          </div>


          {/* Official Verification */}

          <div className="mx-6 mb-6 bg-green-900 rounded-2xl p-5 text-white text-center">

            <div className="flex justify-center mb-3">

              <div className="bg-white/10 p-3 rounded-full">

                <ShieldCheck size={28} />

              </div>

            </div>

            <h3 className="font-bold">
              Officially Verified
            </h3>

            <p className="text-green-200 text-xs mt-2 leading-relaxed">
              This membership has been verified against
              the official records of Zawiyatu Shabaab
              Nasrullah.
            </p>

          </div>


          {/* Footer */}

          <div className="border-t border-gray-100 px-6 py-4 text-center">

            <p className="text-xs text-gray-400">
              Zawiyatu Shabaab Nasrullah
            </p>

            <p className="text-[11px] text-gray-400 mt-1">
              Official Membership Verification System
            </p>

          </div>

        </div>


        {/* Back Button */}

        <div className="text-center mt-6">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-900"
          >
            <ArrowLeft size={17} />
            Return to Website
          </Link>

        </div>

      </div>

    </main>
  );
}