"use strict";
const { token } = require("morgan");
const db = require("../models");
const { Types } = require("mongoose");
const { where } = require("sequelize");

class KeyTokenService {
  static createKeyToken = async ({
    userId,
    publicKey,
    privateKey,
    refreshToken,
  }) => {
    try {
      //lv 0
      // const tokens = await keyTokenModel.create({
      //   user: userId,
      //   publicKey: publicKey,
      //   privateKey: privateKey,
      // });
      // return tokens ? tokens.publicKey : null;
      //lv xxx
      let token = await db.Key.findOne({ where: { user: userId } });

      if (token) {
        // Nếu bản ghi tồn tại, cập nhật nó
        token = await token.update({ publicKey, privateKey });
      } else {
        // Nếu không, tạo bản ghi mới
        token = await db.Key.create({ user: userId, publicKey, privateKey });
      }
    
      return token ? token.publicKey : null;
    
    } catch (error) {
      return error;
    }
  };

  static findByUserId = async (userId) => {
    return await db.Key.findOne({where: { user: userId }});
  };

  static removeKeyById = async (id) => {
    return await keyTokenModel.deleteOne(id);
  };

  static findByRefeshTokenUsed = async (refreshTokenUsed) => {
    return await keyTokenModel.findOne({ refreshTokenUsed });
  };

  static findByRefeshToken = async (refreshToken) => {
    return await keyTokenModel.findOne({ refreshToken });
  };

  static deleteByUserId = async (userId) => {
    return await keyTokenModel.deleteOne({ user: userId });
  };
}

module.exports = KeyTokenService;
