import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    poll: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "poll",
      required:true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required:true,
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
      default: null,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema);
