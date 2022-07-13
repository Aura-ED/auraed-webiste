import express from 'express'
const router = express.Router();
const blogController = require('../controllers/blogController')

router
    .route('/')
    .get(blogController.getBlogs)

module.exports = router;