import express from "express";
import { createTodo, deleteTodo, getAllTodos, updateTodo } from "../controllers/todo.js";

const router = express.Router();

router.route("/").post(createTodo);
router.route("/").get(getAllTodos);
router.route("/:id").put(updateTodo);
router.route("/:id").delete(deleteTodo);


export default router;