const express =require('express')
const authorController=require("../controllers/authorController")

const router=express.Router()

router.post('/login')
router.post('/register',authorController.registerAuthor)

module.exports =router


