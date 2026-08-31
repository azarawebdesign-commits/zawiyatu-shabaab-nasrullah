"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  UserPlus,
  HeartHandshake,
  CreditCard,
  Clock,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

type DashboardStats = {
  totalOrders: number;
  totalRevenue: number;
  totalProducts: number;
  pendingOrders: number;
  totalMembers: number;
  pendingApplications: number;
  totalDonations: number;
  successfulPayments: number;
  totalEvents: number;
};

type Order = {
  _id: string;
  orderNumber: string;
  customerName: string;
  total: number;
  status: string;
};

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalOrders: 0,
    totalRevenue: 0,
    totalProducts: 0,
    pendingOrders: 0,
    totalMembers: 0,
    pendingApplications: 0,
    totalDonations: 0,
    successfulPayments: 0,
    totalEvents: 0,
  });

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const [
          ordersRes,
          productsRes,
          membersRes,
          applicationsRes,
          donationsRes,
          eventsRes,
        ] = await Promise.all([
          fetch("/api/orders"),
          fetch("/api/products"),
          fetch("/api/members"),
          fetch("/api/admin/applications"),
          fetch("/api/donations"),
          fetch("/api/admin/events"),
        ]);

        const ordersData = await ordersRes.json();
        const productsData = await productsRes.json();
        const membersData = await membersRes.json();
        const applicationsData = await applicationsRes.json();
        const donationsData = await donationsRes.json();
        const eventsData = await eventsRes.json();

        const orders = Array.isArray(ordersData)
          ? ordersData
          : ordersData.orders || [];

        const products = Array.isArray(productsData)
          ? productsData
          : productsData.products || [];

        const members = Array.isArray(membersData)
          ? membersData
          : membersData.members || [];

        const applications = Array.isArray(applicationsData)
          ? applicationsData
          : applicationsData.applications || [];

        const donations = Array.isArray(donationsData)
          ? donationsData
          : donationsData.donations || [];

        const events = Array.isArray(eventsData)
          ? eventsData
          : eventsData.events || [];

        setOrders(orders);

        const successfulDonations = donations.filter(
          (donation: any) =>
            donation.paymentStatus === "Paid" ||
            donation.paymentStatus === "success" ||
            donation.paymentStatus === "Successful"
        );

        const pendingApplications = applications.filter(
          (application: any) =>
            application.status === "Pending" ||
            application.status === "pending"
        );

        setStats({
          totalOrders: orders.length,

          totalRevenue: orders.reduce(
            (sum: number, order: Order) =>
              sum + Number(order.total || 0),
            0
          ),

          totalProducts: products.length,

          pendingOrders: orders.filter(
            (order: Order) =>
              order.status === "Pending" ||
              order.status === "pending"
          ).length,

          totalMembers: members.length,

          pendingApplications: pendingApplications.length,

          totalDonations: successfulDonations.reduce(
            (sum: number, donation: any) =>
              sum + Number(donation.amount || 0),
            0
          ),

          successfulPayments: successfulDonations.length,

          totalEvents: events.length,
        });
      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  const cards = [
    {
  title: "Dashboard",
  value: "Overview",
  icon: LayoutDashboard,
  href: "/admin/dashboard",
  description: "Admin overview",
    },
    {
      title: "Total Members",
      value: stats.totalMembers,
      icon: Users,
      href: "/admin/members",
      description: "Registered members",
    },
    {
      title: "Total Events",
      value: stats.totalEvents,
      icon: CalendarDays,
      href: "/admin/events",
      description: "Managed events",
    },
    {
      title: "Pending Applications",
      value: stats.pendingApplications,
      icon: UserPlus,
      href: "/admin/applications",
      description: "Awaiting review",
    },
    {
      title: "Total Donations",
      value: `GH₵${stats.totalDonations.toLocaleString()}`,
      icon: HeartHandshake,
      href: "/admin/donations",
      description: "Successful donations",
    },
    {
      title: "Successful Payments",
      value: stats.successfulPayments,
      icon: CreditCard,
      href: "/admin/donations",
      description: "Confirmed payments",
    },
    {
      title: "Total Orders",
      value: stats.totalOrders,
      icon: ShoppingCart,
      href: "/admin/orders",
      description: "Store orders",
    },
    {
      title: "Total Revenue",
      value: `GH₵${stats.totalRevenue.toLocaleString()}`,
      icon: CreditCard,
      href: "/admin/orders",
      description: "Order revenue",
    },
    {
      title: "Total Products",
      value: stats.totalProducts,
      icon: Package,
      href: "/admin/products",
      description: "Store products",
    },
    {
      title: "Pending Orders",
      value: stats.pendingOrders,
      icon: Clock,
      href: "/admin/orders",
      description: "Orders awaiting action",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 leading-tight">
            Admin Dashboard
          </h1>

          <p className="text-gray-600 mt-3 text-base sm:text-lg max-w-2xl">
            Welcome to the Zawiyatu Shabaab Nasrullah administration panel.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                href={card.href}
                key={card.title}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl p-5 sm:p-6 transition-all duration-200 active:scale-[0.99]"
              >
                <div className="flex items-start justify-between gap-4">

                  <div className="min-w-0">
                    <p className="text-gray-500 text-sm sm:text-base">
                      {card.title}
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mt-3 break-words">
                      {loading ? "..." : card.value}
                    </h2>

                    <p className="text-sm text-gray-400 mt-2">
                      {card.description}
                    </p>
                  </div>

                  <div className="bg-green-50 p-3 rounded-xl shrink-0">
                    <Icon
                      size={24}
                      className="text-green-700"
                    />
                  </div>

                </div>
              </Link>
            );
          })}

        </div>

        {/* Quick Actions */}
        <section className="mt-8 sm:mt-10">

          <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-5">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <Link
              href="/admin/events"
              className="bg-green-700 text-white rounded-xl px-5 py-4 flex items-center justify-between hover:bg-green-800 transition"
            >
              <span>Manage Events</span>
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/admin/applications"
              className="bg-green-700 text-white rounded-xl px-5 py-4 flex items-center justify-between hover:bg-green-800 transition"
            >
              <span>Review Applications</span>
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/admin/members"
              className="bg-white text-green-800 rounded-xl px-5 py-4 flex items-center justify-between shadow hover:shadow-lg transition"
            >
              <span>Manage Members</span>
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/admin/donations"
              className="bg-white text-green-800 rounded-xl px-5 py-4 flex items-center justify-between shadow hover:shadow-lg transition"
            >
              <span>View Donations</span>
              <ArrowRight size={20} />
            </Link>

          </div>

        </section>

        {/* Recent Orders */}
        <section className="bg-white rounded-2xl shadow-md p-5 sm:p-6 mt-8 sm:mt-10">

          <div className="flex items-center justify-between gap-4 mb-6">

            <h2 className="text-xl sm:text-2xl font-bold text-green-800">
              Recent Orders
            </h2>

            <Link
              href="/admin/orders"
              className="text-green-700 font-semibold hover:underline text-sm sm:text-base whitespace-nowrap"
            >
              View All
            </Link>

          </div>

          {loading ? (

            <p className="text-gray-500">
              Loading orders...
            </p>

          ) : orders.length === 0 ? (

            <div className="py-8 text-center">
              <ShoppingCart
                size={40}
                className="mx-auto text-gray-300 mb-3"
              />

              <p className="text-gray-500">
                No orders found.
              </p>
            </div>

          ) : (

            <div className="overflow-x-auto -mx-5 sm:-mx-6 px-5 sm:px-6">

              <table className="w-full min-w-[650px]">

                <thead>
                  <tr className="border-b text-gray-500 text-sm">
                    <th className="text-left py-3 font-semibold">
                      Order
                    </th>

                    <th className="text-left py-3 font-semibold">
                      Customer
                    </th>

                    <th className="text-left py-3 font-semibold">
                      Total
                    </th>

                    <th className="text-left py-3 font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {orders.slice(0, 10).map((order) => (

                    <tr
                      key={order._id}
                      className="border-b last:border-b-0"
                    >

                      <td className="py-4 font-medium text-gray-800">
                        {order.orderNumber}
                      </td>

                      <td className="text-gray-700">
                        {order.customerName}
                      </td>

                      <td className="text-gray-700">
                        GH₵{Number(order.total || 0).toLocaleString()}
                      </td>

                      <td>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                            order.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : order.status === "Confirmed"
                              ? "bg-blue-100 text-blue-700"
                              : order.status === "Processing"
                              ? "bg-purple-100 text-purple-700"
                              : order.status === "Ready"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </section>

      </div>
    </main>
  );
}