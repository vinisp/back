"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("user_techs", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        } /*RELACIONA COM VALOR DE OUTRA TABELA 
        "MODEL" = NOME DA TABELA
        "KEY" = CAMPO CHAVE 
         */,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      tech_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "techs",
          key: "id",
        } /*RELACIONA COM VALOR DE OUTRA TABELA 
        "MODEL" = NOME DA TABELA
        "KEY" = CAMPO CHAVE 
         */,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    return queryInterface.dropTable("user_techs");
  },
};
