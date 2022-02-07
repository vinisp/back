const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  async update(req, res) {
    const { user_id } = req.params;
    const user = await User.findByPk(user_id);
    const { name, email } = req.body;

    user.name = name;
    user.email = email;

    await user.save();

    return res.json(user);
  },

  async store(req, res) {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    return res.json(user);
  },
};
