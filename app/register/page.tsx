"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";


export default function RegisterPage() {


  const router = useRouter();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");



  const [accessChecking, setAccessChecking] =
    useState(true);

  const [hasAccess, setHasAccess] =
    useState(false);



  const [step, setStep] =
    useState(1);


  const [submitted, setSubmitted] =
    useState(false);


  const [referenceNumber, setReferenceNumber] =
    useState("");



  const [formData, setFormData] = useState({

    fullName: "",
    phone: "",
    whatsapp: "",
    email: "",
    gender: "",
    dateOfBirth: "",

    address: "",
    occupation: "",

    dateJoined: "",
    membershipType: "",

    emergencyName: "",
    emergencyRelationship: "",
    emergencyPhone: "",

    photo: "",

    agreement: false,

  });





  useEffect(() => {


    async function checkPaymentAccess(){


      if(!token){


        router.push("/become-a-member");

        return;


      }



      try{


        const response =
          await fetch(
            "/api/payment/access/check",
            {

              method:"POST",

              headers:{

                "Content-Type":
                "application/json",

              },


              body:JSON.stringify({

                token,

              }),

            }
          );




        const data =
          await response.json();




        if(data.success){


          setHasAccess(true);


        }else{


          router.push("/become-a-member");


        }




      }catch(error){


        console.error(error);


        router.push("/become-a-member");


      }finally{


        setAccessChecking(false);


      }


    }



    checkPaymentAccess();



  },[token,router]);







  const handlePhotoUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {


    const file =
      e.target.files?.[0];



    if(!file) return;



    const reader =
      new FileReader();



    reader.onloadend = () => {


      setFormData((prev)=>({

        ...prev,

        photo:
        reader.result as string,

      }));


    };



    reader.readAsDataURL(file);


  };






  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {


    const {
      name,
      value,
      type
    } = e.target;



    setFormData((prev)=>({

      ...prev,


      [name]:

        type === "checkbox"

        ? (e.target as HTMLInputElement).checked

        : value,


    }));


  };







  const nextStep = () => {


    if(step < 4){

      setStep(step + 1);

    }


  };





  const previousStep = () => {


    if(step > 1){

      setStep(step - 1);

    }


  };






  const handleSubmit = async () => {


    if(!formData.agreement){


      alert(
        "Please accept the declaration before submitting."
      );


      return;


    }



    const today =
      new Date();



    const dateCode =

      today.getFullYear().toString() +

      String(
        today.getMonth()+1
      ).padStart(2,"0") +

      String(
        today.getDate()
      ).padStart(2,"0");




    const random =

      Math.floor(
        1000 + Math.random()*9000
      );




    const generatedReference =

      `ZSN-REG-${dateCode}-${random}`;





    try{


      const response =
        await fetch(
          "/api/register",
          {


            method:"POST",


            headers:{

              "Content-Type":
              "application/json",

            },


            body:JSON.stringify({

              ...formData,

              applicationReference:
              generatedReference,


              paymentToken:
              token,


            }),


          }
        );





      const result =
        await response.json();




      if(result.success){


        setReferenceNumber(
          generatedReference
        );


        setSubmitted(true);


      }



    }catch(error){


      console.error(error);


      alert(
        "Registration failed. Please try again."
      );


    }


  };






  if(accessChecking){


    return (

      <main className="min-h-screen flex items-center justify-center bg-gray-50">

        <p className="text-gray-600">

          Checking payment...

        </p>

      </main>

    );


  }





  if(!hasAccess){


    return null;


  }
  if(submitted){


    return (

      <main className="min-h-screen bg-gray-50 py-20">


        <div className="max-w-2xl mx-auto px-6">


          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">


            <h1 className="text-3xl font-bold text-green-800 mb-4">

              Registration Submitted Successfully

            </h1>



            <p className="text-gray-600">

              Thank you for registering with Zawiyatu Shabaab Nasrullah.
              Your application has been received and is awaiting approval.

            </p>




            <div className="mt-6 bg-green-50 rounded-xl p-5">


              <p className="text-gray-700">

                Your Application Reference Number:

              </p>



              <h2 className="text-2xl font-bold text-green-800 mt-2">

                {referenceNumber}

              </h2>


            </div>


          </div>


        </div>


      </main>

    );


  }






  return (

    <main className="min-h-screen bg-gray-50 py-20">


      <div className="max-w-3xl mx-auto px-6">


        <div className="bg-white rounded-3xl shadow-lg p-8">


          <h1 className="text-4xl font-bold text-center text-green-800">

            Member Registration

          </h1>




          <p className="text-center text-gray-500 mt-2">

            Step {step} of 4

          </p>





          <div className="w-full bg-gray-200 rounded-full h-3 mt-8 mb-10">


            <div

              className="bg-green-700 h-3 rounded-full transition-all"

              style={{

                width:`${(step / 4) * 100}%`

              }}

            />


          </div>






          {step === 1 && (

            <div>


              <h2 className="text-2xl font-bold text-green-800 mb-6">

                Personal Information

              </h2>



              <div className="space-y-5">


                <input

                  name="fullName"

                  value={formData.fullName}

                  onChange={handleChange}

                  placeholder="Full Name"

                  className="input"

                />



                <input

                  name="phone"

                  value={formData.phone}

                  onChange={handleChange}

                  placeholder="Phone Number"

                  className="input"

                />



                <input

                  name="whatsapp"

                  value={formData.whatsapp}

                  onChange={handleChange}

                  placeholder="WhatsApp Number"

                  className="input"

                />



                <input

                  type="email"

                  name="email"

                  value={formData.email}

                  onChange={handleChange}

                  placeholder="Email Address"

                  className="input"

                />



                <select

                  name="gender"

                  value={formData.gender}

                  onChange={handleChange}

                  className="input"

                >

                  <option value="">

                    Select Gender

                  </option>


                  <option value="Male">

                    Male

                  </option>


                  <option value="Female">

                    Female

                  </option>


                </select>




                <input

                  type="date"

                  name="dateOfBirth"

                  value={formData.dateOfBirth}

                  onChange={handleChange}

                  className="input"

                />





                <div>


                  <label className="block mb-2 font-medium">

                    Passport Photo

                  </label>




                  <input

                    type="file"

                    accept="image/*"

                    onChange={handlePhotoUpload}

                    className="w-full border rounded-xl px-4 py-3"

                  />




                  {formData.photo && (

                    <img

                      src={formData.photo}

                      alt="Preview"

                      className="mt-4 w-32 h-32 rounded-full object-cover border"

                    />

                  )}



                </div>



              </div>


            </div>

          )}







          {step === 2 && (

            <div>


              <h2 className="text-2xl font-bold text-green-800 mb-6">

                Contact Information

              </h2>




              <div className="space-y-5">


                <textarea

                  name="address"

                  value={formData.address}

                  onChange={handleChange}

                  placeholder="Residential Address"

                  rows={4}

                  className="input"

                />





                <input

                  name="occupation"

                  value={formData.occupation}

                  onChange={handleChange}

                  placeholder="Occupation"

                  className="input"

                />


              </div>


            </div>

          )}
id="part3"
          {step === 3 && (

            <div>


              <h2 className="text-2xl font-bold text-green-800 mb-6">

                Membership Information

              </h2>



              <div className="space-y-5">



                <input

                  type="date"

                  name="dateJoined"

                  value={formData.dateJoined}

                  onChange={handleChange}

                  className="input"

                />





                <select

                  name="membershipType"

                  value={formData.membershipType}

                  onChange={handleChange}

                  className="input"

                >


                  <option value="">

                    Select Membership Type

                  </option>



                  <option value="Regular Member">

                    Regular Member

                  </option>



                  <option value="Volunteer">

                    Volunteer

                  </option>



                  <option value="Executive">

                    Executive

                  </option>



                </select>


              </div>


            </div>


          )}







          {step === 4 && (

            <div>


              <h2 className="text-2xl font-bold text-green-800 mb-6">

                Emergency Contact & Declaration

              </h2>




              <div className="space-y-5">



                <input

                  name="emergencyName"

                  value={formData.emergencyName}

                  onChange={handleChange}

                  placeholder="Emergency Contact Name"

                  className="input"

                />





                <input

                  name="emergencyRelationship"

                  value={formData.emergencyRelationship}

                  onChange={handleChange}

                  placeholder="Relationship"

                  className="input"

                />





                <input

                  name="emergencyPhone"

                  value={formData.emergencyPhone}

                  onChange={handleChange}

                  placeholder="Emergency Phone Number"

                  className="input"

                />







                <label className="flex gap-3 items-start">


                  <input

                    type="checkbox"

                    name="agreement"

                    checked={formData.agreement}

                    onChange={handleChange}

                    className="mt-1"

                  />



                  <span className="text-gray-700">

                    I agree to abide by the rules and values of
                    Zawiyatu Shabaab Nasrullah.

                  </span>



                </label>






                <div className="bg-gray-50 rounded-xl p-5">


                  <h3 className="font-bold text-green-800 mb-3">

                    Review Information

                  </h3>




                  <p>

                    <strong>Name:</strong>{" "}

                    {formData.fullName}

                  </p>




                  <p>

                    <strong>Phone:</strong>{" "}

                    {formData.phone}

                  </p>




                  <p>

                    <strong>Membership:</strong>{" "}

                    {formData.membershipType}

                  </p>




                  {formData.photo && (

                    <img

                      src={formData.photo}

                      alt="Member"

                      className="mt-4 w-24 h-24 rounded-full object-cover border"

                    />

                  )}



                </div>



              </div>


            </div>


          )}








          <div className="flex justify-between mt-10">



            <button

              onClick={previousStep}

              disabled={step === 1}

              className="px-6 py-3 bg-gray-300 rounded-lg disabled:opacity-50"

            >

              Previous

            </button>







            <button

              onClick={
                step === 4
                ? handleSubmit
                : nextStep
              }

              className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800"

            >


              {
                step === 4
                ? "Submit Registration"
                : "Next"
              }



            </button>



          </div>






        </div>


      </div>


    </main>


  );


}