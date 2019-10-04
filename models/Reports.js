const mongoose = require('mongoose');

const ReportsSchema = new mongoose.Schema(
  {
    report: Array,
    year: Number,
    month: Number,
  },
  {
    timestamps: true
  }
);

mongoose.model('Reports', ReportsSchema);

module.exports = mongoose.model('Reports');