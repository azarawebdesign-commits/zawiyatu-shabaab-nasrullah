import Image from "next/image";
import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/product";
import StoreFilters from "@/components/StoreFilters";

export default async function StorePage() {

  await connectDB();

  const products = await Product.find().lean();

  const serializedProducts = products.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    description: product.description,
    sizes: product.sizes,
    category: product.category,
    stock: product.stock,
    featured: product.featured,
    badge: product.badge,
  }));


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


        <StoreFilters products={serializedProducts} />


      </section>

    </main>
  );
}