"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  User,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  Calendar,
  Shield,
  Loader2,
} from "lucide-react";
import toast from "react-hot-toast";

type Member = {
  _id: string;
  fullName?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  gender?: string;
  dateOfBirth?: string;
  address?: string;
  occupation?: string;
  membershipType?: string;
  dateJoined?: string;
  applicationReference?: string;
  status?: string;
  photo?: string;
  emergencyName?: string;
  emergencyRelationship?: string;
  emergencyPhone?: string;
  executiveNotes?: string;
};

export default function ApplicationDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [member, setMember] =
    useState<Member | null>(null);

  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] =
    useState(false);

  const [error, setError] = useState("");

  const [showRejectBox, setShowRejectBox] =
    useState(false);

  const [rejectionReason, setRejectionReason] =
    useState("");


  async function loadApplication() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `/api/admin/applications/${id}`,
        {
          cache: "no-store",
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Failed to load application"
        );
      }

      setMember(data.member);

    } catch (error) {
      console.error(
        "Application Error:",
        error
      );

      setError(
        "Unable to load this application."
      );

    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    if (id) {
      loadApplication();
    }
  }, [id]);


  async function approveMember() {
    if (!member) return;

    const confirmed = window.confirm(
      `Are you sure you want to approve ${member.fullName || "this applicant"}?`
    );

    if (!confirmed) return;

    try {
      setProcessing(true);

      const response = await fetch(
        `/api/admin/applications/${id}/approve`,
        {
          method: "POST",
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Approval failed"
        );
      }

      toast.success(
        `Member approved. Membership ID: ${data.membershipId}`
      );

      setTimeout(() => {
        router.push("/admin/applications");
        router.refresh();
      }, 1200);

    } catch (error) {
      console.error(
        "Approval Error:",
        error
      );

      toast.error(
        error instanceof Error
          ? error.message
          : "Approval failed"
      );

    } finally {
      setProcessing(false);
    }
  }


  async function rejectMember() {
    if (!rejectionReason.trim()) {
      toast.error(
        "Please enter a reason for rejection."
      );

      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to reject this application?"
    );

    if (!confirmed) return;

    try {
      setProcessing(true);

      const response = await fetch(
        `/api/admin/applications/${id}/reject`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            reason:
              rejectionReason.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Rejection failed"
        );
      }

      toast.success(
        "Application rejected successfully."
      );

      setTimeout(() => {
        router.push("/admin/applications");
        router.refresh();
      }, 1000);

    } catch (error) {
      console.error(
        "Rejection Error:",
        error
      );

      toast.error(
        error instanceof Error
          ? error.message
          : "Rejection failed"
      );

    } finally {
      setProcessing(false);
    }
  }


  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">

        <div className="text-center">

          <Loader2
            size={40}
            className="animate-spin text-green-700 mx-auto mb-4"
          />

          <p className="text-gray-600">
            Loading application...
          </p>

        </div>

      </main>
    );
  }


  if (error || !member) {
    return (
      <main className="min-h-screen">

        <div className="bg-white rounded-2xl shadow p-8 text-center">

          <XCircle
            size={50}
            className="mx-auto text-red-400 mb-4"
          />

          <h1 className="text-2xl font-bold text-gray-800">
            Application Not Found
          </h1>

          <p className="text-gray-500 mt-2">
            {error ||
              "This application could not be found."}
          </p>

          <Link
            href="/admin/applications"
            className="inline-flex items-center gap-2 mt-6 bg-green-700 text-white px-5 py-3 rounded-xl hover:bg-green-800"
          >
            <ArrowLeft size={18} />
            Back to Applications
          </Link>

        </div>

      </main>
    );
  }


  const isPending =
    member.status === "Pending";


  return (
    <main className="min-h-screen">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>

          <Link
            href="/admin/applications"
            className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-4"
          >
            <ArrowLeft size={18} />
            Back to Applications
          </Link>

          <h1 className="text-4xl font-bold text-green-800">
            Application Review
          </h1>

          <p className="text-gray-600 mt-2">
            Review the applicant's information before making a decision.
          </p>

        </div>


        <div>

          <span
            className={`inline-flex px-4 py-2 rounded-full font-semibold ${
              member.status === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : member.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {member.status || "Pending"}
          </span>

        </div>

      </div>


      {/* Applicant Profile */}

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* Profile Header */}

        <div className="bg-green-900 text-white p-8">

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

            {member.photo ? (

              <img
                src={member.photo}
                alt={member.fullName || "Applicant"}
                className="w-36 h-36 rounded-2xl object-cover border-4 border-white/30"
              />

            ) : (

              <div className="w-36 h-36 rounded-2xl bg-green-800 flex items-center justify-center">

                <User
                  size={55}
                  className="text-green-200"
                />

              </div>

            )}


            <div className="text-center md:text-left">

              <h2 className="text-3xl font-bold">
                {member.fullName ||
                  "Unnamed Applicant"}
              </h2>

              <p className="text-green-200 mt-2">
                {member.membershipType ||
                  "Membership Application"}
              </p>

              {member.applicationReference && (

                <p className="mt-4 text-sm">

                  Application Reference:

                  <span className="font-mono ml-2 bg-white/10 px-3 py-1 rounded-lg">

                    {member.applicationReference}

                  </span>

                </p>

              )}

            </div>

          </div>

        </div>


        {/* Personal Information */}

        <div className="p-8">

          <h2 className="text-2xl font-bold text-green-800 mb-6">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <InfoItem
              icon={<User size={19} />}
              label="Full Name"
              value={member.fullName}
            />

            <InfoItem
              icon={<Phone size={19} />}
              label="Phone"
              value={member.phone}
            />

            <InfoItem
              icon={<Phone size={19} />}
              label="WhatsApp"
              value={member.whatsapp}
            />

            <InfoItem
              icon={<Mail size={19} />}
              label="Email"
              value={member.email}
            />

            <InfoItem
              icon={<User size={19} />}
              label="Gender"
              value={member.gender}
            />

            <InfoItem
              icon={<Calendar size={19} />}
              label="Date of Birth"
              value={member.dateOfBirth}
            />

            <InfoItem
              icon={<MapPin size={19} />}
              label="Address"
              value={member.address}
            />

            <InfoItem
              icon={<Briefcase size={19} />}
              label="Occupation"
              value={member.occupation}
            />

          </div>


          <hr className="my-8" />


          {/* Membership Information */}

          <h2 className="text-2xl font-bold text-green-800 mb-6">
            Membership Information
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <InfoItem
              icon={<Shield size={19} />}
              label="Membership Type"
              value={member.membershipType}
            />

            <InfoItem
              icon={<Calendar size={19} />}
              label="Date Joined"
              value={member.dateJoined}
            />

            <InfoItem
              icon={<Shield size={19} />}
              label="Membership Status"
              value={member.status}
            />

            <InfoItem
              icon={<Shield size={19} />}
              label="Application Reference"
              value={
                member.applicationReference
              }
            />

          </div>


          <hr className="my-8" />


          {/* Emergency Contact */}

          <h2 className="text-2xl font-bold text-green-800 mb-6">
            Emergency Contact
          </h2>

          <div className="grid md:grid-cols-3 gap-5">

            <InfoItem
              icon={<User size={19} />}
              label="Name"
              value={member.emergencyName}
            />

            <InfoItem
              icon={<User size={19} />}
              label="Relationship"
              value={
                member.emergencyRelationship
              }
            />

            <InfoItem
              icon={<Phone size={19} />}
              label="Phone"
              value={member.emergencyPhone}
            />

          </div>


          {/* Actions */}

          {isPending && (

            <>

              <hr className="my-8" />

              <div>

                <h2 className="text-2xl font-bold text-green-800 mb-3">
                  Application Decision
                </h2>

                <p className="text-gray-600 mb-6">
                  Approve the applicant to create an active membership, or reject the application with a reason.
                </p>


                {showRejectBox && (

                  <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6">

                    <h3 className="font-bold text-red-800 mb-3">
                      Rejection Reason
                    </h3>

                    <textarea
                      value={rejectionReason}
                      onChange={(e) =>
                        setRejectionReason(
                          e.target.value
                        )
                      }
                      placeholder="Enter the reason for rejecting this application..."
                      rows={4}
                      className="w-full border border-red-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-red-500"
                    />

                  </div>

                )}


                <div className="flex flex-col sm:flex-row gap-4">

                  <button
                    onClick={approveMember}
                    disabled={processing}
                    className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 disabled:opacity-50 text-white px-7 py-3 rounded-xl font-semibold transition"
                  >

                    {processing ? (

                      <Loader2
                        size={19}
                        className="animate-spin"
                      />

                    ) : (

                      <CheckCircle size={19} />

                    )}

                    Approve Member

                  </button>


                  {!showRejectBox ? (

                    <button
                      onClick={() =>
                        setShowRejectBox(true)
                      }
                      disabled={processing}
                      className="inline-flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 disabled:opacity-50 text-white px-7 py-3 rounded-xl font-semibold transition"
                    >

                      <XCircle size={19} />

                      Reject Application

                    </button>

                  ) : (

                    <>

                      <button
                        onClick={rejectMember}
                        disabled={
                          processing ||
                          !rejectionReason.trim()
                        }
                        className="inline-flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 disabled:opacity-50 text-white px-7 py-3 rounded-xl font-semibold transition"
                      >

                        {processing ? (

                          <Loader2
                            size={19}
                            className="animate-spin"
                          />

                        ) : (

                          <XCircle size={19} />

                        )}

                        Confirm Rejection

                      </button>


                      <button
                        onClick={() => {
                          setShowRejectBox(false);
                          setRejectionReason("");
                        }}
                        disabled={processing}
                        className="px-7 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition"
                      >
                        Cancel
                      </button>

                    </>

                  )}

                </div>

              </div>

            </>

          )}

        </div>

      </div>

    </main>
  );
}


function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-4">

      <div className="flex items-center gap-2 text-green-700 mb-2">

        {icon}

        <span className="text-sm font-semibold">
          {label}
        </span>

      </div>

      <p className="text-gray-800 font-medium break-words">
        {value || "Not provided"}
      </p>

    </div>
  );
}