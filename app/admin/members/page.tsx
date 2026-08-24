"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Search,
  Users,
  Eye,
  UserPlus,
  RefreshCw,
  UserCheck,
} from "lucide-react";

type Member = {
  _id: string;
  fullName?: string;
  phone?: string;
  email?: string;
  membershipId?: string;
  status?: string;
  membershipType?: string;
  createdAt?: string;
};

export default function AdminMembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadMembers() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/members", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Failed to load members");
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(
          data.message || "Failed to load members"
        );
      }

      setMembers(
        Array.isArray(data.members)
          ? data.members
          : []
      );

    } catch (error) {
      console.error(
        "Members Error:",
        error
      );

      setError(
        "Unable to load members."
      );

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMembers();
  }, []);


  const filteredMembers = members.filter(
    (member) => {
      const searchText =
        search.toLowerCase().trim();

      if (!searchText) return true;

      return (
        (member.fullName || "")
          .toLowerCase()
          .includes(searchText) ||

        (member.phone || "")
          .toLowerCase()
          .includes(searchText) ||

        (member.email || "")
          .toLowerCase()
          .includes(searchText) ||

        (member.membershipId || "")
          .toLowerCase()
          .includes(searchText) ||

        (member.membershipType || "")
          .toLowerCase()
          .includes(searchText)
      );
    }
  );


  return (
    <main className="min-h-screen">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

        <div>

          <h1 className="text-4xl font-bold text-green-800">
            Members
          </h1>

          <p className="text-gray-600 mt-2">
            Manage approved Zawiyatu Shabaab Nasrullah members.
          </p>

        </div>


        <Link
          href="/admin/applications"
          className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-5 py-3 rounded-xl hover:bg-green-800 transition"
        >
          <UserPlus size={19} />
          Applications
        </Link>

      </div>


      {/* Statistics */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">

        {/* Total */}

        <div className="bg-white rounded-2xl shadow p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500">
                Total Members
              </p>

              <h2 className="text-3xl font-bold text-green-700 mt-2">
                {loading
                  ? "..."
                  : members.length}
              </h2>

            </div>

            <div className="bg-green-50 p-3 rounded-xl">

              <Users
                className="text-green-700"
                size={25}
              />

            </div>

          </div>

        </div>


        {/* Active */}

        <div className="bg-white rounded-2xl shadow p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500">
                Active Members
              </p>

              <h2 className="text-3xl font-bold text-green-700 mt-2">
                {loading
                  ? "..."
                  : members.filter(
                      (member) =>
                        member.status ===
                        "Active"
                    ).length}
              </h2>

            </div>

            <div className="bg-green-50 p-3 rounded-xl">

              <UserCheck
                className="text-green-700"
                size={25}
              />

            </div>

          </div>

        </div>


        {/* Showing */}

        <div className="bg-white rounded-2xl shadow p-6">

          <p className="text-gray-500">
            Showing
          </p>

          <h2 className="text-3xl font-bold text-green-700 mt-2">
            {loading
              ? "..."
              : filteredMembers.length}
          </h2>

        </div>

      </div>


      {/* Search */}

      <div className="bg-white rounded-2xl shadow p-5 mb-6">

        <div className="flex flex-col md:flex-row gap-4">

          <div className="relative flex-1">

            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search by name, phone, email, membership ID or membership type..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
            />

          </div>


          <button
            onClick={loadMembers}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition disabled:opacity-50"
          >

            <RefreshCw
              size={18}
              className={
                loading
                  ? "animate-spin"
                  : ""
              }
            />

            Refresh

          </button>

        </div>

      </div>


      {/* Error */}

      {error && (

        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6">

          {error}

        </div>

      )}


      {/* Members Table */}

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        {loading ? (

          <div className="p-10 text-center text-gray-500">

            <RefreshCw
              size={35}
              className="mx-auto mb-4 animate-spin text-green-700"
            />

            Loading members...

          </div>

        ) : filteredMembers.length === 0 ? (

          <div className="p-10 text-center">

            <Users
              size={45}
              className="mx-auto text-gray-300 mb-4"
            />

            <h2 className="text-xl font-semibold text-gray-700">
              {search
                ? "No matching members"
                : "No active members"}
            </h2>

            <p className="text-gray-500 mt-2">

              {search
                ? "Try a different search term."
                : "Approved members will appear here."}

            </p>

          </div>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-50">

                <tr>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Member
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Phone
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Membership ID
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Type
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Status
                  </th>

                  <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">
                    Action
                  </th>

                </tr>

              </thead>


              <tbody>

                {filteredMembers.map(
                  (member) => (

                    <tr
                      key={member._id}
                      className="border-t hover:bg-gray-50 transition"
                    >

                      {/* Member */}

                      <td className="px-6 py-4">

                        <div>

                          <p className="font-semibold text-gray-800">

                            {member.fullName ||
                              "Unnamed Member"}

                          </p>


                          {member.email && (

                            <p className="text-sm text-gray-500">

                              {member.email}

                            </p>

                          )}

                        </div>

                      </td>


                      {/* Phone */}

                      <td className="px-6 py-4 text-gray-600">

                        {member.phone ||
                          "—"}

                      </td>


                      {/* Membership ID */}

                      <td className="px-6 py-4">

                        <span className="font-mono text-sm font-semibold text-green-700">

                          {member.membershipId ||
                            "—"}

                        </span>

                      </td>


                      {/* Membership Type */}

                      <td className="px-6 py-4 text-gray-600">

                        {member.membershipType ||
                          "—"}

                      </td>


                      {/* Status */}

                      <td className="px-6 py-4">

                        <span className="inline-flex px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">

                          {member.status ||
                            "Active"}

                        </span>

                      </td>


                      {/* Action */}

                      <td className="px-6 py-4 text-right">

                        <Link
                          href={`/admin/members/${member._id}`}
                          className="inline-flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
                        >

                          <Eye size={17} />

                          View

                        </Link>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </main>
  );
}