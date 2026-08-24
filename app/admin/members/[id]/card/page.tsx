"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { QRCodeCanvas } from "qrcode.react";
import { ArrowLeft, Printer } from "lucide-react";
import Link from "next/link";

type Member = {
  _id: string;
  fullName: string;
  phone?: string;
  email?: string;
  gender?: string;
  dateOfBirth?: string;
  address?: string;
  occupation?: string;
  dateJoined?: string;
  membershipType?: string;
  photo?: string;
  status?: string;
  membershipId?: string;
  applicationReference?: string;
};

export default function MembershipCardPage() {
  const params = useParams();

  const id = params.id as string;

  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMember() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`/api/members/${id}`);

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.message || "Member not found"
          );
        }

        setMember(data.member);
      } catch (error) {
        console.error("Membership Card Error:", error);

        setError(
          error instanceof Error
            ? error.message
            : "Failed to load membership card"
        );
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchMember();
    }
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow p-8 text-center">
          <p className="text-gray-600">
            Loading membership card...
          </p>
        </div>
      </main>
    );
  }

  if (error || !member) {
    return (
      <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow p-8 text-center max-w-md">
          <h1 className="text-xl font-bold text-red-700 mb-3">
            Unable to Load Card
          </h1>

          <p className="text-gray-600 mb-6">
            {error || "Member not found."}
          </p>

          <Link
            href={`/admin/members/${id}`}
            className="inline-flex items-center gap-2 bg-green-700 text-white px-5 py-3 rounded-xl hover:bg-green-800"
          >
            <ArrowLeft size={18} />
            Back to Member
          </Link>
        </div>
      </main>
    );
  }

  const membershipId =
    member.membershipId || "NOT ASSIGNED";

  const verificationUrl =
    `${process.env.NEXT_PUBLIC_URL}/verify/${membershipId}`;

  return (
    <>
      <main className="min-h-screen bg-gray-100 p-6 md:p-10">

        {/* Top Controls */}

        <div className="max-w-4xl mx-auto mb-8 no-print">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <Link
              href={`/admin/members/${id}`}
              className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-900"
            >
              <ArrowLeft size={19} />
              Back to Member
            </Link>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800 transition"
            >
              <Printer size={19} />
              Print Membership Card
            </button>

          </div>

        </div>


        {/* Membership Card */}

        <div className="flex justify-center">

          <div
            id="membership-card"
            className="membership-card bg-white rounded-[28px] overflow-hidden shadow-2xl border border-gray-200"
          >

            {/* Header */}

            <div className="card-header bg-green-900 text-white px-6 py-5">

              <div className="flex items-center gap-4">

                <img
                  src="/images/logo.png"
                  alt="Zawiyatu Shabaab Nasrullah Logo"
                  className="w-16 h-16 object-contain bg-white rounded-full p-1"
                />

                <div className="flex-1">

                  <h1 className="text-lg font-bold leading-tight">
                    Zawiyatu Shabaab Nasrullah
                  </h1>

                  <p className="text-green-200 text-sm mt-1">
                    Official Membership Card
                  </p>

                </div>

              </div>

            </div>


            {/* Card Body */}

            <div className="p-6">

              <div className="flex gap-5">

                {/* Photo */}

                <div className="shrink-0">

                  {member.photo ? (

                    <img
                      src={member.photo}
                      alt={member.fullName}
                      className="w-28 h-32 object-cover rounded-xl border-4 border-green-700"
                    />

                  ) : (

                    <div className="w-28 h-32 rounded-xl border-4 border-green-700 bg-green-50 flex items-center justify-center text-green-700 text-xs font-semibold text-center p-2">
                      No Photo
                    </div>

                  )}

                </div>


                {/* Member Information */}

                <div className="flex-1 min-w-0">

                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Member Name
                  </p>

                  <h2 className="text-xl font-bold text-green-900 leading-tight break-words">
                    {member.fullName}
                  </h2>

                  <div className="mt-3">

                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Membership ID
                    </p>

                    <p className="font-bold text-green-700">
                      {membershipId}
                    </p>

                  </div>

                  <div className="mt-3">

                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Membership Type
                    </p>

                    <p className="font-semibold text-gray-800">
                      {member.membershipType || "Member"}
                    </p>

                  </div>

                </div>

              </div>


              {/* Details */}

              <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-6 border-t border-gray-200 pt-5">

                <div>

                  <p className="text-xs text-gray-500">
                    Date Joined
                  </p>

                  <p className="text-sm font-semibold text-gray-800">
                    {member.dateJoined || "—"}
                  </p>

                </div>


                <div>

                  <p className="text-xs text-gray-500">
                    Status
                  </p>

                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${
                      member.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {member.status || "Pending"}
                  </span>

                </div>


                <div>

                  <p className="text-xs text-gray-500">
                    Phone
                  </p>

                  <p className="text-sm font-semibold text-gray-800 break-all">
                    {member.phone || "—"}
                  </p>

                </div>


                <div>

                  <p className="text-xs text-gray-500">
                    Gender
                  </p>

                  <p className="text-sm font-semibold text-gray-800">
                    {member.gender || "—"}
                  </p>

                </div>

              </div>


              {/* QR Section */}

              <div className="mt-6 border-t border-gray-200 pt-5 flex items-center gap-5">

                <div className="bg-white border border-gray-200 rounded-xl p-2 shrink-0">

                  <QRCodeCanvas
                    value={verificationUrl}
                    size={100}
                    level="H"
                    includeMargin
                  />

                </div>


                <div>

                  <p className="font-bold text-green-900">
                    Verify Membership
                  </p>

                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Scan the QR code to verify
                    this member's official
                    membership status.
                  </p>

                  <p className="text-[10px] text-gray-400 mt-2 break-all">
                    {verificationUrl}
                  </p>

                </div>

              </div>

            </div>


            {/* Footer */}

            <div className="bg-green-900 text-white px-6 py-3">

              <div className="flex items-center justify-between gap-4">

                <p className="text-xs text-green-200">
                  Zawiyatu Shabaab Nasrullah
                </p>

                <p className="text-xs font-semibold">
                  Official Member
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* Print Note */}

        <p className="text-center text-gray-500 text-sm mt-6 no-print">
          Print this card using your browser's print dialog.
        </p>

      </main>


      {/* Print Styling */}

      <style jsx global>{`

        .membership-card {
          width: 420px;
          max-width: 100%;
        }


        @media print {

          @page {
            size: auto;
            margin: 0;
          }


          html,
          body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
          }


          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }


          .no-print {
            display: none !important;
          }


          main {
            min-height: auto !important;
            padding: 0 !important;
            margin: 0 !important;
            background: white !important;
          }


          #membership-card {
            width: 420px !important;
            margin: 20px auto !important;
            box-shadow: none !important;
            border: 1px solid #d1d5db !important;
            border-radius: 20px !important;
          }


          .card-header,
          #membership-card > div:last-child {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

        }

      `}</style>
    </>
  );
}