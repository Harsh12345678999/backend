const express = require("express")
const app = express()
app.use(express.json())


//import router
const product = require("./routers/productRouter")
app.use("/api/v1", product)

//middleware error
const errorMiddleware = require("./middleware/error")
app.use(errorMiddleware)

module.exports = app