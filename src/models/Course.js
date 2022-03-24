const { Model, DataTypes } = require("sequelize");

class Course extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        price: DataTypes.STRING,
        category: DataTypes.STRING,
        level: DataTypes.STRING,
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

module.exports = Course;
