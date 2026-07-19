export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-900">

      <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>

      <h2 className="mt-6 text-xl font-bold text-white">
        Zawiyatu Shabaab Nasrullah
      </h2>

      <p className="mt-2 text-green-100">
        Loading...
      </p>

    </div>
  );
}