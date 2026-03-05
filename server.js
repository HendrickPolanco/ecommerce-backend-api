
require("dotenv").config()
const express = require("express");
const routerEcommerce = require("./src/routes/ecommerce.routes")
const app = express()

app.use(express.json())
app.use("/ecommerce", routerEcommerce)
app.get("/", (req, res)=> {
    res.end("it's working")
})


app.listen(4006, ()=>{
    console.log("http://localhost:4006")
})

    app.on('close', () => {
    app.closeAllConnections()
})

process.on('SIGINT', () => {
    app.close(() => {
        process.exit(0)
    })
})