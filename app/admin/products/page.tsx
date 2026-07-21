"use client";

import { useEffect, useState } from "react";


type Product = {
  _id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
  featured: boolean;
  image: string;
};



export default function AdminProductsPage() {


  const [products, setProducts] = useState<Product[]>([]);


  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);

  const [uploading, setUploading] = useState(false);





  async function fetchProducts() {

    const response = await fetch("/api/products");

    const data = await response.json();

    setProducts(data);

  }





  useEffect(() => {

    fetchProducts();

  }, []);







  async function uploadImage(file: File) {


    setUploading(true);


    const formData = new FormData();

    formData.append("file", file);



    const response = await fetch("/api/upload", {

      method: "POST",

      body: formData,

    });



    const data = await response.json();


    setImage(data.secure_url);


    setUploading(false);


  }








  async function addProduct() {


    await fetch("/api/products", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },


      body: JSON.stringify({

        name,

        price: Number(price),

        category,

        stock: Number(stock),

        featured: false,

        image,

        description: "New Zawiya product",

        sizes: [
          "S",
          "M",
          "L",
          "XL",
        ],

      }),

    });



    clearForm();

    fetchProducts();


  }









  async function updateProduct() {


    if (!editingId) return;



    await fetch(`/api/products/${editingId}`, {

      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
      },


      body: JSON.stringify({

        name,

        price: Number(price),

        category,

        stock: Number(stock),

        image,

      }),

    });



    clearForm();

    fetchProducts();


  }









  async function deleteProduct(id: string) {


    await fetch(`/api/products/${id}`, {

      method: "DELETE",

    });



    fetchProducts();


  }









  function editProduct(product: Product) {


    setEditingId(product._id);

    setName(product.name);

    setPrice(String(product.price));

    setCategory(product.category);

    setStock(String(product.stock));

    setImage(product.image);


  }








  function clearForm() {


    setEditingId(null);

    setName("");

    setPrice("");

    setCategory("");

    setStock("");

    setImage("");

  }









  return (

    <main className="min-h-screen bg-gray-50 py-16">


      <div className="max-w-6xl mx-auto px-6">



        <h1 className="text-4xl font-bold text-green-800 mb-10">
          Product Management
        </h1>






        <div className="bg-white rounded-2xl shadow p-6 mb-10">


          <h2 className="text-2xl font-bold mb-5">

            {editingId
              ? "Edit Product"
              : "Add New Product"}

          </h2>





          <div className="grid md:grid-cols-2 gap-4">



            <input

              placeholder="Product name"

              value={name}

              onChange={(e)=>setName(e.target.value)}

              className="border p-3 rounded-lg"

            />





            <input

              placeholder="Price"

              type="number"

              value={price}

              onChange={(e)=>setPrice(e.target.value)}

              className="border p-3 rounded-lg"

            />





            <input

              placeholder="Category"

              value={category}

              onChange={(e)=>setCategory(e.target.value)}

              className="border p-3 rounded-lg"

            />





            <input

              placeholder="Stock"

              type="number"

              value={stock}

              onChange={(e)=>setStock(e.target.value)}

              className="border p-3 rounded-lg"

            />




            <input

              type="file"

              accept="image/*"

              onChange={(e)=>{

                const file = e.target.files?.[0];

                if(file){

                  uploadImage(file);

                }

              }}

              className="border p-3 rounded-lg"

            />


          </div>






          {uploading && (

            <p className="text-green-700 mt-3">
              Uploading image...
            </p>

          )}






          {image && (

            <img

              src={image}

              alt="Preview"

              className="w-32 h-32 object-cover rounded-lg mt-5"

            />

          )}








          <button

            onClick={
              editingId
                ? updateProduct
                : addProduct
            }

            className="mt-5 bg-green-700 text-white px-8 py-3 rounded-full"

          >

            {editingId
              ? "Update Product"
              : "Add Product"}

          </button>



        </div>









        <div className="bg-white rounded-2xl shadow p-6">



          <h2 className="text-2xl font-bold mb-5">
            Existing Products
          </h2>






          {products.map((product)=>(


            <div

              key={product._id}

              className="border rounded-xl p-5 mb-4 flex justify-between items-center"

            >



              <div>


                <h3 className="text-xl font-bold">
                  {product.name}
                </h3>


                <p>
                  Price: ₵{product.price}
                </p>


                <p>
                  Category: {product.category}
                </p>


                <p>
                  Stock: {product.stock}
                </p>


              </div>






              <div className="flex gap-3">


                <button

                  onClick={() =>
                    editProduct(product)
                  }

                  className="bg-green-700 text-white px-5 py-2 rounded-full"

                >
                  Edit
                </button>






                <button

                  onClick={()=>{

                    const confirmDelete =
                      window.confirm(
                        "Are you sure you want to delete this product?"
                      );


                    if(confirmDelete){

                      deleteProduct(product._id);

                    }

                  }}

                  className="bg-red-600 text-white px-5 py-2 rounded-full"

                >
                  Delete
                </button>



              </div>



            </div>


          ))}



        </div>



      </div>



    </main>

  );

}