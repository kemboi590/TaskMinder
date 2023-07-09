import {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} from "./../controllers/taskController.js";

const tasks = (app) => {
  app.route("/tasks").get(getAllTasks).post(createTask);

  app.route("/tasks/:id").get(getSingleTask).put(updateTask).delete(deleteTask);
};

export default tasks;
