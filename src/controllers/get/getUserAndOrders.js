const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()


async function getUserAndOrders(req, res) {
        

    try {
        const {id} = Number(req.params.id)


        const getInfo = await prisma.user.findFirst({
            where: id,
            include:{
                order: true
            }

         
        })
        // getInfo.forEach(user => {
        //     console.log("______________")
        //     console.log(`${user.name}, ${user.email}`)

        //     user.order.forEach(o, i => {
        //         console.log(`${i} ${o.id}`)
        //     });
        // });

        res.status(200).json(getInfo)
    } catch (error) {
        res.status(500).json({error: console.log(error)})
    }
//   console.log(getInfo)  
}

module.exports = {getUserAndOrders}