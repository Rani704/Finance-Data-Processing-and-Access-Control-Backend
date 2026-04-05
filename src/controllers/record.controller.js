import Record from "../models/record.model.js";

// Create a new record
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

// Get all records for the logged-in user
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

// Update a record by ID
export const updateRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const record = await Record.findOne({ _id: id ,user: req.user.id  });

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    // Only allow admin or owner to update
    if (req.user.role !== "admin" && record.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    Object.assign(record, req.body); // update fields
    const updatedRecord = await record.save();

    res.json({ message: "Record updated", record: updatedRecord });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete a record by ID
export const deleteRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const record = await Record.findById(id);

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    // Only allow admin or owner to delete
    if (req.user.role !== "admin" && record.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await record.deleteOne({ _id: id });
    res.json({ message: "Record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};