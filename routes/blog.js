const express = require('express')
const { checkAuthorId } = require("../middleware/middleware")
const blogController = require("../controllers/blogController")

const router = express.Router()

router.get('/blogs',blogController.getAllBlogs)
router.post('/blogs',blogController.createBlog)
router.get('/blogs/:id',checkAuthorId,blogController.getAuthorBlogs)

module.exports = router