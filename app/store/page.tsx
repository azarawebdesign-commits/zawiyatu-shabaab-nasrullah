import Image from "next/image";
import Link from "next/link";
import { products } from "../data/product";

export default function StorePage() {
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

        <h2 className="text-3xl font-bold text-green-800 mb-10">
          Featured Products
        </h2>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product) => (

            <div
              key={product.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >

              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-80 object-cover"
              />


              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  {product.name}
                </h3>


                <p className="text-gray-600 mt-3">
                  {product.description}
                </p>


                <p className="text-green-800 font-bold text-xl mt-4">
                  ₵{product.price}
                </p>


                <Link
  href={`/store/${product.id}`}
  className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition inline-block"
>
  View Details
</Link>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}