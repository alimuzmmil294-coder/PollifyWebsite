import Comment from "../modals/comment.js";
import Poll from "../modals/Poll.js";
import { notify } from "./notification.js";


export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        return res.status(200).json({
            message: "Comments fetched successfully",
            success: true,
            data: comments,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal server error...",
            success: false,
        });
    }
};