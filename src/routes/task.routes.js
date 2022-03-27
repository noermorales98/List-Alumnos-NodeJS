import { Router } from "express";
import {
    createTask,
    deleteTask,
    renderTasks,
    taskToggleDone,
    renderList,
    renderTaskEdit,
    editTask
} from "../controller/tasks.controllers";
//03 parte
//ZONA DONDE DECLARAMOS LAS VISTAS


const router = Router();

router.get("/",renderTasks);
router.get("/list",renderList);
router.post("/tasks/add",createTask);
router.get("/tasks/:id/toggleDone", taskToggleDone);
router.get("/tasks/:id/edit", renderTaskEdit);
router.post("/tasks/:id/edit",editTask);
router.get("/tasks/:id/delete",deleteTask);

export default router;
