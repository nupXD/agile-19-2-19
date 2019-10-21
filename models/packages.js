const mongoose = require('mongoose');
const packageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    total_price: {
        type: String,
        required: true
    },
    extra_price_details: {
        type: Date,
        default: Date.now
    },
    ps_detail: {
        type: String,
        required: false
    },
    transportation_details: {
        type: String,
        required: true
    }
});
const Package = mongoose.model('Package', packageSchema);
module.exports = Package;