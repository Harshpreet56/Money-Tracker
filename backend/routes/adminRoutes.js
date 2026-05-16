import express from "express";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get("/dashboard", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const users = await User.find();
    const transactions = await Transaction.find().populate("user");

    res.json({ users, transactions });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;