import mongoose, { model, Schema } from "mongoose";

interface IAuth extends Document {
  email: String;
  password: String;
}

const authModel: Schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model<IAuth>("Auth", authModel);
