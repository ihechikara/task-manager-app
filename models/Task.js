const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name input cannot be empty"],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Task", TaskSchema)