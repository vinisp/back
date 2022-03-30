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
routes.get("/search/:user_id", CourseController.getAllCourseCreatedByUsers);
routes.delete("/course/delete/:course_id", CourseController.DeleteCourse);

routes.post("/champter", ChampterController.storeChampter);
routes.get("/champters", ChampterController.index);
routes.get("/:course_id/champters", ChampterController.getAllChampters);
routes.delete("/champters/:course_id/:champter_id"); // Get Elements From Champter
routes.delete("/champters/delete/:course_id", ChampterController.DeleteCourse); //DeleteAll

routes.post("/course/champter/element", ElementController.storeElement);
routes.get(
  "/elements/:course_id/:champter_id/get",
  ElementController.getAllElements
);
routes.post("/course/champter/element/update", ElementController.UpdateElement);
routes.delete(
  "/course/champter/element/delete/:item_id",
  ElementController.DeleteElement
);
routes.delete("/elements/:course_id"); //Delete One
routes.delete("/elements/delete/:course_id", ElementController.DeleteCourse); //Delete All

module.exports = routes;
