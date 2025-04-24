// models/doctor.model.ts
import mongoose, { Schema } from "mongoose";

const doctorSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    specializationId: { type: Schema.Types.ObjectId, ref: "Specialization" },
    stateId: { type: Schema.Types.ObjectId, ref: "State" },
    cityId: { type: Schema.Types.ObjectId, ref: "City" },
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
