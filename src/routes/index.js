import { Router } from "express";
import authRoutes from "./auth.js";
import notificaionRoute from "./notification.js";
import pollRoutes from "./poll.js";
const router = Router();

router.use("/auth", authRoutes);
router.use("/notifications", notificaionRoute);
router.use("/notifications", pollRoutes);

export default router;
