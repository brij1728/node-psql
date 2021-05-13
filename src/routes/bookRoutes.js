const express = require("express");
const bookRouter = express.Router();

const { bookController } = require("../controllers/bookController");

bookRouter.route("/").get(bookController.getBookList);

bookRouter.route("/:id").get(bookController.getBookById);

module.exports = bookRouter;
