// models/specialization.model.ts
import mongoose, { Schema } from "mongoose";

const specializationSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model("Specialization", specializationSchema);
