import express from "express";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

const router = express.Router();

router.get("/stats", async (req, res) => {
  const users = await User.countDocuments();

  const transactions = await Transaction.find();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0);

  res.json({
    users,
    income,
    expense,
  });
});

export default router;