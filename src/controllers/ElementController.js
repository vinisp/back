const { Op } = require("sequelize");
const Element = require("../models/Element");

module.exports = {
  async storeElement(req, res) {
    const { course_id, champter_id, element_id, element_type, content, order } =
      req.body;

    const checkElement = await Element.findAll({
      where: {
        element_id: element_id,
      },
    });

    if (checkElement.length > 0) {
      const updateElement = await Element.update(
        {
          content: content,
        },
        { where: { element_id: element_id } }
      );
      return res.json(updateElement);
    }

    if (checkChampter.length === 0) {
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
};
