"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";


type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  category: string;
  stock: number;
  badge?: "New" | "Best Seller" | "Sale";
};


export default function ProductPage() {

  const params = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);

  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);


  useEffect(() => {

    async function fetchProduct() {

      const response = await fetch(`/api/products/${params.id}`);

      const data = await response.json();

      setProduct(data);

    }

    fetchProduct();

  }, [params.id]);



  if (!product) {
    return (
      <div className="p-10">
        Loading product...
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
            ₵{product.price}
          </h2>


          <p className={`mt-3 font-semibold ${
            product.stock > 10
              ? "text-green-600"
              : product.stock > 0
              ? "text-orange-500"
              : "text-red-600"
          }`}>
            {product.stock > 10
              ? `In Stock (${product.stock})`
              : product.stock > 0
              ? `Only ${product.stock} left`
              : "Out of Stock"}
          </p>



          <div className="mt-8">

            <h3 className="font-semibold mb-3">
              Select Size
            </h3>


            <div className="flex gap-3">

              {product.sizes.map((item) => (

                <button
                  key={item}
                  onClick={() => setSize(item)}
                  className={`px-5 py-2 rounded-full border ${
                    size === item
                      ? "bg-green-700 text-white"
                      : "bg-white"
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
                onClick={() =>
                  setQuantity(Math.max(1, quantity - 1))
                }
                className="px-4 py-2 border rounded"
              >
                -
              </button>


              <span className="text-lg font-semibold">
                {quantity}
              </span>


              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
                className="px-4 py-2 border rounded"
              >
                +
              </button>

            </div>

          </div>




          <button
            disabled={product.stock === 0}
            onClick={() => {

              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                size,
                quantity,
              });


              toast.success(
                `${product.name} added to cart! 🛒`
              );

            }}
            className={`mt-8 px-8 py-3 rounded-full ${
              product.stock > 0
                ? "bg-green-700 text-white hover:bg-green-800"
                : "bg-gray-400 text-white cursor-not-allowed"
            }`}
          >
            {product.stock > 0
              ? "Add to Cart"
              : "Out of Stock"}
          </button>



          {product.stock > 0 && (

            <a
              href={`https://wa.me/233559008205?text=${encodeURIComponent(
`Assalamu Alaikum.

I would like to place an order.

Product: ${product.name}
Price: ₵${product.price}
Size: ${size}
Quantity: ${quantity}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 ml-4 bg-green-600 text-white px-10 py-4 rounded-full"
            >
              Order on WhatsApp
            </a>

          )}


        </div>

      </div>

    </main>
  );
}