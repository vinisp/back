const { Op } = require("sequelize");
const Course = require("../models/Course");

module.exports = {
  /*async show(req, res) {
    const { tech_name } = req.params;

    const users = await User.findAll({
      attributes: ["id", "name", "email"],
      where: {
        email: {
          [Op.iLike]: "%@gmail.com",
        },
      },
      include: [
        {
          association: "techs",
          required: false,
          where: {
            name: {
              [Op.iLike]: `%${tech_name}`,
            },
          },
        },
      ],
    });

    return res.json(users);
  }, */

  async testeRoute(req, res) {
    const { course_test } = req.body;

    return res.json(course_test);
  },

  async saveCourse(req, res) {
    const { name, price, category, level } = req.body;
    const course = await Course.create({ name, price, category, level });
    return res.json(course);
  },
};
