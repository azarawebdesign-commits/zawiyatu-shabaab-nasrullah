import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

async function seedProducts() {

  const { connectDB } = await import("@/lib/mongodb");
  const { default: Product } = await import("@/models/product");
  const { products } = await import("@/app/data/product");


  try {

    await connectDB();

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products seeded successfully");

    process.exit(0);

  } catch (error) {

    console.error(error);

    process.exit(1);

  }

}


seedProducts();