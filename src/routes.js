const express = require("express");
const UserControler = require("./controllers/UserController");
const AddressControler = require("./controllers/AddressController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ Hello: "Word" });
});

routes.get("/users", UserControler.index);
routes.post("/users", UserControler.store);

routes.post("/users/:user_id/address", AddressControler.store);

module.exports = routes;
