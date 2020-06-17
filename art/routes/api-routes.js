const express = require('express');
const router = express.Router();
const postcontroller = require('../controller/post-controller');
const oeuvrecontroller = require('../controller/oeuvre-controller')
const usercontroller = require('../controller/user-controller')

router.post('/add-post', postcontroller.addPost)
router.get('/read-posts', postcontroller.showPost)
router.get('/single-post/:id', postcontroller.singlePost)
router.patch('/update-post/', postcontroller.updatePost)
router.delete('/delete-post/:id', postcontroller.deletePost)
//============================================================================

router.post('/createoeuvre', oeuvrecontroller.createOeuvre)
router.get('/retrieveoeuvrebyfielddesc/:desc', oeuvrecontroller.retrieveOeuvreByField)
router.get('/retrieveoeuvrebyid/:id', oeuvrecontroller.retrieveOeuvreById)
router.delete('/deleteoeuvrebyid/:id', oeuvrecontroller.deleteOeuvre)
router.patch('/updateoeuvrebyid/:id', oeuvrecontroller.updateOeuvre)

//============================================================================

router.post('/adduser',usercontroller.addUser)


module.exports = router;