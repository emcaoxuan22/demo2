const express = require("express");
const router = express.Router();
const ExportRequestController = require("../../controllers/product.controller.js");
const { asyncHandle } = require("../../helpers/asyncHander.js");
const { authentication }  = require("../../auths/authUtils.js");
router.use(authentication);

// router.get("/product-list", asyncHandle(ProductController.createProduct) );
router.post("/create-export-request", ExportRequestController.createExportRequest );
router.put("/update-export-request", ExportRequestController.updateExportRequest) ;
router.delete("/delete-export-request", ExportRequestController.deleteExportRequest );
router.get("/get-list-export-request", ExportRequestController.getListExportRequest );
// router.get("/get-detail-export-request/:id", ExportRequestController. );

module.exports = router;