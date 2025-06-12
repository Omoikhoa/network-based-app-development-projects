const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mangaSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    seller: {
        type: String,
        required: [true, 'Seller is required']
    },
    condition: {
        type: String,
        required: [true, 'Condition is required'],
        enum: {
            values: ['New', 'Like New', 'Good', 'Fair', 'Poor'],
            message: '{VALUE} is not a valid condition'
        },
    },
    price: {
        type: Number,
        required: [true, 'Price is required'], 
        min: [0.01, 'Price must be at least $0.01']
    },
    details: {
        type: String,
        required: [true, 'Details is required'],
        default: 'No details provided'
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    },
    active: {
        type: Boolean,
        required: [true, 'Active is required'],
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

// collection name and model name should be the same for Mongoose to work correctly.
module.exports = mongoose.model('Manga', mangaSchema);

// Mongoose validation
