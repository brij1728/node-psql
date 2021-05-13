const db = require("../services/db");

const getBookList = async (req, res) => {
  const books = await db.query(` SELECT * FROM books.programming_books;`);
  console.log(books);

  res.render("bookListView", { title: "Library", books });
};

const getBookById = async (req, res) => {
  const id = parseInt(req.params.id);
  const books = await db.query(
    ` SELECT * FROM books.programming_books where id = ${id};`
  );

  res.render("bookView", { title: "Library", book: books[0] });
};

const bookController = {
  getBookList,
  getBookById,
};

module.exports = { bookController };
