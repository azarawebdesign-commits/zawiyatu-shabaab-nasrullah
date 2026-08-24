"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  HeartHandshake,
  ShoppingCart,
  Package,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const navigation = [
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
    name: "Donations",
    href: "/admin/donations",
    icon: HeartHandshake,
  },
  {
    name: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: Package,
  },
];

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  async function logout() {
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      });

      toast.success("Logged out successfully");

      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Unable to logout");
    }
  }

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden bg-green-800 text-white p-4 flex items-center justify-between sticky top-0 z-50">

        <h1 className="font-bold">
          Zawiyatu Admin
        </h1>

        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg hover:bg-green-700"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden bg-green-800 text-white px-4 pb-4">

          <nav className="space-y-1">

            {navigation.map((item) => {
              const Icon = item.icon;

              const active =
                pathname === item.href ||
                pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    active
                      ? "bg-white text-green-800"
                      : "hover:bg-green-700"
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            <button
              onClick={logout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600 transition text-left"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>

          </nav>

        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-green-800 text-white flex-col z-50">

        {/* Logo / Title */}
        <div className="p-6 border-b border-green-700">

          <h1 className="text-xl font-bold">
            Zawiyatu Shabaab
          </h1>

          <p className="text-green-200 text-sm mt-1">
            Administration Panel
          </p>

        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">

          {navigation.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  active
                    ? "bg-white text-green-800 font-semibold"
                    : "hover:bg-green-700"
                }`}
              >
                <Icon size={20} />

                <span>
                  {item.name}
                </span>

              </Link>
            );
          })}

        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-green-700">

          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600 transition text-left"
          >
            <LogOut size={20} />

            <span>
              Logout
            </span>

          </button>

        </div>

      </aside>
    </>
  );
}