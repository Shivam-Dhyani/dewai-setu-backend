import mongoose, { Schema } from "mongoose";

const doctorSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    specializationId: String,
    stateId: String,
    cityId: String,
    address: String,
    pincode: String,
    phone: String,
    password: String,
    isVerified: { type: Boolean, default: false },
    otp: String,
  },
  { timestamps: true }
);

export default mongoose.model("Doctor", doctorSchema);
