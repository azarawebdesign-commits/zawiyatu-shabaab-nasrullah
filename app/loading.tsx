import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-900">

      <div className="animate-pulse">
        <Image
          src="/images/logo.png"
          alt="Zawiyatu Shabaab Nasrullah Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>


      <div className="mt-8 w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>


      <h2 className="mt-6 text-2xl font-bold text-white text-center">
        Zawiyatu Shabaab Nasrullah
      </h2>


      <p className="mt-3 text-green-100">
        Preparing your experience...
      </p>


    </div>
  );
}