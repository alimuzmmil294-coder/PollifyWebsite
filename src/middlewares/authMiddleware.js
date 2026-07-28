import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  const header = req.headers.authorization || "";

  const token = header.startsWith("Bearer ") ? header.split(" ")[1] : null;

  if (!token) {
    return res.status(401).json({
      messgae: "Not authorized..",
      success: false,
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({
      messgae: error.messgae || "Not authorized...",
    });
  }
};
