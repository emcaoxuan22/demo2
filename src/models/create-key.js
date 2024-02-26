'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Key extends Model {
        static associate(models) {
            // define association here
        }
    }
    Key.init({
        user: DataTypes.STRING,
        publicKey: DataTypes.TEXT,
        privateKey: DataTypes.TEXT,
    }, {
        sequelize,
        modelName: 'Key',
    });
    return Key;
};
