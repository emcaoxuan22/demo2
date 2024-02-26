const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ExportRequest extends Model {
    // Định nghĩa các phương thức liên kết ở đây nếu cần
    static associate(models) {
      // ví dụ: ExportRequest.belongsTo(models.User, { foreignKey: 'nguoiDeXuatId' })
    }
  };

  ExportRequest.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    requestType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users', // 'Users' là tên bảng của người dùng
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
    managerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users', // 'Users' là tên bảng của người dùng
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
    expire: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'ExportRequest',
  });

  return ExportRequest;
};