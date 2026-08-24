"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Package,
  Users,
  UserPlus,
  HeartHandshake,
  CreditCard,
  Clock,
  ArrowRight,
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
        ] = await Promise.all([
          fetch("/api/orders"),
          fetch("/api/products"),
          fetch("/api/members"),
          fetch("/api/admin/applications"),
          fetch("/api/donations"),
        ]);

        const ordersData = await ordersRes.json();
        const productsData = await productsRes.json();
        const membersData = await membersRes.json();
        const applicationsData = await applicationsRes.json();
        const donationsData = await donationsRes.json();

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
      title: "Total Members",
      value: stats.totalMembers,
      icon: Users,
      href: "/admin/members",
      description: "Registered members",
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
      value: `₵${stats.totalDonations.toLocaleString()}`,
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
      value: `₵${stats.totalRevenue.toLocaleString()}`,
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
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800">
            Admin Dashboard
          </h1>

          <p className="text-gray-600 mt-3">
            Welcome to the Zawiyatu Shabaab Nasrullah administration panel.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                href={card.href}
                key={card.title}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition group"
              >
                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-gray-500 text-sm">
                      {card.title}
                    </p>

                    <h2 className="text-3xl font-bold text-green-700 mt-3">
                      {loading ? "..." : card.value}
                    </h2>

                    <p className="text-sm text-gray-400 mt-2">
                      {card.description}
                    </p>
                  </div>

                  <div className="bg-green-50 p-3 rounded-xl">
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
        <section className="mt-10">

          <h2 className="text-2xl font-bold text-green-800 mb-5">
            Quick Actions
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

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

            <Link
              href="/admin/orders"
              className="bg-white text-green-800 rounded-xl px-5 py-4 flex items-center justify-between shadow hover:shadow-lg transition"
            >
              <span>Manage Orders</span>
              <ArrowRight size={20} />
            </Link>

          </div>

        </section>

        {/* Recent Orders */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mt-10">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-bold text-green-800">
              Recent Orders
            </h2>

            <Link
              href="/admin/orders"
              className="text-green-700 font-semibold hover:underline"
            >
              View All
            </Link>

          </div>

          {loading ? (

            <p className="text-gray-500">
              Loading orders...
            </p>

          ) : orders.length === 0 ? (

            <p className="text-gray-500">
              No orders found.
            </p>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="border-b">

                    <th className="text-left py-3">
                      Order
                    </th>

                    <th className="text-left py-3">
                      Customer
                    </th>

                    <th className="text-left py-3">
                      Total
                    </th>

                    <th className="text-left py-3">
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

                      <td className="py-4 font-medium">
                        {order.orderNumber}
                      </td>

                      <td>
                        {order.customerName}
                      </td>

                      <td>
                        ₵{Number(order.total || 0).toLocaleString()}
                      </td>

                      <td>

                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
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