const { Model, DataTypes } = require("sequelize");

class Element extends Model {
  static init(sequelize) {
    super.init(
      {
        course_id: DataTypes.STRING,
        champter_id: DataTypes.STRING,
        element_id: DataTypes.STRING,
        element_type: DataTypes.STRING,
        content: DataTypes.TEXT,
        order: DataTypes.INTEGER,
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

module.exports = Element;
