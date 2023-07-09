const user = (app) => {
  app.route("/auth/register").post((req, res) => {
    res.send("Register user");
  });
  app.route("/auth/login").post((req, res) => {
    res.send("Login user");
  });
};

export default user;