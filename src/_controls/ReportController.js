const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
  async show(req, res) {
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
  },
};
