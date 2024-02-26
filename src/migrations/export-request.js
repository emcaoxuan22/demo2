'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ExportRequests', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      requestType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.TEXT
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Users', // Name of the Users table
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      managerId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Users', // Name of the Users table
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      expire: {
        type: Sequelize.DATE
        // Add allowNull if necessary
      },
      status: {
        type: Sequelize.STRING
        // Add allowNull if necessary
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
       },
      updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
       }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ExportRequests');
  }
};