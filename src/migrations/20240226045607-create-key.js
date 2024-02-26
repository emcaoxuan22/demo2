module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('keys', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
          },
          user: {
              type: Sequelize.STRING
          },
          publicKey: {
              type: Sequelize.TEXT
          },
          privateKey: {
              type: Sequelize.TEXT
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
      await queryInterface.dropTable('keys');
  }
};