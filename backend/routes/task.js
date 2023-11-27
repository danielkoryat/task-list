import express from "express";
import { Router } from "express";
import { getAllTasks, createTask, deleteTask } from "../controllers/taskController.js";

const router = Router();

router.get('/', getAllTasks);
router.post('/', createTask);
router.delete('/:id', deleteTask);

export default router;