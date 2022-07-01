const Task = require('../models/TaskSchema');
const asyncWrapper = require('../middleware/async');
const {createCustomError} = require('../error/custom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res)=>{
   const tasks = await  Task.create(req.body);
    res.status(200).json({ tasks });
});

const getTaskByID = asyncWrapper(async (req,res,next)=>{
   const {id: taskId} = req.params;
   const tasks = await Task.findOne({_id : taskId});
   if(!tasks)
       return next(createCustomError(`No tasks with id : ${taskId}`, 404))
   res.status(200).json({tasks});
});

const deleteTask = asyncWrapper(async (req, res,next)=>{
    const {id: taskId} = req.params;
    const tasks = await Task.findOneAndDelete({ _id: taskId })
    if (!tasks) {
        return next(createCustomError(`No tasks with id : ${taskId}`, 404))
    }
    res.status(200).json({ tasks })
});

const updateTask = asyncWrapper(async (req, res, next) => {
    const { id: taskId } = req.params
    const tasks = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
        new: true,
        runValidators: true,
    })
    if (!tasks) {
        return next(createCustomError(`No tasks with id : ${taskId}`, 404))
    }
    res.status(200).json({ tasks })
})


module.exports = {getAllTasks,createTask,getTaskByID,deleteTask,updateTask}