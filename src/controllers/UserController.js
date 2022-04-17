const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
  async store(req, res) {
    const { idfirebase, email } = req.body;
    const user = await User.findAll({
      where: {
        idfirebase: idfirebase,
      },
    });
    if (user.length === 1) {
      console.log("usuário encontrado");
    }
    if (user.length === 0) {
      const createUser = await User.create({
        idfirebase: idfirebase,
        email: email,
      });
      console.log(createUser);
      return res.json(createUser);
    }
  },

  async updateUserData(req, res) {
    const {
      idfirebase,
      user_name,
      resume,
      facebook_link,
      instagram_link,
      twitter_link,
      telegram,
      whatsapp,
    } = req.body;

    const updateUser = User.update(
      {
        user_name: user_name,
        resume: resume,
        facebook_link: facebook_link,
        instagram_link: instagram_link,
        twitter_link: twitter_link,
        telegram: telegram,
        whatsapp: whatsapp,
      },
      {
        where: {
          idfirebase: idfirebase,
        },
      }
    );

    console.log(req.body);
    return res.json(updateUser);
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

    return res.json(user);
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
