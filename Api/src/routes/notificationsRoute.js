const notifications = (app) => {
  app.route("/notifications/:id").get((req, res) => {
    res.send("Get a notification");
  });
  app.route("/notifications/:id").post((req, res) => {
    res.send("Add a notification");
  });
  app.route("/notifications/:id").put((req, res) => {
    res.send("Update a notification");
  });
  app.route("/notifications/:id").delete((req, res) => {
    res.send("Delete a notification");
  });
};

export default notifications;
