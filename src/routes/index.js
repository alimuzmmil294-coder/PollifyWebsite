import { Router } from "express";
import authRoutes from "./auth.js";
import notificaionRoute from "./notification.js";
import pollRoutes from "./poll.js";
import commentRoute from "./commentRoutes.js";
const router = Router();

router.use("/auth", authRoutes);
router.use("/notifications", notificaionRoute);
router.use("/polls", pollRoutes);
router.use("/comment", commentRoute);

export default router;
