"use strict";
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const KeyTokenService = require("./keyToken.service");
const { createTokenPair, verifyJWT } = require("../auths/authUtils");
const { BadRequestError } = require("../core/error.response");
const createHttpError = require("http-errors");
const { ApiError } = require("../core/ApiError");
const { StatusCodes } = require("http-status-codes");
const db = require("../models");
class AccessService {
  

  static signup = async ({ name, email, password }) => {
    const findUser = await db.User.findOne({ where: { email } });

   if (findUser) {
      throw new ApiError(
        StatusCodes.CONFLICT,
        "Error: shop already registered"
      );
    } 


    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await db.User.create({email, password: passwordHash});
    if (newUser) {
      const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
        modulusLength: 4096,
        publicKeyEncoding: {
          type: "pkcs1",
          format: "pem",
        },
        privateKeyEncoding: {
          type: "pkcs1",
          format: "pem",
        },
      });
      const tokens = await createTokenPair(
        {
          userId: newUser.id,
          email,
        //   roles: newShop.roles,
        },
        publicKey,
        privateKey
      );

      const tokenKeyString = await KeyTokenService.createKeyToken({
        userId: newUser.id,
        publicKey: publicKey,
        privateKey: privateKey,
        // refreshToken: tokens.refreshToken,
      });
      return {
        code: 201,
        metaData: {
          shop: newUser,
          token: tokens,

        },
      };
    }
    // return {
    //   code: 200,
    //   metaData: null,
    // };
    return 'oke'
  };


}

module.exports = AccessService;
