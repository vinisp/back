const { Op } = require("sequelize");
const Element = require("../models/Element");

module.exports = {
  async storeElement(req, res) {
    const { course_id, champter_id, name, content, order } = req.body;

    const elment = await Element.create({
      course_id,
      champter_id,
      name,
      content,
      order,
    });
    return res.json(elment);
  },
};
