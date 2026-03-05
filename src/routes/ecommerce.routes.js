const express = require("express")
const { newProduct } = require("../controllers/post/addProduct")
const { newUser } = require("../controllers/post/addUser")
const { addCategory } = require("../controllers/post/addCategories")
const { addOrderItem } = require("../controllers/post/AddOrderItem")
const { getUserAndOrders } = require("../controllers/get/getUserAndOrders")


const routerEcommerce = express.Router()

routerEcommerce.post("/", newProduct)
routerEcommerce.post("/user", newUser)
routerEcommerce.post("/category", addCategory)
routerEcommerce.post("/addOrderItem", addOrderItem)


//get

routerEcommerce.get("/userorder/:id", getUserAndOrders)


module.exports = routerEcommerce