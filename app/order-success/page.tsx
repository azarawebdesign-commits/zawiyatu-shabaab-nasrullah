import Link from "next/link";

type Props = {
  searchParams: Promise<{
    orderNumber?: string;
  }>;
};

export default async function OrderSuccessPage({
  searchParams,
}: Props) {
  const { orderNumber } = await searchParams;

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-lg w-full">

        <div className="text-6xl mb-5">
          🎉
        </div>

        <h1 className="text-3xl font-bold text-green-800 mb-4">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mb-8">
          Thank you for your order. We have received your request and
          will contact you shortly for confirmation and delivery.
        </p>

        {orderNumber && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">

            <p className="text-sm text-gray-500">
              Order Number
            </p>

            <h2 className="text-2xl font-bold text-green-800 mt-2">
              {orderNumber}
            </h2>

            <p className="mt-4 text-sm text-gray-600">
              Status:
            </p>

            <p className="text-lg font-semibold text-yellow-600">
              🟡 Pending
            </p>

          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/store"
            className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800"
          >
            Continue Shopping
          </Link>

          <Link
            href="/track-order"
            className="border border-green-700 text-green-700 px-8 py-3 rounded-full hover:bg-green-50"
          >
            Track My Order
          </Link>

        </div>

      </div>
    </main>
  );
}