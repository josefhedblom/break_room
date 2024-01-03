import Mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";
import isEmail from "validator/lib/isEmail";
import isAlpha from "validator/lib/isAlpha";

interface IUserInput extends Document {
  username: string;
  email: string;
  password: string;
  emailVerificationToken: string;
  isVerified: boolean;
}

interface IUserDocument extends IUserInput, Mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      validate: [isAlpha, "Username can only contain letters"],
      minlength: [3, "Username must be a minumin length of 3 characters"],
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: [isEmail, "Please enter a valid email"],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be a minimun length of 8 characters"],
    },
    emailVerificationToken: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  const hash = bcrypt.hashSync(this.password, salt);

  this.password = hash;
  next();
});

const UserModel = Mongoose.model<IUserDocument>("User", UserSchema);
export default UserModel;
