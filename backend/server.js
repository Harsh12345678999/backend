const app = require("./app")
const dotenv = require("dotenv")
dotenv.config({path:"backend/config/config.env"})
const connectDatabase = require("./config/database")

connectDatabase()

app.listen(process.env.PORT, () => {
    console.log(`Server is connect with http://localhost:${process.env.PORT}`)
})