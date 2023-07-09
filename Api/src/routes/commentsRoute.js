



const comments = (app) => {
   
    app.route("/comments/:id").get((req, res) => {
        res.send("Get a comment");
    });
    app.route("/comments/:id").post((req, res) => {
        res.send("Add a comment");
    });
    app.route("/comments/:id").put((req, res) => {
        res.send("Update a comment");
    });
    app.route("/comments/:id").delete((req, res) => {
        res.send("Delete a comment");
    });
}
export default comments;