const express = require("express");
const app = express();
const exphs = require("express-handlebars");
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));

//Handlebars
app.engine("handlebars", exphs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, () => {
  console.log(`App listening on ports ${PORT}`);
});

//ROUTES

app.get("/", (err, resp) => {
  resp.render("mainPage", { layout: "main" });
});

//Burgers Router
app.use("/api/burger", require("./controllers/burgers_controller"));
