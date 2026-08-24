"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Edit,
  Save,
  X,
  CreditCard,
  User,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  Shield,
  FileText,
  RefreshCw,
} from "lucide-react";
import toast from "react-hot-toast";

type Member = {
  _id: string;

  fullName: string;
  phone: string;
  whatsapp?: string;
  email?: string;
  gender: string;
  dateOfBirth?: string;

  address: string;
  occupation?: string;

  dateJoined?: string;
  membershipType: string;

  emergencyName: string;
  emergencyRelationship: string;
  emergencyPhone: string;

  photo?: string;

  applicationReference: string;
  status?: string;
  membershipId?: string;
  executiveNotes?: string;

  createdAt?: string;
  updatedAt?: string;
};

export default function MemberProfilePage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [member, setMember] = useState<Member | null>(null);

  const [form, setForm] = useState<Partial<Member>>({});

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [editing, setEditing] = useState(false);

  const [error, setError] = useState("");

  async function fetchMember() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`/api/members/${id}`);

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Member not found");
      }

      setMember(data.member);
      setForm(data.member);
    } catch (error) {
      console.error("Member Error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to load member profile"
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      fetchMember();
    }
  }, [id]);

  function handleChange(
    field: keyof Member,
    value: string
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function startEditing() {
    if (!member) return;

    setForm(member);
    setEditing(true);
  }

  function cancelEditing() {
    if (member) {
      setForm(member);
    }

    setEditing(false);
  }

  async function saveChanges() {
    try {
      setSaving(true);

      const response = await fetch(
        `/api/members/${id}`,
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            fullName: form.fullName,
            phone: form.phone,
            whatsapp: form.whatsapp,
            email: form.email,
            gender: form.gender,
            dateOfBirth: form.dateOfBirth,

            address: form.address,
            occupation: form.occupation,

            dateJoined: form.dateJoined,
            membershipType: form.membershipType,

            emergencyName: form.emergencyName,
            emergencyRelationship:
              form.emergencyRelationship,
            emergencyPhone: form.emergencyPhone,

            status: form.status,
            membershipId: form.membershipId,
            executiveNotes: form.executiveNotes,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to update member"
        );
      }

      setMember(data.member);
      setForm(data.member);

      setEditing(false);

      toast.success("Member information updated successfully.");
    } catch (error) {
      console.error("Update Member Error:", error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to update member"
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 p-6 md:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow p-10 text-center">
            <RefreshCw
              size={35}
              className="mx-auto text-green-700 animate-spin mb-4"
            />

            <p className="text-gray-600">
              Loading member profile...
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (error || !member) {
    return (
      <main className="min-h-screen bg-gray-50 p-6 md:p-8">
        <div className="max-w-3xl mx-auto">

          <Link
            href="/admin/members"
            className="inline-flex items-center gap-2 text-green-700 font-semibold mb-6"
          >
            <ArrowLeft size={18} />
            Back to Members
          </Link>

          <div className="bg-white rounded-3xl shadow p-10 text-center">

            <h1 className="text-2xl font-bold text-red-700 mb-3">
              Unable to Load Member
            </h1>

            <p className="text-gray-600">
              {error || "Member not found."}
            </p>

          </div>
        </div>
      </main>
    );
  }

  const currentStatus =
    form.status || member.status || "Pending";

  const statusClass =
    currentStatus === "Active"
      ? "bg-green-100 text-green-700"
      : currentStatus === "Suspended"
      ? "bg-red-100 text-red-700"
      : currentStatus === "Inactive"
      ? "bg-gray-100 text-gray-700"
      : "bg-yellow-100 text-yellow-700";

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-8">

      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

          <div>

            <Link
              href="/admin/members"
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 font-semibold mb-4"
            >
              <ArrowLeft size={18} />
              Back to Members
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold text-green-800">
              Member Profile
            </h1>

            <p className="text-gray-600 mt-2">
              View and manage this member's information.
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            {!editing ? (
              <button
                onClick={startEditing}
                className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-5 py-3 rounded-xl hover:bg-green-800 transition"
              >
                <Edit size={18} />
                Edit Member
              </button>
            ) : (
              <>
                <button
                  onClick={cancelEditing}
                  disabled={saving}
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 px-5 py-3 rounded-xl hover:bg-gray-50 transition disabled:opacity-50"
                >
                  <X size={18} />
                  Cancel
                </button>

                <button
                  onClick={saveChanges}
                  disabled={saving}
                  className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-5 py-3 rounded-xl hover:bg-green-800 transition disabled:opacity-50"
                >
                  <Save size={18} />

                  {saving
                    ? "Saving..."
                    : "Save Changes"}
                </button>
              </>
            )}

            <Link
              href={`/admin/members/${id}/card`}
              className="inline-flex items-center justify-center gap-2 bg-[#d4af37] text-white px-5 py-3 rounded-xl hover:opacity-90 transition"
            >
              <CreditCard size={18} />
              Membership Card
            </Link>

          </div>

        </div>

        {/* Profile Header */}

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-6">

          <div className="bg-green-900 px-6 md:px-8 py-8 text-white">

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.fullName}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-green-700 border-4 border-white flex items-center justify-center shadow-lg">
                  <User size={55} />
                </div>
              )}

              <div className="text-center md:text-left flex-1">

                <h2 className="text-3xl font-bold">
                  {member.fullName}
                </h2>

                {member.membershipId && (
                  <p className="text-green-200 font-semibold mt-2">
                    Membership ID: {member.membershipId}
                  </p>
                )}

                <div className="mt-4">

                  <span
                    className={`inline-flex px-4 py-2 rounded-full text-sm font-bold ${statusClass}`}
                  >
                    {currentStatus}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Personal Information */}

        <section className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-6">

          <div className="flex items-center gap-3 mb-6">

            <div className="bg-green-50 p-3 rounded-xl">
              <User
                size={22}
                className="text-green-700"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-green-800">
                Personal Information
              </h2>

              <p className="text-sm text-gray-500">
                Member's personal details
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <Field
              label="Full Name"
              value={form.fullName}
              editing={editing}
              onChange={(value) =>
                handleChange("fullName", value)
              }
            />

            <Field
              label="Phone"
              value={form.phone}
              editing={editing}
              onChange={(value) =>
                handleChange("phone", value)
              }
            />

            <Field
              label="WhatsApp"
              value={form.whatsapp}
              editing={editing}
              onChange={(value) =>
                handleChange("whatsapp", value)
              }
            />

            <Field
              label="Email"
              value={form.email}
              editing={editing}
              onChange={(value) =>
                handleChange("email", value)
              }
            />

            <Field
              label="Gender"
              value={form.gender}
              editing={editing}
              onChange={(value) =>
                handleChange("gender", value)
              }
            />

            <Field
              label="Date of Birth"
              value={form.dateOfBirth}
              editing={editing}
              onChange={(value) =>
                handleChange("dateOfBirth", value)
              }
            />

          </div>

        </section>

        {/* Contact Information */}

        <section className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-6">

          <div className="flex items-center gap-3 mb-6">

            <div className="bg-green-50 p-3 rounded-xl">
              <MapPin
                size={22}
                className="text-green-700"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-green-800">
                Contact Information
              </h2>

              <p className="text-sm text-gray-500">
                Address and occupation
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <Field
              label="Address"
              value={form.address}
              editing={editing}
              onChange={(value) =>
                handleChange("address", value)
              }
            />

            <Field
              label="Occupation"
              value={form.occupation}
              editing={editing}
              onChange={(value) =>
                handleChange("occupation", value)
              }
            />

          </div>

        </section>

        {/* Membership Information */}

        <section className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-6">

          <div className="flex items-center gap-3 mb-6">

            <div className="bg-green-50 p-3 rounded-xl">
              <FileText
                size={22}
                className="text-green-700"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-green-800">
                Membership Information
              </h2>

              <p className="text-sm text-gray-500">
                Membership and account status
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <Field
              label="Membership ID"
              value={form.membershipId}
              editing={editing}
              onChange={(value) =>
                handleChange("membershipId", value)
              }
            />

            <Field
              label="Membership Type"
              value={form.membershipType}
              editing={editing}
              onChange={(value) =>
                handleChange("membershipType", value)
              }
            />

            <Field
              label="Date Joined"
              value={form.dateJoined}
              editing={editing}
              onChange={(value) =>
                handleChange("dateJoined", value)
              }
            />

            {/* Status */}

            <div>

              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Status
              </label>

              {editing ? (
                <select
                  value={form.status || "Pending"}
                  onChange={(e) =>
                    handleChange(
                      "status",
                      e.target.value
                    )
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                >
                  <option value="Pending">
                    Pending
                  </option>

                  <option value="Active">
                    Active
                  </option>

                  <option value="Suspended">
                    Suspended
                  </option>

                  <option value="Inactive">
                    Inactive
                  </option>
                </select>
              ) : (
                <div className="border border-gray-100 rounded-xl px-4 py-3 bg-gray-50">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${statusClass}`}
                  >
                    {currentStatus}
                  </span>
                </div>
              )}

            </div>

          </div>

          {/* Application Reference */}

          <div className="mt-5">

            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Application Reference
            </label>

            <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-700 break-all">
              {member.applicationReference || "—"}
            </div>

          </div>

        </section>

        {/* Emergency Contact */}

        <section className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-6">

          <div className="flex items-center gap-3 mb-6">

            <div className="bg-green-50 p-3 rounded-xl">
              <Shield
                size={22}
                className="text-green-700"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-green-800">
                Emergency Contact
              </h2>

              <p className="text-sm text-gray-500">
                Person to contact in an emergency
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <Field
              label="Name"
              value={form.emergencyName}
              editing={editing}
              onChange={(value) =>
                handleChange(
                  "emergencyName",
                  value
                )
              }
            />

            <Field
              label="Relationship"
              value={form.emergencyRelationship}
              editing={editing}
              onChange={(value) =>
                handleChange(
                  "emergencyRelationship",
                  value
                )
              }
            />

            <Field
              label="Phone"
              value={form.emergencyPhone}
              editing={editing}
              onChange={(value) =>
                handleChange(
                  "emergencyPhone",
                  value
                )
              }
            />

          </div>

        </section>

        {/* Executive Notes */}

        <section className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-6">

          <div className="flex items-center gap-3 mb-6">

            <div className="bg-green-50 p-3 rounded-xl">
              <FileText
                size={22}
                className="text-green-700"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-green-800">
                Executive Notes
              </h2>

              <p className="text-sm text-gray-500">
                Internal notes for administrators
              </p>
            </div>

          </div>

          {editing ? (
            <textarea
              value={form.executiveNotes || ""}
              onChange={(e) =>
                handleChange(
                  "executiveNotes",
                  e.target.value
                )
              }
              rows={6}
              placeholder="Write internal notes about this member..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600 resize-y"
            />
          ) : (
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 text-gray-700 whitespace-pre-wrap">
              {member.executiveNotes?.trim()
                ? member.executiveNotes
                : "No executive notes have been added."}
            </div>
          )}

        </section>

        {/* Bottom Actions */}

        <div className="flex flex-col sm:flex-row gap-4 pb-10">

          <Link
            href="/admin/members"
            className="inline-flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition"
          >
            <ArrowLeft size={18} />
            Back to Members
          </Link>

          <Link
            href={`/admin/members/${id}/card`}
            className="inline-flex items-center justify-center gap-2 bg-[#d4af37] text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            <CreditCard size={18} />
            Generate Membership Card
          </Link>

          {editing && (
            <button
              onClick={saveChanges}
              disabled={saving}
              className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800 transition disabled:opacity-50"
            >
              <Save size={18} />

              {saving
                ? "Saving..."
                : "Save Changes"}
            </button>
          )}

        </div>

      </div>

    </main>
  );
}

/* -------------------------------- */
/* Reusable Field Component */
/* -------------------------------- */

function Field({
  label,
  value,
  editing,
  onChange,
}: {
  label: string;
  value?: string;
  editing: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <div>

      <label className="block text-sm font-semibold text-gray-600 mb-2">
        {label}
      </label>

      {editing ? (
        <input
          type="text"
          value={value || ""}
          onChange={(e) =>
            onChange(e.target.value)
          }
          className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
        />
      ) : (
        <div className="border border-gray-100 rounded-xl px-4 py-3 bg-gray-50 text-gray-700 min-h-[48px]">
          {value || "—"}
        </div>
      )}

    </div>
  );
}