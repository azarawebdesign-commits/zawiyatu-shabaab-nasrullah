"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
};

type Order = {
  orderNumber: string;
  customerName: string;
  phone: string;
  address: string;
  total: number;
  status: string;
  createdAt: string;
  items: OrderItem[];
};

export default function TrackOrderPage() {
  const params = useParams();

  const orderNumber = decodeURIComponent(
    params.orderNumber as string
  );

  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const response = await fetch(
          `/api/orders/${orderNumber}`
        );

        const data = await response.json();

        if (data.success) {
          setOrder(data.order);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchOrder();
  }, [orderNumber]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Loading order...
        </h2>
      </main>
    );
  }

  if (!order) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold text-red-600">
          Order Not Found
        </h1>

        <Link
          href="/track-order"
          className="bg-green-700 text-white px-8 py-3 rounded-full"
        >
          Try Again
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-green-800 mb-8">
          Order Details
        </h1>

        <div className="space-y-6">

  <div>
    <p className="text-gray-500">Order Number</p>
    <h2 className="text-xl font-bold">
      {order.orderNumber}
    </h2>
  </div>

  <div>
    <p className="text-gray-500">Customer</p>
    <h2 className="font-semibold">
      {order.customerName}
    </h2>
  </div>

  <div>
    <p className="text-gray-500">Phone</p>
    <h2>{order.phone}</h2>
  </div>

  <div>
    <p className="text-gray-500">Delivery Address</p>
    <h2>{order.address}</h2>
  </div>

  <div>
    <p className="text-gray-500 mb-2">Status</p>

    <span
      className={`inline-block px-4 py-2 rounded-full font-semibold ${
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
  </div>

  <div>
    <h2 className="text-xl font-bold mb-4">
      Items Ordered
    </h2>

    <div className="space-y-3">
      {order.items.map((item, index) => (
        <div
          key={index}
          className="border rounded-xl p-4"
        >
          <h3 className="font-semibold">
            {item.name}
          </h3>

          <p>Size: {item.size}</p>

          <p>Quantity: {item.quantity}</p>

          <p>
            ₵{item.price * item.quantity}
          </p>
        </div>
      ))}
    </div>
  </div>

  <div className="border-t pt-6">
    <h2 className="text-2xl font-bold text-green-700">
      Total: ₵{order.total}
    </h2>

    <p className="text-gray-500 mt-2">
      Ordered on{" "}
      {new Date(order.createdAt).toLocaleDateString()}
    </p>
  </div>

</div>

      </div>
    </main>
  );
}