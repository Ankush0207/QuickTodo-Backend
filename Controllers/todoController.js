const Todo = require("../Models/todoSchema");

const createTodo = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    if (!title) {
      res.status(400).send({ message: "Title is required" });
    }
    const newTodo = Todo({
      title,
      description: description || "",
      completed: completed || false,
    });
    const saveTodo = await newTodo.save();
    res.status(201).send(saveTodo);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "Internal Server Error", error: error.message });
  }
};

const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    if (todos.length === 0) {
      res.status(400).send({ message: "todos not found" });
    }
    res
      .status(201)
      .send({ message: "Todos fetched successfully", data: todos });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "Internal Server Error", error: error.message });
  }
};

const getTodoId =async (req, res)=>{
     try {
           const todoId = await Todo.findById(req.params.id)
           if(!todoId){
             res.status(404).send({message:"Todos not Found Id"})
           }
           res.status(201).send({message:"Todos fetched successfully with Id", data:todoId})
     } catch (error) {
         console.error(error)
         res.status(500).send({message:"Internal Server Error", error:error.message})
     }
}
const updateTodo =async (req ,res)=>{
    try {
         const {title , description , completed} = req.body
         const updateTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            {title, description, completed},
            {new:true}
         )
         if(!updateTodo){
            res.status(404).send({mesaage:"Todo not found with this ID"})
         }
         res.status(201).send({message:"Todo updated successfully" , data:updateTodo})
    } catch (error) {
        console.error(error)
        res.status(500).send({message:"Internal Server Error", error:error.message})
    }
}

const  deleteTodo =async (req, res)=>{
    try {
         const todoId = await Todo.findByIdAndDelete(req.params.id)
         if(!todoId){
            res.status(404).send({message:"Todo not found with this ID"})
         }
         res.status(201).send({message:"Todo deleted successfully", data:todoId})
    } catch (error) {
        console.error(error)
        res.status(500).send({message:"Internal Server Error", error:error.message})
    }
}

module.exports = {
  createTodo,
  getTodo,
  getTodoId,
  updateTodo,
  deleteTodo,
};
