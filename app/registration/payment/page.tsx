"use client";

import { useState } from "react";

export default function PaymentPage() {

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);


  const handlePayment = async () => {

    if (!phone) {

      alert("Please enter your Mobile Money number");

      return;

    }


    setLoading(true);


    try {


      const response = await fetch(
        "/api/payment/paystack",
        {

          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({

            phone,

            amount: 200,

          }),

        }
      );



      const data = await response.json();



      if (data.success) {


        // Redirect user to Paystack checkout

        window.location.href =
          data.authorizationUrl;


      } else {


        alert(
          data.message ||
          "Payment initialization failed"
        );


      }



    } catch(error) {


      console.error(error);


      alert(
        "Payment failed. Please try again."
      );


    } finally {


      setLoading(false);


    }


  };



  return (

    <main className="min-h-screen bg-gray-50 py-16">


      <div className="max-w-xl mx-auto px-6">


        <div className="bg-white rounded-3xl shadow-xl p-8">


          <h1 className="text-4xl font-bold text-center text-green-800">
            Membership Payment
          </h1>


          <p className="text-center text-gray-600 mt-3">
            Complete your registration fee payment to continue.
          </p>



          <div className="bg-green-50 rounded-2xl p-6 mt-8 text-center">


            <p className="text-gray-600">
              Registration Fee
            </p>


            <h2 className="text-5xl font-bold text-green-800 mt-2">
              GH₵ 200.00
            </h2>


          </div>




          <div className="mt-8">


            <label className="font-semibold text-gray-700">
              Mobile Money Number
            </label>


            <input

              type="tel"

              placeholder="024XXXXXXX"

              value={phone}

              onChange={(e) =>
                setPhone(e.target.value)
              }

              className="w-full border rounded-xl px-4 py-3 mt-2"

            />


          </div>




          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mt-8">


            <h3 className="font-bold text-red-700">
              Important Notice
            </h3>


            <p className="text-gray-700 mt-2">

              Money paid for the registration form is{" "}

              <strong>
                non-refundable
              </strong>
              
              . Payment does not guarantee membership approval.

            </p>


          </div>




          <button

            onClick={handlePayment}

            disabled={loading}

            className="w-full mt-8 bg-green-700 hover:bg-green-800 disabled:bg-gray-400 text-white py-4 rounded-full font-bold text-lg"

          >

            {loading
              ? "Processing Payment..."
              : "Pay with Mobile Money"
            }


          </button>



        </div>


      </div>


    </main>

  );

}