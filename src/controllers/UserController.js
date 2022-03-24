const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  async store(req, res) {
    const { idfirebase, email } = req.body;
    const user = await User.create({ idfirebase, email });
    return res.json(user);
  },

  async findUserByFirebaseID(req, res) {
    const { user_id } = req.params;
    const user = await User.findAll({
      where: {
        idfirebase: user_id,
      },
    });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    return res.json({ status: true });
  },

  async update(req, res) {
    const { user_id } = req.params;
    const { idfirebase, email } = req.body;
    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    user.firebaseID = firebaseID;
    user.email = email;

    await user.save();

    return res.json(user);
  },

  async view(req, res) {
    const { user_id } = req.params;

    return console.log(user_id);
  },
};
