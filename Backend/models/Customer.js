import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name Of Customer"],
  },
  contactNumber: {
    type: String,
    validate: {
      validator: (contactNumber) => {
        const phoneNumberPattern = /^\d{10}$/;
        return phoneNumberPattern.test(contactNumber);
      },
      message: "Please Enter a valid 10-digit Mobile Number",
    },
    required: [true, "Please Enter Number of Customer"],
    unique: [true, "Please Enter Unique Mobile Number"],
  },
  email: String,
});

const Customer = mongoose.model("Customer", CustomerSchema);

export default Customer;
