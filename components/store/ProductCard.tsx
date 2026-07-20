import Image from "next/image";

type ProductProps = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export default function ProductCard({
  name,
  description,
  price,
  image,
}: ProductProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

      <div className="relative h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-semibold text-green-800">
          {name}
        </h3>

        <p className="text-gray-600 mt-3">
          {description}
        </p>

        <div className="flex justify-between items-center mt-6">

          <span className="font-bold text-lg">
            {price}
          </span>

          <button className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800">
            View Details
          </button>

        </div>

      </div>

    </div>
  );
}