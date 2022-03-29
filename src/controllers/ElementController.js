const { Op } = require("sequelize");
const Element = require("../models/Element");

module.exports = {
  async storeElement(req, res) {
    const { course_id, champter_id, element_id, element_type, content, order } =
      req.body;

    const checkElement = await Element.findAll({
      where: {
        course_id: course_id,
        champter_id: champter_id,
        element_id: element_id,
      },
    });

    if (checkElement.length > 0) {
      const updateElement = await Element.update(
        {
          content: content,
          order: order,
        },
        {
          where: {
            element_id: element_id,
            course_id: course_id,
            element_type: element_type,
          },
        }
      );
      return res.json(updateElement);
    }

    if (checkElement.length === 0) {
      const element = await Element.create({
        course_id,
        champter_id,
        element_id,
        element_type,
        content,
        order,
      });
      return res.json(element);
    }
  },
  async DeleteCourse(req, res) {
    const { course_id } = req.params;

    await Element.destroy({
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
