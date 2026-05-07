import express from 'express';
import taskController from '../controllers/task.controller.js';
const router = express.Router();

router.post('/create/tasks', taskController.createTask);

router.get('/get/tasks', taskController.getalltasks);

router.get('/get/tasks/:id', taskController.gettaskbyid);

router.put('/update/tasks/:id', taskController.updatetask);

router.delete('/delete/tasks/:id', taskController.deletetask);


export default router;

