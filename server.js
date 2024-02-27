const app = require("./src/app");
require("dotenv").config()


// const PORT= port
const server = app.listen(process.env.PORT, () => {
    console.log(`WSV eCommerce start with success port 3000`)
})

process.on("SIGINT", () => {
    server.close(() => console.log(`Exit Server Express`))
})