//Conexões com banco de dados

const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");

const Course = require("../models/Course");
const Champter = require("../models/Champter");
const Element = require("../models/Element");

const connection = new Sequelize(dbConfig);

User.init(connection);
Champter.init(connection);
Course.init(connection);
Element.init(connection);

//User.associate(connection.models);
//Address.associate(connection.models);
//Tech.associate(connection.models);
//Course.associate(connection.models);

module.exports = connection;
