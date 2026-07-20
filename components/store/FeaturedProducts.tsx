import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/product";

export default function FeaturedProducts() {

  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold text-green-800 mb-10 text-center">
        Featured Products
      </h2>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {featuredProducts.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >

            <div className="relative">

              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-72 object-cover"
              />


              {product.badge && (
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                  {product.badge}
                </span>
              )}

            </div>


            <div className="p-6">

              <h3 className="text-xl font-semibold">
                {product.name}
              </h3>


              <p className="text-green-700 font-bold text-xl mt-3">
                ₵{product.price}
              </p>


              <Link
                href={`/store/${product.id}`}
                className="inline-block mt-5 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800"
              >
                View Product
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}