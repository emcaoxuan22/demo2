"use strict";

const { Created, SuccessResponse } = require("../core/success.response");
const { asyncHandle } = require("../helpers/asyncHander");
const AccessService = require("../services/access.service");

class AccessController {

  signUp = asyncHandle(async (req, res, next) => {
    console.log(`[P]:: `, req.body);
    new Created({
      message: "Register OK",
      metaData: await AccessService.signup(req.body),
    }).send(res);
  });

  
}

module.exports = new AccessController();
