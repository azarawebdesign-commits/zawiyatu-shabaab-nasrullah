"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


export default function AdminLoginPage() {

  const router = useRouter();

  const [password, setPassword] = useState("");


  async function login() {

    const response = await fetch("/api/admin/login", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        password,
      }),

    });


    const data = await response.json();


    if (data.success) {

      toast.success("Login successful");

      router.push("/admin/orders");

    } else {

      toast.error("Wrong password");

    }

  }



  return (

    <main className="min-h-screen bg-gray-50 flex items-center justify-center">


      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">


        <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Admin Login
        </h1>



        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 mb-5"
        />



        <button
          onClick={login}
          className="w-full bg-green-700 text-white py-3 rounded-full hover:bg-green-800"
        >
          Login
        </button>


      </div>


    </main>

  );

}