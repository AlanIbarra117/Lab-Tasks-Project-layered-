import { Router } from "express";
import { getTasks, createTask } from "../controllers/tasksController.js";

const tasksRouter = Router();

tasksRouter.get("/", getTasks);
tasksRouter.post("/", createTask);

export default tasksRouter;
