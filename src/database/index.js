//Conexões com banco de dados

const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
//const Address = require("../models/Address");
//const Tech = require("../models/Tech");
const Course = require("../models/Course");

const connection = new Sequelize(dbConfig);

User.init(connection);
//Address.init(connection);
//Tech.init(connection);
Course.init(connection);

//User.associate(connection.models);
//Address.associate(connection.models);
//Tech.associate(connection.models);
//Course.associate(connection.models);

module.exports = connection;
