import express from 'express';
import taskController from '../controllers/task.controller.js';
const router = express.Router();

router.post('/create/tasks', taskController.createTask);

router.get('/get/tasks', taskController.getalltasks);

export default router;

