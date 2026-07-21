import Link from "next/link";

export default function OrderSuccessPage() {

  return (

    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-lg">

        <div className="text-5xl mb-5">
          ✅
        </div>


        <h1 className="text-3xl font-bold text-green-800 mb-4">
          Order Placed Successfully!
        </h1>


        <p className="text-gray-600 mb-8">
          Thank you for your order. We have received your request
          and will contact you shortly for confirmation and delivery.
        </p>


        <Link
          href="/store"
          className="inline-block bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800"
        >
          Continue Shopping
        </Link>


      </div>

    </main>

  );

}