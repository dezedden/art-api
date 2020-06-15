const express = require('express');
const router = express.Router();
const postcontroller = require('../controller/post-controller');


router.post('/add-post', postcontroller.addPost)
router.get('/read-posts', postcontroller.showPost)
router.get('/single-post/:id', postcontroller.singlePost)
router.patch('/update-post/', postcontroller.updatePost)
router.delete('/delete-post/:id', postcontroller.deletePost)

module.exports = router;