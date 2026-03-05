const { PrismaClient } = require("@prisma/client");

const newPrismaClient = new PrismaClient;

async function newUser(req, res) {
      try {
        const {name,lastname,email} = req.body
        const newUser = await newPrismaClient.user.create({
            data:{
                name,
                lastname,
                email
    
            }
        })
            res.status(201).json(newUser)
        console.log(newUser)
      } catch (error) {
        res.status(400).json({error: error.message})
      }
    
}


module.exports = {newUser}