const express = require("express")

module.exports = function(server){
    //Api routes
    const router = express.Router();
    server.use("/api", router)

    //todo routes
    const todoService = require("../api/todo/todoService")
    todoService.register(router,"/todos")
}