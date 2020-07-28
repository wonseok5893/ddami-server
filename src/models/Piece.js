import mongoose from "mongoose";

const PieceSchema = new mongoose.Schema({
  fileUrl: [{ type: String }],
  title: { type: String },
  descriptions: { type: String },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  hasField: [{ type: String }],
  views: { type: Number, default: 0 },
  like: { type: Number, default: 0 },
  created: {
    type: Date,
    default: Date.now,
  },

  id: mongoose.Schema.Types.ObjectId,
});

const model = mongoose.model("User", PieceSchema);

export default model;

//  created: {
// type: String,
// default: moment().format("YYYY년 MM월 DD일 HH:mm:ss")
//}
