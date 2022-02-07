const User = require("../models/User");
const Address = require("../models/Address");

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: "addresses" },
    });

    return res.json(user);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { zipcode, street, number } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const address = await Address.create({
      zipcode,
      street,
      number,
      user_id,
    });

    return res.json(address);
  },

  async update(req, res) {
    const { user_id, address_id } = req.params;
    const numberAddressId = +address_id;
    const { zipcode, street, number } = req.body;
    const user = await User.findByPk(user_id, {
      include: { association: "addresses" },
    });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const listAllAddress = await user.addresses;

    const selectAddress = listAllAddress.find((e) => e.id === numberAddressId);

    selectAddress.zipcode = zipcode;
    selectAddress.street = street;
    selectAddress.number = number;

    await selectAddress.save();

    return res.json(selectAddress);
  },
};
