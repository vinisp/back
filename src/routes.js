const express = require("express");
const UserControler = require("./controllers/UserController");
const AddressControler = require("./controllers/AddressController");
const TechController = require("./controllers/TechController");
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ Hello: "Word" });
});

routes.get("/users", UserControler.index);
routes.post("/users", UserControler.store);

routes.get("/users/:user_id/address", AddressControler.index);
routes.post("/users/:user_id/address", AddressControler.store);

routes.get("/users/:user_id/techs", TechController.index);
routes.post("/users/:user_id/techs", TechController.store);
routes.delete("/users/:user_id/techs", TechController.delete);

module.exports = routes;
