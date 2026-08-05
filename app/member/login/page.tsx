"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MemberLoginPage() {

  const router = useRouter();

  const [membershipId, setMembershipId] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");



  async function handleLogin(e: React.FormEvent) {

    e.preventDefault();

    setLoading(true);
    setError("");


    try {

      const response = await fetch("/api/member/login", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          membershipId,
          phone,
        }),

      });



      const data = await response.json();



      if(data.success){

        router.push("/member/dashboard");

      } else {

        setError(data.message);

      }



    } catch(error){

      console.error(error);

      setError("Something went wrong. Try again.");

    }


    finally {

      setLoading(false);

    }

  }





  return (

    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">


      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md">


        <div className="text-center mb-8">


          <h1 className="text-3xl font-bold text-green-800">
            Member Login
          </h1>


          <p className="text-gray-600 mt-2">
            Access your Zawiyatu Shabaab Nasrullah account
          </p>


        </div>




        {error && (

          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-5">

            {error}

          </div>

        )}






        <form onSubmit={handleLogin} className="space-y-5">


          <div>

            <label className="block text-gray-700 mb-2">
              Membership ID
            </label>


            <input

              type="text"

              value={membershipId}

              onChange={(e)=>setMembershipId(e.target.value)}

              placeholder="ZSN-2026-0001"

              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"

            />

          </div>





          <div>

            <label className="block text-gray-700 mb-2">
              Phone Number
            </label>


            <input

              type="text"

              value={phone}

              onChange={(e)=>setPhone(e.target.value)}

              placeholder="0240000000"

              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"

            />

          </div>





          <button

            type="submit"

            disabled={loading}

            className="w-full bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition"

          >

            {loading ? "Logging in..." : "Login"}

          </button>



        </form>




      </div>


    </main>

  );

}