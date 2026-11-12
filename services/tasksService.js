import * as tasksRepository from "../repositories/tasksRepository.js";

export const getAllTasks = () => tasksRepository.getAllTasks();

export const createTask = (title) => {
    if (typeof title !== "string" || title.trim().length === 0) {
        const error = new Error("A non-empty title is required.");
        error.status = 400;
        throw error;
    }

    return tasksRepository.createTask(title.trim());
};
