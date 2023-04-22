const getAllTasks = (req, res)=>{
    res.send("All tasks")
}

const createTask = (req, res) =>{
    res.json(req.body)
}
const getSingleTask = (req, res) =>{
    res.json({id: req.params.id})
}
const updateTask = (req, res) =>{
    res.send(`Task with id of ${req.params.id} has been updated!`)
}
const deleteTask = (req, res) =>{
    res.send(`Task with id of ${req.params.id} has been deleted!`)
}


module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}