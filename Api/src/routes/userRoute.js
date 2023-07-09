import { registerUser } from "../controllers/userController.js";

const user = (app) => {
  app.route("/auth/register").post(registerUser);
  app.route("/auth/login").post((req, res) => {
    res.send("Login user");
  });
};

export default user;
