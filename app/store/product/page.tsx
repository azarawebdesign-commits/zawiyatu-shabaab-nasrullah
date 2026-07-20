"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

const products = {
  "zawiya-tshirt": {
    name: "Official Zawiya T-Shirt",
    image: "/images/store/tshirt.jpg",
    price: "GH₵ 70",
    description:
      "Official Zawiyatu Shabaab Nasrullah branded shirt representing our identity and unity.",
  },

  "maulid-tshirt": {
    name: "Maulid Nabiyyi 2026 T-Shirt",
    image: "/images/store/tshirt.jpg",
    price: "GH₵ 70",
    description:
      "Special Maulid Nabiyyi commemorative collection.",
  },
};


export default function ProductPage() {

  const params = useParams();

  const product =
    products[params.product as keyof typeof products];


  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);


  if (!product) {
    return (
      <div className="p-10">
        Product not found
      </div>
    );
  }


  return (

    <main className="min-h-screen bg-gray-50 py-20">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">


        <Image
          src={product.image}
          alt={product.name}
          width={700}
          height={700}
          className="rounded-3xl object-cover"
        />


        <div>


          <h1 className="text-4xl font-bold text-green-800">
            {product.name}
          </h1>


          <p className="mt-5 text-gray-600">
            {product.description}
          </p>


          <h2 className="text-3xl font-bold mt-6 text-green-700">
            {product.price}
          </h2>



          <div className="mt-8">

            <h3 className="font-semibold mb-3">
              Select Size
            </h3>


            <div className="flex gap-3">

              {["S","M","L","XL"].map((item)=>(
                <button
                  key={item}
                  onClick={()=>setSize(item)}
                  className={`px-5 py-2 rounded-full border ${
                    size === item
                    ? "bg-green-700 text-white"
                    : ""
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>



          <div className="mt-8">

            <h3 className="font-semibold mb-3">
              Quantity
            </h3>


            <div className="flex items-center gap-4">

              <button
                onClick={()=>setQuantity(Math.max(1, quantity-1))}
                className="px-4 py-2 border rounded"
              >
                -
              </button>


              <span>
                {quantity}
              </span>


              <button
                onClick={()=>setQuantity(quantity+1)}
                className="px-4 py-2 border rounded"
              >
                +
              </button>

            </div>

          </div>



          <button
            className="mt-10 bg-green-700 text-white px-10 py-4 rounded-full text-lg"
          >
            Order Now
          </button>


        </div>

      </div>

    </main>

  );
}