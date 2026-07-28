import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(404).json({
        message: "Token not Found...",
        success: false,
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;

    next();
  } catch (error) {
    res.status(501).json({
      message: error.message,
      success: false,
    });
  }
};
