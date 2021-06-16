const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true,
    }
}, { timestamps: true })

module.exports = Todo = mongoose.model("Todo", TodoSchema);