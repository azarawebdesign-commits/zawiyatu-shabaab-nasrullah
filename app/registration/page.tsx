import Link from "next/link";

export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-800">
            Become a Member
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Welcome to the official membership registration portal of
            <span className="font-semibold text-green-800">
              {" "}Zawiyatu Shabaab Nasrullah.
            </span>
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Membership Requirements
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Be committed to the objectives and values of the Zawiyatu.</li>
            <li>Provide accurate personal information during registration.</li>
            <li>Complete the required registration payment.</li>
            <li>Respect the leadership and constitution of the organization.</li>
            <li>Participate actively in meetings, programmes, and activities.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Registration Process
          </h2>

          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>Read the membership information carefully.</li>
            <li>Proceed to pay the registration fee.</li>
            <li>Complete the membership application form.</li>
            <li>Await review by the Executive Council.</li>
            <li>Receive your Membership ID after approval.</li>
            <li>Generate and print your official Membership Card.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Important Notice
          </h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl text-gray-700">
            <ul className="space-y-2 list-disc pl-5">
              <li>Registration payment is non-refundable.</li>
              <li>Submitting an application does not guarantee automatic membership.</li>
              <li>Membership becomes active only after official approval.</li>
              <li>False information may lead to rejection of the application.</li>
            </ul>
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/registration/payment"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-2xl transition"
          >
            I Have Read and Agree — Continue to Payment
          </Link>
        </div>

      </div>
    </main>
  );
}