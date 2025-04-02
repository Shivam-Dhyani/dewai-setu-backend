// src/models/exampleModel.ts - Example Mongoose Model
import mongoose, { Schema, Document } from "mongoose";

interface IExample extends Document {
  name: string;
}

const ExampleSchema: Schema = new Schema({
  name: { type: String, required: true },
});

export default mongoose.model<IExample>("Example", ExampleSchema);
