const express = require("express");
const adminRouter = express.Router();

const config = require("../views/config");

// using postgres
const { Pool, Client } = require("pg");
const client = new Client(config);
client.connect();

// const tableConfig = {
//   id,
//   book_name,
//   author_name,
//   publisher_name,
//   pages,
//   description
// };

const data = {};

adminRouter.route("/").post(async (req, res) => {
  try {
    await client.query(
      "INSERT INTO programming_books (id, book_name, author_name, publisher_name, pages, description) VALUES (10, Web Development with Node & Express, Ethan Brown, ORielly Media, 400, It teaches you Express fundamentals by walking you through the development of an example application. This hands-on guide covers everything from server-side rendering to API development suitable for use in single-page apps (SPAs).) RETURNING *"
    );
    // console.log(result);
    // return res.json(result);
  } catch (err) {
    throw err;
    console.error(err);
  } finally {
    await client.end();
  }
});

module.exports = adminRouter;
