"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Search,
  Users,
  Eye,
  RefreshCw,
  Clock,
} from "lucide-react";

type Application = {
  _id: string;
  fullName?: string;
  phone?: string;
  email?: string;
  membershipType?: string;
  applicationReference?: string;
  status?: string;
  createdAt?: string;
};

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadApplications() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "/api/admin/applications",
        {
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to load applications");
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(
          data.message || "Failed to load applications"
        );
      }

      setApplications(
        Array.isArray(data.applications)
          ? data.applications
          : []
      );

    } catch (error) {
      console.error("Applications Error:", error);

      setError(
        "Unable to load membership applications."
      );

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadApplications();
  }, []);

  const filteredApplications =
    applications.filter((application) => {
      const searchText =
        search.toLowerCase().trim();

      if (!searchText) return true;

      return (
        (application.fullName || "")
          .toLowerCase()
          .includes(searchText) ||

        (application.phone || "")
          .toLowerCase()
          .includes(searchText) ||

        (application.email || "")
          .toLowerCase()
          .includes(searchText) ||

        (application.membershipType || "")
          .toLowerCase()
          .includes(searchText) ||

        (application.applicationReference || "")
          .toLowerCase()
          .includes(searchText)
      );
    });

  return (
    <main className="min-h-screen">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

        <div>

          <div className="flex items-center gap-3">

            <div className="bg-green-100 p-3 rounded-xl">

              <Users
                size={28}
                className="text-green-700"
              />

            </div>

            <div>

              <h1 className="text-4xl font-bold text-green-800">
                Applications
              </h1>

              <p className="text-gray-600 mt-1">
                Review and manage membership applications.
              </p>

            </div>

          </div>

        </div>

        <button
          onClick={loadApplications}
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 px-5 py-3 rounded-xl hover:bg-gray-50 transition disabled:opacity-50"
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


      {/* Statistics */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">

        <div className="bg-white rounded-2xl shadow p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500">
                Pending Applications
              </p>

              <h2 className="text-3xl font-bold text-green-700 mt-2">
                {loading
                  ? "..."
                  : applications.length}
              </h2>

            </div>

            <div className="bg-yellow-100 p-3 rounded-xl">

              <Clock
                size={25}
                className="text-yellow-700"
              />

            </div>

          </div>

        </div>


        <div className="bg-white rounded-2xl shadow p-6">

          <p className="text-gray-500">
            Search Results
          </p>

          <h2 className="text-3xl font-bold text-green-700 mt-2">
            {loading
              ? "..."
              : filteredApplications.length}
          </h2>

        </div>


        <div className="bg-white rounded-2xl shadow p-6">

          <p className="text-gray-500">
            Status
          </p>

          <h2 className="text-xl font-bold text-yellow-700 mt-3">
            Awaiting Review
          </h2>

        </div>

      </div>


      {/* Search */}

      <div className="bg-white rounded-2xl shadow p-5 mb-6">

        <div className="relative">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search by name, phone, email, membership type or application reference..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
          />

        </div>

      </div>


      {/* Error */}

      {error && (

        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6">

          {error}

        </div>

      )}


      {/* Applications */}

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        {loading ? (

          <div className="p-12 text-center text-gray-500">

            <RefreshCw
              size={32}
              className="mx-auto mb-4 animate-spin text-green-700"
            />

            Loading applications...

          </div>

        ) : filteredApplications.length === 0 ? (

          <div className="p-12 text-center">

            <Users
              size={48}
              className="mx-auto text-gray-300 mb-4"
            />

            <h2 className="text-xl font-semibold text-gray-700">

              {search
                ? "No matching applications"
                : "No pending applications"}

            </h2>

            <p className="text-gray-500 mt-2">

              {search
                ? "Try searching with a different name, phone number or reference."
                : "All membership applications have been reviewed."}

            </p>

          </div>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-green-900 text-white">

                <tr>

                  <th className="text-left px-6 py-4">
                    Applicant
                  </th>

                  <th className="text-left px-6 py-4">
                    Phone
                  </th>

                  <th className="text-left px-6 py-4">
                    Membership
                  </th>

                  <th className="text-left px-6 py-4">
                    Application Ref.
                  </th>

                  <th className="text-left px-6 py-4">
                    Status
                  </th>

                  <th className="text-right px-6 py-4">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredApplications.map(
                  (application) => (

                    <tr
                      key={application._id}
                      className="border-t hover:bg-gray-50 transition"
                    >

                      <td className="px-6 py-5">

                        <div>

                          <p className="font-semibold text-gray-800">
                            {application.fullName ||
                              "Unnamed Applicant"}
                          </p>

                          {application.email && (

                            <p className="text-sm text-gray-500 mt-1">
                              {application.email}
                            </p>

                          )}

                        </div>

                      </td>


                      <td className="px-6 py-5 text-gray-600">
                        {application.phone || "—"}
                      </td>


                      <td className="px-6 py-5 text-gray-600">
                        {application.membershipType || "—"}
                      </td>


                      <td className="px-6 py-5 text-gray-600">

                        <span className="font-mono text-sm">
                          {application.applicationReference ||
                            "—"}
                        </span>

                      </td>


                      <td className="px-6 py-5">

                        <span className="inline-flex px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">

                          Pending

                        </span>

                      </td>


                      <td className="px-6 py-5 text-right">

                        <Link
                          href={`/admin/applications/${application._id}`}
                          className="inline-flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
                        >

                          <Eye size={17} />

                          Review

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