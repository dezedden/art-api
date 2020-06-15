const express = require('express');
const router = express.Router();
const postcontroller = require('../controller/post-controller');
const oeuvrecontroller = require('../controller/oeuvre-controller')

router.post('/add-post', postcontroller.addPost)
router.get('/read-posts', postcontroller.showPost)
router.get('/single-post/:id', postcontroller.singlePost)
router.patch('/update-post/', postcontroller.updatePost)
router.delete('/delete-post/:id', postcontroller.deletePost)
//============================================================================

router.post('/createoeuvre', oeuvrecontroller.createOeuvre)



module.exports = router;