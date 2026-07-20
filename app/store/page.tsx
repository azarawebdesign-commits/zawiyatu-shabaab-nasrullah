"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/product";

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Official Store
          </h1>

          <p className="text-green-100 max-w-2xl mx-auto">
            Purchase official Zawiyatu Shabaab Nasrullah
            merchandise and support our programmes and activities.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-green-800 mb-8">
          Featured Products
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition ${
                selectedCategory === category
                  ? "bg-green-700 text-white"
                  : "bg-white border border-green-700 text-green-700 hover:bg-green-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 text-lg py-12">
              No products found.
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <div className="relative">
  <Image
    src={product.image}
    alt={product.name}
    width={500}
    height={500}
    className="w-full h-80 object-cover"
  />

  {product.badge && (
    <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
      {product.badge}
    </span>
  )}
</div>

                <div className="p-6">
                  <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full mb-3">
                    {product.category}
                  </span>

                  <h3 className="text-2xl font-semibold">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mt-3">
                    {product.description}
                  </p>

                  <p className="text-green-800 font-bold text-xl mt-4">
  ₵{product.price}
</p>

<p
  className={`mt-2 text-sm font-medium ${
    product.stock > 10
      ? "text-green-600"
      : product.stock > 0
      ? "text-orange-500"
      : "text-red-600"
  }`}
>
  {product.stock > 10
    ? `In Stock (${product.stock})`
    : product.stock > 0
    ? `Only ${product.stock} left`
    : "Out of Stock"}
</p>

                  <Link
  href={`/store/${product.id}`}
  className={`inline-block mt-5 px-6 py-3 rounded-full transition ${
    product.stock > 0
      ? "bg-green-700 text-white hover:bg-green-800"
      : "bg-gray-400 text-white cursor-not-allowed pointer-events-none"
  }`}
>
  {product.stock > 0 ? "View Details" : "Out of Stock"}
</Link>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}