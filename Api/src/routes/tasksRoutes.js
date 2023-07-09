const tasks = (app) => {
  app.route("/tasks").get((req, res) => {
    res.send("Get all task");
  });
  app.route("/tasks").post((req, res) => {
    res.send("create a task");
  });
  app.route("/tasks/:id").get((req, res) => {
    res.send("Get single task");
  });
 
  app.route("/tasks/:id").put((req, res) => {
    res.send("Update a task");
  });
  app.route("/tasks/:id").delete((req, res) => {
    res.send("Delete a task");
  });
};

export default tasks;