const { PrismaClient } = require("@prisma/client");

const newPrismaClient = new PrismaClient;


const main = async()=>{
    
    // const newCategory = await newPrismaClient.categories.create({
    //     data:{
    //         name: "nanan",
    //     }

    // })

    await newPrismaClient.categories.update({
        where:{ id:4,},data:{
            name: "garage"
        }
    })
//    const getAllCategory = await newPrismaClient.categories.findMany()
//         console.log(getAllCategory)

//         getAllCategory.map(categories =>
//             console.log(`${categories.name}`)
//         )


   // console.log(newCategory)

            // const getOneCategory = await newPrismaClient.categories.findFirst({
            //     where:  {
            //         AND:[{id:1},{ name: "furniture"}], 
            //     }
            // })
  // console.log(getOneCategory)
}

main()