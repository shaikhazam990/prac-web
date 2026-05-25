import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    completed:{
        type: Boolean,
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    priority:{
        type: String,
        enum: ["Low", "Medium", "High"],
        default: "Medium"

    },

    dueDate:{
        type: Date,
        required: true
    },

    tags:{
        type: [String],
        default: []
    }
}, {
    timestamps: true
});
 const TaskModel = mongoose.model("Task", taskSchema);
export default TaskModel;
