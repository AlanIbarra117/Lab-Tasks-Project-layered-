const tasks = [
    {id: "1", title: "Take a shower", status: "false"},
    {id: "2", title: "Get wingstop for dinner", status: "false"},
    {id: "3", title: "Work on the project for 3330", status: "true"},
];

export const getAllTasks = () => tasks;

export const createTask = (title) => {
    const nextId = Math.max(0, ...tasks.map((task) => Number(task.id))) + 1;
    const newTask = {
        id: nextId,
        title,
        completed: false
    };

    tasks.push(newTask);
    return newTask;
};
