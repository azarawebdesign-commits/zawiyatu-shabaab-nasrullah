"use client";

import { useRouter } from "next/navigation";

export default function MemberLogout() {

  const router = useRouter();


  const logout = async () => {

    await fetch("/api/member/logout", {
      method: "POST",
    });


    router.push("/member/login");

    router.refresh();

  };



  return (

    <button

      onClick={logout}

      className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700"

    >

      Logout

    </button>

  );

}