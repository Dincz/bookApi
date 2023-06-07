const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imgLink: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
        maxlength: 1000,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Book", bookSchema);
