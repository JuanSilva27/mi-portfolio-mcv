const router =require ("express").Router()
const {home} = require ("../controllers/mainController")

router.get("/", home)

module.exports= router