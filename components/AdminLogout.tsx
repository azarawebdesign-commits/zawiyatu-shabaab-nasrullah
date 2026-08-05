"use client";

import { useRouter } from "next/navigation";


export default function AdminLogout() {


  const router = useRouter();



  async function logout() {


    await fetch("/api/admin/logout", {

      method: "POST",

    });



    router.push("/admin/login");

    router.refresh();


  }



  return (

    <button

      onClick={logout}

      className="bg-red-600 text-white px-5 py-2 rounded-xl hover:bg-red-700"

    >

      Logout

    </button>

  );

}