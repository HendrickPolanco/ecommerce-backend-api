const { PrismaClient } = require("@prisma/client");

const prisma =  new PrismaClient();

async function getAllProductWithSameCategory(req, res) {
    
    const categoryID = Number(req.query.category)

    try {
        const products = await prisma.product.findMany({
            where: {categoryID,}
        })

        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({error: message.error})
    }



}

module.exports = {getAllProductWithSameCategory}