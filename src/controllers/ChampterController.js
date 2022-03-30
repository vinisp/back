const Champter = require("../models/Champter");

module.exports = {
  async index(req, res) {
    const champters = await Champter.findAll();
    return res.json(champters);
  },

  async listById(req, res) {
    const champters = await Champter.findAll();
    return res.json(champters);
  },

  async storeChampter(req, res) {
    const { course_id, champter_id, name } = req.body;

    const checkChampter = await Champter.findAll({
      where: {
        course_id: course_id,
        champter_id: champter_id,
      },
    });

    if (checkChampter.length > 0) {
      const updateChampter = await Champter.update(
        {
          name: name,
        },
        { where: { champter_id: champter_id, course_id: course_id } }
      );
      return res.json(updateChampter);
    }

    if (checkChampter.length === 0) {
      const champter = await Champter.create({
        course_id,
        champter_id,
        name,
      });

      return res.json(champter);
    }

    return res.json(checkChampter);
  },
  async DeleteCourse(req, res) {
    const { course_id } = req.params;

    await Champter.destroy({
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
