"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ApplicationDetailsPage() {

  const { id } = useParams();
  const router = useRouter();

  const [member, setMember] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadApplication() {

      try {

        const response = await fetch(`/api/admin/applications/${id}`);

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
      loadApplication();
    }

  }, [id]);

  async function approveMember() {

    const response = await fetch(
      `/api/admin/applications/${id}/approve`,
      {
        method: "POST",
      }
    );

    const data = await response.json();

    if (data.success) {

      alert("Member approved successfully.");

      router.push("/admin/applications");

    } else {

      alert(data.message);

    }

  }

  async function rejectMember() {

    const reason = prompt("Reason for rejection:");

    if (!reason) return;

    const response = await fetch(
      `/api/admin/applications/${id}/reject`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reason,
        }),
      }
    );

    const data = await response.json();

    if (data.success) {

      alert("Application rejected.");

      router.push("/admin/applications");

    } else {

      alert(data.message);

    }

  }

  if (loading) {

    return (
      <main className="p-10">
        Loading...
      </main>
    );

  }

  if (!member) {

    return (
      <main className="p-10">
        Application not found.
      </main>
    );

  }
  return (

    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-green-800 mb-8">
          Membership Application
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="flex justify-center">

            {member.photo ? (

              <img
                src={member.photo}
                alt={member.fullName}
                className="w-56 h-56 rounded-2xl object-cover border"
              />

            ) : (

              <div className="w-56 h-56 rounded-2xl bg-gray-200 flex items-center justify-center">

                No Photo

              </div>

            )}

          </div>

          <div className="md:col-span-2 space-y-3">

            <p><strong>Full Name:</strong> {member.fullName}</p>

            <p><strong>Phone:</strong> {member.phone}</p>

            <p><strong>WhatsApp:</strong> {member.whatsapp}</p>

            <p><strong>Email:</strong> {member.email}</p>

            <p><strong>Gender:</strong> {member.gender}</p>

            <p><strong>Date of Birth:</strong> {member.dateOfBirth}</p>

            <p><strong>Address:</strong> {member.address}</p>

            <p><strong>Occupation:</strong> {member.occupation}</p>

            <p><strong>Membership Type:</strong> {member.membershipType}</p>

            <p><strong>Date Joined:</strong> {member.dateJoined}</p>

            <p><strong>Application Reference:</strong> {member.applicationReference}</p>

            <p><strong>Status:</strong> {member.status}</p>

          </div>

        </div>

        <hr className="my-8" />

        <h2 className="text-2xl font-bold text-green-800 mb-4">

          Emergency Contact

        </h2>

        <div className="space-y-2">

          <p><strong>Name:</strong> {member.emergencyName}</p>

          <p><strong>Relationship:</strong> {member.emergencyRelationship}</p>

          <p><strong>Phone:</strong> {member.emergencyPhone}</p>

        </div>

        <div className="flex gap-4 mt-10">

          <button
            onClick={approveMember}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl"
          >
            Approve Member
          </button>

          <button
            onClick={rejectMember}
            className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-xl"
          >
            Reject Application
          </button>

        </div>

      </div>

    </main>

  );

}