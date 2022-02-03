const express = require("express");
const UserControler = require("./controllers/UserController");
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ Hello: "Word" });
});

routes.get("/users", UserControler.index);
routes.post("/users", UserControler.store);

module.exports = routes;
