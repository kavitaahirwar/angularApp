const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true
    },
    categoryImageUrl: {
        type: String,
        reuired: true
    }
});

module.exports = mongoose.model("Categorys", categorySchema);