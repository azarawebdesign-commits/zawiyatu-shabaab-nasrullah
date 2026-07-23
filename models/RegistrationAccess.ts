import mongoose, { Schema, models } from "mongoose";


const RegistrationAccessSchema = new Schema({

  paymentReference: {
    type: String,
    required: true,
    unique: true,
  },


  token: {
    type: String,
    required: true,
    unique: true,
  },


  used: {
    type: Boolean,
    default: false,
  },


  createdAt: {
    type: Date,
    default: Date.now,
  },


});


const RegistrationAccess =
  models.RegistrationAccess ||
  mongoose.model(
    "RegistrationAccess",
    RegistrationAccessSchema
  );


export default RegistrationAccess;