// We use a capital letter for Feeds to point that this is a class
// only put a comma if something coming after the line
// to export something, we use module.export = model name
// Import mongoose
const mongoose = require('mongoose');

// Schema
const FeedsSchema = new mongoose.Schema(
    {
        text: {
            type: String, //mongoose.Schema.Types.ObjectId for new assignment
            required: true
        },
        username: {
            type: String,
            required: true
        },
        hashtags: {
            type: Array
        },
        Image: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now
        },
        likes: {
            type: Array
        },
        id: {
            type: mongoose.Schema.Types.ObjectId,
        }
    }
);

// Model
const FeedsModel = mongoose.model('feeds', FeedsSchema);
module.exports = FeedsModel;