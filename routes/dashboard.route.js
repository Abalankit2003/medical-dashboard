import express from "express";
import { handleDashboardData, handlePatientData } from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  return res.send("Good to go. Best of luck 🤞");
});
router.post("/dashboard", handleDashboardData);
router.get("/mydata", handlePatientData);

export default router;
