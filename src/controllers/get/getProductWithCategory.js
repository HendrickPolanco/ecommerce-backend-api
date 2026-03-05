const { PrismaClient } = require("@prisma/client");

const prisma  = new PrismaClient;


async function getProductWithCategory(req,res) {

       try {
        const {id } = Number(req.params.id)
        const getProduct= await prisma.product.findFirst({
            where:id,
            
        })
        const ProductCategoryID = getProduct.categoryID

        const getCategory = await prisma.categories.findMany()

        const categoryProduct = getCategory.filter(c => c.id === ProductCategoryID)
       
        const productProperties = {
            getProduct,
            categoryProduct,
        }
        res.status(200).json(productProperties)
       } catch (error) {
        res.status(404).json({error: message.error})
       }


}

module.exports = {getProductWithCategory}