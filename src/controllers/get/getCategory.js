const { PrismaClient } = require("@prisma/client");

const prisma  = new PrismaClient();

async function getCategory(req, res) {
    const { id } = req.params.id
    try {
        const getCategory = await prisma.categories.findFirst({
            where: id,
        }) 
        res.status(200).json(getCategory)
    } catch (error) {
        res.status(500).json({error: message.error })
    }

}

module.exports = {getCategory}
