const express = require("express");
const debug = require("debug");

const authRouter = express.Router();

function router() {
  authRouter.route("/sighUp").post((req, res) => {
    debug(req.body);
  });
  return authRouter;
}

module.exports = router;
