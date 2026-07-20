"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {

  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart
  } = useCart();


  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");


  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


  const whatsappMessage = encodeURIComponent(
`Assalamu Alaikum.

Customer Details:

Name: ${name}
Phone: ${phone}
Location: ${location}

Order:

${cart
  .map(
    (item) =>
`${item.name}
Size: ${item.size}
Quantity: ${item.quantity}
Price: ₵${item.price * item.quantity}`
  )
  .join("\n\n")}

Total: ₵${total}

Thank you.`
  );


  return (
    <main className="min-h-screen bg-gray-50 py-16">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-green-800 mb-10">
          Your Cart
        </h1>


        {cart.length === 0 ? (

          <div className="bg-white rounded-2xl shadow p-8 text-center">

            <p className="text-gray-600 mb-6">
              Your cart is empty.
            </p>

            <Link
              href="/store"
              className="bg-green-700 text-white px-6 py-3 rounded-full"
            >
              Continue Shopping
            </Link>

          </div>

        ) : (

          <div className="space-y-6">

            {cart.map((item) => (

              <div
                key={`${item.id}-${item.size}`}
                className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row gap-6 items-center"
              >

                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                  className="rounded-xl object-cover"
                />


                <div className="flex-1">

                  <h2 className="text-2xl font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-gray-600">
                    Size: {item.size}
                  </p>


                  <div className="flex items-center gap-3 mt-3">

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.size,
                          item.quantity - 1
                        )
                      }
                      className="px-3 py-1 border rounded-full"
                    >
                      -
                    </button>


                    <span className="font-semibold">
                      {item.quantity}
                    </span>


                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.size,
                          item.quantity + 1
                        )
                      }
                      className="px-3 py-1 border rounded-full"
                    >
                      +
                    </button>

                  </div>


                  <p className="text-green-700 font-bold mt-2">
                    ₵{item.price * item.quantity}
                  </p>

                </div>


                <button
                  onClick={() =>
                    removeFromCart(item.id, item.size)
                  }
                  className="bg-red-600 text-white px-5 py-2 rounded-full"
                >
                  Remove
                </button>

              </div>

            ))}


            <div className="bg-white rounded-2xl shadow p-8">


              <h2 className="text-3xl font-bold text-green-800 mb-6">
                Customer Details
              </h2>


              <div className="space-y-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  className="w-full border p-3 rounded-lg"
                />


                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  className="w-full border p-3 rounded-lg"
                />


                <input
                  type="text"
                  placeholder="Delivery Location"
                  value={location}
                  onChange={(e)=>setLocation(e.target.value)}
                  className="w-full border p-3 rounded-lg"
                />

              </div>



              <h2 className="text-3xl font-bold text-green-800 mt-8">
                Total: ₵{total}
              </h2>



              <div className="flex flex-col md:flex-row gap-4 mt-8">


                <button
                  onClick={clearCart}
                  className="border px-8 py-3 rounded-full"
                >
                  Clear Cart
                </button>



                <a
                  href={`https://wa.me/233559008205?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-700 text-white px-8 py-3 rounded-full text-center"
                >
                  Checkout on WhatsApp
                </a>


              </div>

            </div>


          </div>

        )}

      </div>

    </main>
  );
}