// models/state.model.ts
import mongoose, { Schema } from "mongoose";

const stateSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model("State", stateSchema);
