"use client";

import { useEffect, useState } from "react";

type Stats = {
  totalOrders: number;
  totalRevenue: number;
  totalProducts: number;
  pendingOrders: number;
};

type Order = {
  _id: string;
  orderNumber: string;
  customerName: string;
  total: number;
  status: string;
};

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats>({
    totalOrders: 0,
    totalRevenue: 0,
    totalProducts: 0,
    pendingOrders: 0,
  });

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const [ordersRes, productsRes] = await Promise.all([
          fetch("/api/orders"),
          fetch("/api/products"),
        ]);

        const ordersData = await ordersRes.json();
        const products = await productsRes.json();

        setOrders(ordersData);

        setStats({
          totalOrders: ordersData.length,
          totalRevenue: ordersData.reduce(
            (sum: number, order: Order) => sum + order.total,
            0
          ),
          totalProducts: products.length,
          pendingOrders: ordersData.filter(
            (order: Order) => order.status === "Pending"
          ).length,
        });
      } catch (error) {
        console.error("Dashboard Error:", error);
      }
    }

    loadDashboard();
  }, []);

  const cards = [
    {
      title: "Total Orders",
      value: stats.totalOrders,
    },
    {
      title: "Total Revenue",
      value: `₵${stats.totalRevenue}`,
    },
    {
      title: "Total Products",
      value: stats.totalProducts,
    },
    {
      title: "Pending Orders",
      value: stats.pendingOrders,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-green-800 mb-10">
          Admin Dashboard
        </h1>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <p className="text-gray-500">
                {card.title}
              </p>

              <h2 className="text-3xl font-bold text-green-700 mt-3">
                {card.value}
              </h2>
            </div>
          ))}

        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-10">

          <h2 className="text-2xl font-bold text-green-800 mb-6">
            Recent Orders
          </h2>

          {orders.length === 0 ? (

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
                      className="border-b"
                    >

                      <td className="py-4">
                        {order.orderNumber}
                      </td>

                      <td>
                        {order.customerName}
                      </td>

                      <td>
                        ₵{order.total}
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

        </div>

      </div>
    </main>
  );
}