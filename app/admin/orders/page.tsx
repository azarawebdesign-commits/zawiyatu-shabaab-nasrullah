"use client";

import { useEffect, useState } from "react";
import AdminLogout from "@/components/AdminLogout";


type Order = {
  _id: string;
  customerName: string;
  phone: string;
  address: string;
  total: number;
  status: string;
  items: {
    name: string;
    price: number;
    quantity: number;
    size: string;
  }[];
  createdAt: string;
};


export default function OrdersPage() {

  const [orders, setOrders] = useState<Order[]>([]);


  async function fetchOrders() {

    const response = await fetch("/api/orders");

    const data = await response.json();

    setOrders(data);

  }


  useEffect(() => {

    fetchOrders();

  }, []);



  async function updateStatus(
    id: string,
    status: string
  ) {

    await fetch(`/api/orders/${id}`, {

      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        status,
      }),

    });


    fetchOrders();

  }



  return (

    <main className="min-h-screen bg-gray-50 py-16">

      <div className="flex justify-between items-center mb-8">

  <h1 className="text-3xl font-bold text-green-800">
    Orders Management
  </h1>


  <AdminLogout />

</div>

      <div className="max-w-6xl mx-auto px-6">


        <h1 className="text-4xl font-bold text-green-800 mb-10">
          Customer Orders
        </h1>



        {orders.length === 0 ? (

          <div className="bg-white rounded-2xl shadow p-8 text-center">
            No orders found.
          </div>

        ) : (

          <div className="space-y-6">

            {orders.map((order) => (

              <div
                key={order._id}
                className="bg-white rounded-2xl shadow p-6"
              >

                <h2 className="text-2xl font-bold">
                  {order.customerName}
                </h2>


                <p>
                  Phone: {order.phone}
                </p>


                <p>
                  Address: {order.address}
                </p>


                <p className="text-green-700 font-bold mt-3">
                  Total: ₵{order.total}
                </p>


                <p className="mt-3">
                  Status:
                  <span className="font-bold ml-2">
                    {order.status}
                  </span>
                </p>



                <div className="flex flex-wrap gap-3 mt-5">

                  {[
                    "Pending",
                    "Processing",
                    "Completed",
                    "Cancelled",
                  ].map((status) => (

                    <button
                      key={status}
                      onClick={() =>
                        updateStatus(order._id, status)
                      }
                      className={`px-5 py-2 rounded-full ${
                        order.status === status
                          ? "bg-green-700 text-white"
                          : "border border-green-700 text-green-700"
                      }`}
                    >
                      {status}
                    </button>

                  ))}

                </div>



                <div className="mt-6">

                  <h3 className="font-bold">
                    Products:
                  </h3>


                  {order.items.map((item, index) => (

                    <p
                      key={index}
                      className="text-gray-600"
                    >
                      {item.name} | Size: {item.size} | Qty: {item.quantity}
                    </p>

                  ))}

                </div>


              </div>

            ))}

          </div>

        )}


      </div>

    </main>

  );

}