const Element = require("../models/Element");

module.exports = {
  async storeElement(req, res) {
    const element = await Element.bulkCreate(req.body, {
      fields: [
        "course_id",
        "champter_id",
        "element_id",
        "element_type",
        "content",
        "order",
      ],
      ignoreDuplicates: true,
    });
    return res.json(element);
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
