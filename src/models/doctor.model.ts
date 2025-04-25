// models/doctor.model.ts
import mongoose, { Schema } from "mongoose";

const doctorSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, unique: true, required: true },
    specializationId: {
      type: Schema.Types.ObjectId,
      ref: "Specialization",
      required: true,
    },
    stateId: {
      type: Schema.Types.ObjectId,
      ref: "State",
      required: true,
    },
    cityId: {
      type: Schema.Types.ObjectId,
      ref: "City",
      required: true,
    },
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
