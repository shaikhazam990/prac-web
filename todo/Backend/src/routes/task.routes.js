import TaskController from "../controllers/Task.controller.js";
import express from "express";

const router = express.Router();

router.post("/tasks", TaskController.createTask);
router.get("/tasks", TaskController.getTasks);
router.get("/tasks/:id", TaskController.getTaskById);
router.put("/tasks/:id", TaskController.updateTask);
router.delete("/tasks/:id", TaskController.deleteTask);

export default router;
