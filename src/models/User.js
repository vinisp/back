const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        idfirebase: DataTypes.STRING,
        email: DataTypes.STRING,
        user_name: DataTypes.STRING,
        resume: DataTypes.TEXT,
        facebook_link: DataTypes.STRING,
        instagram_link: DataTypes.STRING,
        twitter_link: DataTypes.STRING,
        telegram: DataTypes.STRING,
        whatsapp: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  /*static associate(models) {
   // this.hasMany(models.Address, { foreignKey: "user_id", as: "addresses" });
    //this.belongsToMany(models.Tech, {
      //foreignKey: "user_id",
      //through: "user_techs",
      //as: "techs",
    });
  } */
}

module.exports = User;
