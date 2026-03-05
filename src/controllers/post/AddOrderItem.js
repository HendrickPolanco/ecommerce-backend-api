const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient


async function addOrderItem(req, res) {
  try {
    const { userID, status, quantity, productID} = req.body
    const newOrderItem = await prisma.orders.create({
        data:{
            date: new Date(),
        
          userID:Number(userID),
          orderItems:{
            create:{
                quantity:Number(quantity),
                
                status,
                
                productID: Number(productID),
                
            }
          }

        }
    })
    
    res.status(201).json(newOrderItem)
  } catch (error) {
    res.status(500).json({error: error})
  }
}

module.exports = { addOrderItem}