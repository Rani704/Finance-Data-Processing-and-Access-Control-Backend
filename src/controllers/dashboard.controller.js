import Record from "../models/record.model.js";
import mongoose from "mongoose";

export const getSummary = async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.user.id);

    const income = await Record.aggregate([
      { $match: { user: userId, type: "income" } },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);

    const expense = await Record.aggregate([
      { $match: { user: userId, type: "expense" } },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);

    const totalIncome = income[0]?.total || 0;
    const totalExpense = expense[0]?.total || 0;

    res.json({
      totalIncome,
      totalExpense,
      netBalance: totalIncome - totalExpense
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCategoryBreakdown = async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.user.id);

    const data = await Record.aggregate([
      { $match: { user: userId } },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" }
        }
      }
    ]);

    res.json(data);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};