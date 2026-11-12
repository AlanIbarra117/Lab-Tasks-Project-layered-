import * as tasksService from "../services/tasksService.js";

export const getTasks = (req, res, next) => {
    try {
        const tasks = tasksService.getAllTasks();
        res.status(200).json({
            success: true,
            data: tasks
        });
    } catch (error) {
        next(error);
    }
};

export const createTask = (req, res, next) => {
    try {
        const task = tasksService.createTask(req.body?.title);
        res.status(201).json({
            success: true,
            data: task
        });
    } catch (error) {
        next(error);
    }
};
