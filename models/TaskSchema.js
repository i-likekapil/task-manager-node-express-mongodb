const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide task name'],
        trim:true,
        maxLength : [20,'task name cannot be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('Task-manager-DB',TaskSchema);