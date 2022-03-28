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

  async saveCourse(req, res) {
    const { course_id, name, price, category, level, created_by } = req.body;
    //VERIFICAR SE O CURSO JÁ EXISTE
    //VERIFICAR ID DO USUÁRIO QUE ESTÁ CRIANDO O CURSO,

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
};
