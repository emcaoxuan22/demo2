'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Products', // tên bảng
      'userId', // tên cột mới
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // tên bảng của User
          key: 'id', // khóa chính của bảng User
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'Products',
      'userId'
    );
  }
};
