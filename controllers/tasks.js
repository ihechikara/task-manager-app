const Task = require("../models/Task")

// return all the tasks in the database
const getAllTasks = async (req, res)=>{

    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// create new task in database
const createTask = async (req, res) =>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// return single task
const getSingleTask = async (req, res) =>{
    
    try {
        const taskId = req.params.id
        const task = await Task.findOne({_id:taskId})

        if(!task){
            return res.status(404).json({msg: `No task with the id of ${taskId}`})
        }
        res.status(200).json({task})
        
    } catch (error) {
        res.status(500).json({message: error})
    }
}

// update task
const updateTask = async (req, res) =>{
    // res.send(`Task with id of ${req.params.id} has been updated!`)
    try {
        const taskId = req.params.id
        const task = await Task.findOneAndUpdate({_id:taskId}, req.body, {new:true, runValidators:true})

        if(!task){
            return res.status(404).json({msg: `No task with the id of ${taskId}`})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

// delete task
const deleteTask = async (req, res) =>{

    try {
        const taskId = req.params.id
        const task = await Task.findByIdAndDelete({_id:taskId})

        if(!task){
            return res.status(404).json({msg: `No task with the id of ${taskId}`})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({message: error})
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}