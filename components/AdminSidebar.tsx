"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import AdminLogout from "./AdminLogout";


export default function AdminSidebar() {


  const pathname = usePathname();

  const [open, setOpen] = useState(false);



  const links = [

    {
      name: "Dashboard",
      href: "/admin",
    },

    {
      name: "Members",
      href: "/admin/members",
    },

    {
      name: "Applications",
      href: "/admin/applications",
    },

    {
      name: "Orders",
      href: "/admin/orders",
    },

    {
      name: "Donations",
      href: "/admin/donations",
    }

  ];



  return (

    <>


      {/* Mobile Header */}

      <div className="md:hidden flex items-center justify-between bg-green-900 text-white p-4">


        <h1 className="font-bold">
          Zawiyatu Admin
        </h1>


        <button

          onClick={() => setOpen(!open)}

        >

          {open ? <X size={28}/> : <Menu size={28}/>}


        </button>


      </div>





      {/* Desktop Sidebar */}

      <aside className="hidden md:flex w-64 bg-green-900 text-white min-h-screen p-6 flex-col">


        <h1 className="text-xl font-bold mb-8">

          Zawiyatu Admin

        </h1>




        <nav className="space-y-3 flex-1">


          {links.map((link)=>(


            <Link

              key={link.href}

              href={link.href}

              className={`block px-4 py-3 rounded-xl transition ${
                
                pathname === link.href

                ? "bg-green-700"

                : "hover:bg-green-800"

              }`}

            >

              {link.name}

            </Link>


          ))}


        </nav>




        <AdminLogout />


      </aside>







      {/* Mobile Sidebar */}

      {open && (

        <aside className="md:hidden absolute top-16 left-0 w-64 bg-green-900 text-white min-h-screen p-6 z-50">


          <nav className="space-y-3">


            {links.map((link)=>(


              <Link

                key={link.href}

                href={link.href}

                onClick={() => setOpen(false)}

                className={`block px-4 py-3 rounded-xl ${
                  
                  pathname === link.href

                  ? "bg-green-700"

                  : "hover:bg-green-800"

                }`}

              >

                {link.name}

              </Link>


            ))}


          </nav>



          <div className="mt-8">

            <AdminLogout />

          </div>


        </aside>

      )}



    </>

  );

}