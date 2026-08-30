import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <section className="text-center mb-16">

          <h1 className="text-5xl font-bold text-green-800 mb-5">
            Contact Us
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Get in touch with Zawiyatu Shabaab Nasrullah.
            We are always happy to hear from you.
          </p>

        </section>


        <section className="grid md:grid-cols-3 gap-8">

          {/* Location */}
          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">

            <MapPin
              size={45}
              className="mx-auto mb-5 text-[#d4af37]"
            />

            <h2 className="text-2xl font-bold text-green-800 mb-3">
              Location
            </h2>

            <p className="text-gray-600">
              Penny Wise, Sabon Zango, Accra, Ghana
            </p>

          </div>


          {/* Phone */}
          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">

            <Phone
              size={45}
              className="mx-auto mb-5 text-[#d4af37]"
            />

            <h2 className="text-2xl font-bold text-green-800 mb-3">
              Phone
            </h2>

            <p className="text-gray-600">
              +233 55 748 1721
            </p>

            <p className="text-gray-600">
              +233 55 900 8205
            </p>

          </div>


          {/* Email */}
          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">

            <Mail
              size={45}
              className="mx-auto mb-5 text-[#d4af37]"
            />

            <h2 className="text-2xl font-bold text-green-800 mb-3">
              Email
            </h2>

            <p className="text-gray-600 break-all">
              zawiyatushabaabnasrullah@gmail.com
            </p>

          </div>

        </section>


        {/* Additional Contact Information */}
        <section className="mt-16 bg-white rounded-3xl shadow-lg p-8 text-center">

          <h2 className="text-3xl font-bold text-green-800 mb-4">
            We Would Love to Hear From You
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Whether you want to learn more about Zawiyatu Shabaab
            Nasrullah, participate in our programmes, become a member,
            support our activities, or simply get in touch with us,
            feel free to contact us.
          </p>

        </section>

      </div>

    </main>
  );
}