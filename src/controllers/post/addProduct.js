const { PrismaClient } = require("@prisma/client");

const newPrismaClient = new PrismaClient;

async function newProduct(req, res) {
      try {
        const {name,price,categoryID} = req.body
        const newProduct = await newPrismaClient.product.create({
            data:{
                name,
                price,
                categoryID,
    
            }
        })
            res.status(201).json(newProduct)
        console.log(newProduct)
      } catch (error) {
        res.status(400).json({error: error.message})
      }
    
}


module.exports = {newProduct}