const express = require("express");
const router = express.Router();
const AccessController = require("../../controllers/access.controller.js");
const { asyncHandle } = require("../../helpers/asyncHander.js");


router.post("/signup", asyncHandle(AccessController.signUp) );
module.exports = router;
