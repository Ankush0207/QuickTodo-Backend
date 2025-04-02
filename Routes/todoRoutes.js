const express = require("express");
const router = express.Router();
const controller = require("../Controllers/todoController");

router.post("/todos", controller.createTodo);
router.get("/get", controller.getTodo);
router.get("/get/:id", controller.getTodoId);
router.put("/update/:id", controller.updateTodo);
router.delete("/delete/:id", controller.deleteTodo);

module.exports = router;
