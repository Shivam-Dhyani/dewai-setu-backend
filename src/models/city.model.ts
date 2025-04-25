// models/city.model.ts
import mongoose, { Schema } from "mongoose";

const citySchema = new Schema(
  {
    name: { type: String, required: true },
    stateId: { type: Schema.Types.ObjectId, ref: "State", required: true },
  },
  { timestamps: true }
);

// 🛡 Enforce unique city name per state
citySchema.index({ name: 1, stateId: 1 }, { unique: true });

export default mongoose.model("City", citySchema);
