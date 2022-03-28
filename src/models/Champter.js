const { Model, DataTypes } = require("sequelize");

class Champter extends Model {
  static init(sequelize) {
    super.init(
      {
        course_id: DataTypes.STRING,
        champter_id: DataTypes.STRING,
        name: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  /*static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  } */
}

module.exports = Champter;
