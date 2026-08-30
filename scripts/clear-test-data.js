const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not set.");
}

const DonationSchema = new mongoose.Schema({}, { strict: false });
const OrderSchema = new mongoose.Schema({}, { strict: false });

const Donation =
  mongoose.models.Donation ||
  mongoose.model("Donation", DonationSchema);

const Order =
  mongoose.models.Order ||
  mongoose.model("Order", OrderSchema);

async function clearTestData() {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log("Connected to MongoDB.");

    const donations = await Donation.deleteMany({});
    console.log(`Deleted ${donations.deletedCount} donation record(s).`);

    const orders = await Order.deleteMany({});
    console.log(`Deleted ${orders.deletedCount} order record(s).`);

    console.log("Test donation and order data cleared successfully.");
  } catch (error) {
    console.error("Cleanup failed:", error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

clearTestData();