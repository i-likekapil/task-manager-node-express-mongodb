const express = require('express');
const routes = express.Router();
const {getAllTasks, createTask, getTaskByID, deleteTask, updateTask} = require('../controller/tasks')

routes.route('/test').get((req,res)=>{
   res.send("response from routes for testing");
});

routes.route('/').get(getAllTasks).post(createTask);
routes.route('/:id').put(updateTask).delete(deleteTask).get(getTaskByID);

module.exports = routes