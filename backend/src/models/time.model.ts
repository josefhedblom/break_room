import Mongoose, { Document, Schema } from "mongoose";

interface ITimeInput extends Document {
  break: number;
}

interface ITimeDocument extends ITimeInput, Mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const TimeSchema: Schema = new Schema(
  {
    break: {
      type: Number,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const TimeModel = Mongoose.model<ITimeDocument>("Time", TimeSchema);
export default TimeModel;
