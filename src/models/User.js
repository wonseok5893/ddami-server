import mongoose, { Mongoose } from "mongoose";
import moment from "moment";

const UserSchema = new mongoose.Schema({
  userEmail: { type: String, required: true, trim: true },
  userPassword: { type: String, required: () => this.userPassword.length >= 8 },
  userName: { type: String },
  userBirth: { type: String },
  userPhone: { type: String },
  userSex: {
    type: String,
    enum: ["male", "female"],
  },
  follow: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  follower: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  likeField: [{ type: String }],
  state: { type: Number, default: 0, enum: [0, 1] },
  avatarUrl: { type: String },
  created: {
    type: String,
    default: moment().format("YYYY년 MM월 DD일 HH:mm:ss"),
  },
  deviceToken: { type: String },
  id: mongoose.Schema.Types.ObjectId,
});

const model = mongoose.model("User", UserSchema);

export default model;
