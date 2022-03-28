const express = require("express");
const UserControler = require("./controllers/UserController");
const CourseController = require("./controllers/CourseController");
const ChampterController = require("./controllers/ChampterController");
const ElementController = require("./controllers/ElementController");
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ Hello: "Word" });
});

routes.get("/users", UserControler.index);
routes.post("/users", UserControler.store);
routes.patch("/users/:user_id/", UserControler.update);
routes.get("/findUser/:user_id", UserControler.findUserByFirebaseID);
routes.post("/user/view/:user_id", UserControler.view);

routes.post("/course/save", CourseController.saveCourse);
routes.get("/course/:course_id", CourseController.loadCourse);

routes.post("/champter", ChampterController.storeChampter);

routes.post("/course/champter/element", ElementController.storeElement);

module.exports = routes;
