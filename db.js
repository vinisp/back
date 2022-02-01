const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "vinic556_crud-commerce",
  "vinic556_crudUse",
  "Drop$1091",
  {
    host: "br904.vinicius-aragao.com:3306",
    dialect: "mysql",
  }
);

module.exports = sequelize;
