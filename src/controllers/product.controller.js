"use strict";

// const ProductService = require("../services/production.service")
// const ProductService = require("../services/production.service.xxx");
const ExportRequestService = require("../services/exportrequest.service")
const { Created, SuccessResponse } = require("../core/success.response");
const { asyncHandle } = require("../helpers/asyncHander");

class exportRequestController {
  createExportRequest = asyncHandle(async (req, res, next) => {
    console.log(`[P]:: `, req.body);
    new SuccessResponse({
      massage: "Create new export request success!",
      metaData: await ExportRequestService.createExportRequest({
        ...req.body,
        userId:req.user.userId
      }
      ),
    }).send(res);
    
  });
    getListExportRequest = asyncHandle(async (req, res, next) => {
        // Your code for GET export request goes here
        new SuccessResponse({
            massage: "get list export request success!",
            metaData: await ExportRequestService.getListsExportRequest(),
          }).send(res);
    });

    updateExportRequest = asyncHandle(async (req, res, next) => {
        // Your code for PUT export request goes here
        console.log('chay vao update')
        new SuccessResponse({
            massage: "update export request success!",
            metaData: await ExportRequestService.updateExportRequest({
              ...req.body,
              userId:req.user.userId
            }
            ),
          }).send(res);
    });


    deleteExportRequest = asyncHandle(async (req, res, next) => {
        // Your code for DELETE export request goes here
        new SuccessResponse({
            massage: "delete export request success",
            metaData: await ExportRequestService.deleteExportRequest({
              ...req.body
            }
            ),
          }).send(res);
    });
  
}

module.exports = new exportRequestController();
