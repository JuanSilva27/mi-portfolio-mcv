const express = require("express")
const app = express()
const port = 3030
const main = require ("./routes/main")
const about = require ("./routes/about")

app.use(express.static("public"))

app.use("/",main)
app.use("/",about)



app.listen(port, ()=> console.log("Servidor funcionando"))
