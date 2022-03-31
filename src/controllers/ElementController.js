const Element = require("../models/Element");

module.exports = {
  async getAllElements(req, res) {},

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

  async getAllElements(req, res) {
    const { course_id, champter_id } = req.params;

    const elements = await Element.findAll({
      where: {
        course_id,
        champter_id,
      },
    });
    return res.json(elements);
  },

  async UpdateElement(req, res) {
    const { element_id, content, order } = req.body;

    const updateContentAndOrder = await Element.update(
      {
        content: content,
        order: order,
      },
      {
        where: {
          element_id: element_id,
        },
      }
    );
    return res.json(updateContentAndOrder);
  },

  async DeleteElement(req, res) {
    const { item_id } = req.params;

    await Element.destroy({
      where: {
        element_id: item_id,
      },
    }).then((result) => {
      if (result) {
        res.json({ status: "item removido com sucesso" });
      } else {
        res.json({ status: "Não foi possível remover o item" });
      }
    });
  },

  async DeleteChampterElements(req, res) {
    const { champter_id } = req.params;

    await Element.destroy({
      where: {
        champter_id: champter_id,
      },
    }).then((result) => {
      if (result) {
        res.json({ status: "todos os elementos do modúlo foram deletados" });
      } else {
        res.json({
          status: "falhou, não foi possível deletar os items do módulo",
        });
      }
    });
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
