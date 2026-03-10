const express = require("express")
const { newProduct } = require("../controllers/post/addProduct")
const { newUser } = require("../controllers/post/addUser")
const { addCategory } = require("../controllers/post/addCategories")
const { addOrderItem } = require("../controllers/post/AddOrderItem")
const { getUserAndOrders } = require("../controllers/get/getUserAndOrders")
const { getProductWithCategory } = require("../controllers/get/getProductWithCategory")
const { getCategory } = require("../controllers/get/getCategory")
const { getAllProductWithSameCategory } = require("../controllers/get/getAllProductWithSameCategory")


const routerEcommerce = express.Router()

routerEcommerce.post("/", newProduct)
routerEcommerce.post("/user", newUser)
routerEcommerce.post("/category", addCategory)
routerEcommerce.post("/addOrderItem", addOrderItem)


//get

routerEcommerce.get("/userorder/:id", getUserAndOrders)
routerEcommerce.get("/product/:id", getProductWithCategory)
routerEcommerce.get("/category/:id", getCategory)
routerEcommerce.get("/products", getAllProductWithSameCategory)



module.exports = routerEcommerce