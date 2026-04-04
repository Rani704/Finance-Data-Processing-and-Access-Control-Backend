import Record from "../models/record.model.js";

export const createRecord = async (req, res) => {
  try {
    const record = await Record.create({
      ...req.body,
      user: req.user.id
    });

    res.status(201).json({
      message: "Record created",
      record
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getRecords = async (req, res) => {
  try {
    const { type, category, startDate, endDate } = req.query;

    const filter = {
      user: req.user.id
    };

    if (type) filter.type = type;
    if (category) filter.category = category;

    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    const records = await Record.find(filter).sort({ date: -1 });

    res.json({
      count: records.length,
      records
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
