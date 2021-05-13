const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const path = require("path");
const debug = require("debug")("index");
const bodyParser = require("body-parser");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

const router = require("./src/routes/bookRoutes");
const adminRouter = require("./src/routes/adminRoutes");
const authRouter = require("./src/routes/authRoutes");

app.use(express.static(path.join(__dirname, "/public/")));
app.use(
  "/css",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js"))
);
app.set("views", "./src/views");
// app.set("view engine", "pug");
app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "/views/index.html"));
// });

// reder using pug
// app.get("/", (req, res) => {
//   res.render("index", { title: "MyLibrary" });
// });

// reder using ejs
app.get("/", (req, res) => {
  res.render("listView", { list: ["a", "b", "c", "d", "e"], title: "Library" });
});

app.get("/about", (req, res) => {
  res.send(`About...`);
});

app.use("/books", router);
app.use("/admin", adminRouter);
app.use("/auth", authRouter);

// listen at port
app.listen(port, () => {
  debug(`Express sever is running... on ${port}`);
});
