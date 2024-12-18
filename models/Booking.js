const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  email: { type: String, required: true },
  petDetails: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  notes: { type: String },
});

module.exports = mongoose.model('Booking', bookingSchema);
