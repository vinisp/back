const { Op } = require("sequelize");
const Champter = require("../models/Champter");

module.exports = {
  async storeChampter(req, res) {
    const { course_id, champter_id, name } = req.body;

    const champter = await Champter.create({
      course_id,
      champter_id,
      name,
    });
    return res.json(champter);
  },
};
