"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ApplicationsPage() {

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchApplications() {

      try {

        const response = await fetch("/api/admin/applications");

        const data = await response.json();

        setApplications(data.applications || []);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    }

    fetchApplications();

  }, []);

  return (

    <main className="p-8">

      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Pending Membership Applications
      </h1>

      {loading ? (

        <p>Loading applications...</p>

      ) : applications.length === 0 ? (

        <div className="bg-white rounded-xl shadow p-8 text-center">

          <h2 className="text-xl font-semibold">
            No pending applications
          </h2>

        </div>

      ) : (

        <div className="overflow-x-auto bg-white rounded-xl shadow">

          <table className="w-full">

            <thead className="bg-green-700 text-white">

              <tr>

                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Membership</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-center">Action</th>

              </tr>

            </thead>

            <tbody>

              {applications.map((member: any) => (

                <tr
                  key={member._id}
                  className="border-b"
                >

                  <td className="p-4">
                    {member.fullName}
                  </td>

                  <td className="p-4">
                    {member.phone}
                  </td>

                  <td className="p-4">
                    {member.membershipType}
                  </td>

                  <td className="p-4">

                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">

                      Pending

                    </span>

                  </td>

                  <td className="p-4 text-center">

                    <Link
                      href={`/admin/applications/${member._id}`}
                      className="bg-green-700 text-white px-4 py-2 rounded-lg"
                    >
                      View
                    </Link>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </main>

  );

}