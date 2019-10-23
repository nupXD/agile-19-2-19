const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    ph_no: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});
const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;