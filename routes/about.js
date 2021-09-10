const router =require ("express").Router()
const { index } = require("../controllers/aboutController")

router.get("/about", index)

module.exports= router