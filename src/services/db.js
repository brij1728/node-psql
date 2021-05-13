const config = require("../views/config");

// using postgres
const pg = require("pg");
const client = new pg.Client(config);
client.connect();

async function query(query) {
  const { rows } = await client.query(query);

  return rows;
}

module.exports = { query };
