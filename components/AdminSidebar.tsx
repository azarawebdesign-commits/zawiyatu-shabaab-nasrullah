"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  Users,
  UserPlus,
  ShoppingCart,
  HeartHandshake,
  Package,
} from "lucide-react";
import AdminLogout from "./AdminLogout";

export default function AdminSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Members",
      href: "/admin/members",
      icon: Users,
    },
    {
      name: "Applications",
      href: "/admin/applications",
      icon: UserPlus,
    },
    {
      name: "Orders",
      href: "/admin/orders",
      icon: ShoppingCart,
    },
    {
      name: "Donations",
      href: "/admin/donations",
      icon: HeartHandshake,
    },
    {
      name: "Products",
      href: "/admin/products",
      icon: Package,
    },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between bg-green-900 text-white p-4 sticky top-0 z-50">
        <h1 className="font-bold">
          Zawiyatu Admin
        </h1>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle admin menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-green-900 text-white min-h-screen p-6 flex-col sticky top-0 h-screen">
        <h1 className="text-xl font-bold mb-8">
          Zawiyatu Admin
        </h1>

        <nav className="space-y-2 flex-1">
          {links.map((link) => {
            const Icon = link.icon;

            const active =
              pathname === link.href ||
              pathname.startsWith(link.href + "/");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  active
                    ? "bg-green-700"
                    : "hover:bg-green-800"
                }`}
              >
                <Icon size={20} />

                <span>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <AdminLogout />
      </aside>

      {/* Mobile Sidebar */}
      {open && (
        <aside className="md:hidden absolute top-16 left-0 w-64 bg-green-900 text-white min-h-screen p-6 z-40 shadow-xl">
          <nav className="space-y-2">
            {links.map((link) => {
              const Icon = link.icon;

              const active =
                pathname === link.href ||
                pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                    active
                      ? "bg-green-700"
                      : "hover:bg-green-800"
                  }`}
                >
                  <Icon size={20} />

                  <span>
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-8">
            <AdminLogout />
          </div>
        </aside>
      )}
    </>
  );
}
