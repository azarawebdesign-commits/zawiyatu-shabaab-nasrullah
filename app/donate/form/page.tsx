"use client";

import { useState } from "react";
import { Copy, MessageCircle, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";


export default function DonationFormPage() {


  const [form, setForm] = useState({

    donorName: "",

    phone: "",

    amount: "",

    purpose: "General Support",

    paymentMethod: "MTN Mobile Money",

  });





  const copyNumber = async () => {

    await navigator.clipboard.writeText("+233557481721");

    toast.success("MTN Mobile Money number copied!");

  };







  async function submitDonation(){


    const response = await fetch(

      "/api/donations",

      {

        method:"POST",

        headers:{

          "Content-Type":"application/json",

        },


        body:JSON.stringify({

          ...form,

          date:new Date().toLocaleDateString(),

          paymentStatus:"Pending",

        }),


      }

    );




    const data = await response.json();




    if(data.success){


      toast.success(

        "Donation submitted successfully. Waiting for confirmation."

      );



      setForm({

        donorName:"",

        phone:"",

        amount:"",

        purpose:"General Support",

        paymentMethod:"MTN Mobile Money",

      });


    }



  }







return (


<main className="min-h-screen bg-gray-50 py-20">


<div className="max-w-4xl mx-auto px-6">



<motion.div

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{duration:0.8}}

>





<div className="text-center">


<HeartHandshake

size={70}

className="mx-auto mb-6 text-[#d4af37]"

/>



<h1 className="text-4xl md:text-5xl font-bold text-green-800">

Make A Donation

</h1>


<p className="mt-5 text-gray-600">

Your support helps Zawiyatu Shabaab Nasrullah continue its programs.

</p>


</div>








<div className="mt-10 bg-white rounded-3xl shadow p-8">


<h2 className="text-2xl font-bold text-green-800 mb-6">

Donation Information

</h2>




<div className="grid md:grid-cols-2 gap-5">



<input

placeholder="Full Name"

value={form.donorName}

onChange={(e)=>

setForm({

...form,

donorName:e.target.value

})

}

className="border rounded-xl p-3"

/>





<input

placeholder="Phone Number"

value={form.phone}

onChange={(e)=>

setForm({

...form,

phone:e.target.value

})

}

className="border rounded-xl p-3"

/>





<input

placeholder="Amount"

type="number"

value={form.amount}

onChange={(e)=>

setForm({

...form,

amount:e.target.value

})

}

className="border rounded-xl p-3"

/>





<select

value={form.paymentMethod}

onChange={(e)=>

setForm({

...form,

paymentMethod:e.target.value

})

}

className="border rounded-xl p-3"

>


<option>

MTN Mobile Money

</option>


<option>

AirtelTigo Money

</option>


</select>



</div>





<button

onClick={submitDonation}

className="mt-6 bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800"

>

Submit Donation

</button>




</div>









<div className="mt-8 bg-green-50 rounded-3xl p-8">


<h2 className="text-2xl font-bold text-green-800 mb-5">

Send Payment To

</h2>




<p>

MTN Mobile Money:

<strong> +233 55 748 1721</strong>

</p>



<p className="mt-3">

AirtelTigo Money:

<strong> +233 56 076 5521</strong>

</p>



<p className="mt-3">

Account Name:

<strong> Abdul Nasir Yussif</strong>

</p>






<div className="mt-6 flex flex-col md:flex-row gap-4">


<button

onClick={copyNumber}

className="flex items-center justify-center gap-2 bg-green-700 text-white px-6 py-3 rounded-full"

>

<Copy size={18}/>

Copy MTN Number

</button>





<a

href="https://wa.me/233557481721"

target="_blank"

className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full"

>

<MessageCircle size={18}/>

WhatsApp

</a>



</div>



</div>







</motion.div>


</div>


</main>


);


}