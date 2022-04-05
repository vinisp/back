"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("elements", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      course_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      champter_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      element_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      element_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("elements");
  },
};
