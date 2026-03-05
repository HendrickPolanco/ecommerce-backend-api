const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient;


async function addCategory(req, res) {

    const {name} = req.body

    const newCategory = await prisma.categories.create({
        data:{
            name
        }
    })

    console.log(`new added succefully ${newCategory}`)
}


module.exports = {addCategory}