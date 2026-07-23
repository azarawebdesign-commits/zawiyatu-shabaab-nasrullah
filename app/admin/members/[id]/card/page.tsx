"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { QRCodeCanvas } from "qrcode.react";

export default function MembershipCardPage() {
  const params = useParams();
  const id = params.id as string;

  const [member, setMember] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMember() {
      try {
        const response = await fetch(`/api/members/${id}`);
        const data = await response.json();

        if (data.success) {
          setMember(data.member);
        }
      } catch (error) {
        console.error(error);
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
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading membership card...</p>
      </main>
    );
  }

  if (!member) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-600">Member not found.</p>
      </main>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-gray-100 p-8">

        <div className="max-w-sm mx-auto">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border">

            {/* Header */}

            <div className="bg-green-800 text-white p-5 text-center">

              <img
                src="/logo.png"
                alt="Zawiyatu Shabaab Nasrullah"
                className="w-16 h-16 mx-auto object-contain"
              />

              <h1 className="font-bold text-lg mt-2">
                Zawiyatu Shabaab Nasrullah
              </h1>

              <p className="text-sm">
                Official Membership Card
              </p>

            </div>

            {/* Member */}

            <div className="p-6 text-center">

              {member.photo && (
                <img
                  src={member.photo}
                  alt={member.fullName}
                  className="w-28 h-28 rounded-full object-cover border-4 border-green-700 mx-auto"
                />
              )}

              <h2 className="text-xl font-bold text-green-800 mt-4">
                {member.fullName}
              </h2>

              <p className="text-gray-600 mt-1">
                {member.membershipType}
              </p>

              <div className="bg-green-50 rounded-xl p-4 mt-5">

                <p className="text-sm">
                  Membership ID
                </p>

                <p className="text-xl font-bold text-green-800">
                  {member.membershipId}
                </p>

              </div>

              <div className="mt-6 flex justify-center">

                <QRCodeCanvas
  value={`${process.env.NEXT_PUBLIC_URL}/verify/${member.membershipId}`}
  size={120}
/>

              </div>

              <div className="text-left mt-6 space-y-2 text-sm">

                <p>
                  <strong>Date Joined:</strong> {member.dateJoined}
                </p>

                <p>
                  <strong>Status:</strong> {member.status}
                </p>

              </div>

            </div>

          </div>

          {/* Buttons */}

          <div className="flex justify-center gap-4 mt-8 no-print">

            <button
              onClick={() => window.print()}
              className="bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800"
            >
              Print Membership Card
            </button>

          </div>

        </div>

      </main>

      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }

          .no-print {
            display: none !important;
          }

          main {
            padding: 0 !important;
            background: white !important;
          }

          .shadow-xl {
            box-shadow: none !important;
          }
        }
      `}</style>
    </>
  );
}