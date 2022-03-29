const Course = require("../models/Course");

module.exports = {
  async saveCourse(req, res) {
    const { course_id, name, price, category, level, created_by } = req.body;

    const course = await Course.create({
      course_id,
      name,
      price,
      category,
      level,
      created_by,
    });
    return res.json(course);
  },

  async getAllCourseCreatedByUsers(req, res) {
    const { user_id } = req.params;

    const myCourses = await Course.findAll({
      where: {
        created_by: user_id,
      },
    });

    return res.json(myCourses);
  },

  async loadCourse(req, res) {
    const { course_id } = req.params;

    const course = await Course.findAll({
      where: {
        course_id: course_id,
      },
    });

    if (!course) {
      return res.status(400).json({ error: "Course Not found" });
    }

    return res.json(course);
  },

  async DeleteCourse(req, res) {
    const { course_id } = req.params;

    await Course.destroy({
      where: {
        course_id: course_id,
      },
    }).then((result) => {
      if (result) {
        res.json({ status: "item removido" });
      } else {
        res.json({ status: "não foi possível encontrar o curso" });
      }
    });
  },
};
