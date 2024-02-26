const { deleteExportRequest } = require("../controllers/product.controller");
const db = require("../models");


  class exportRequestService {
    static createExportRequest = async ({ requestType, content, expire,status,userId }) => {
      const newExportRequest = await db.ExportRequest.create({requestType, content, expire, status, userId})
      return newExportRequest
    };

    static updateExportRequest = async ({ id, requestType, content, expire,status,userId }) => {
      const updateExportRequest = await db.ExportRequest.update({requestType, content, expire, status, userId}, {where: {id}})
      return updateExportRequest
    }

    static deleteExportRequest = async ({id}) => {
      const deleteExportRequest = await db.ExportRequest.destroy({where: {id}})
      return deleteExportRequest
    }

    static getListsExportRequest = async () => {
      console.log('dfsafasdf')
      const listExportRequest = await db.ExportRequest.findAll()
      return listExportRequest
    }
  
  }
  
module.exports = exportRequestService