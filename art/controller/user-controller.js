const UserModel = require('../model/user-model')

exports.addUser = (req, res) => {
    const userData = {
        email : req.body.email,
        username : req.body.username,
        password : req.body.password
    }

    UserModel.create(userData)
        .then(user => {
            res.send(user)
        })
        .catch(err=>{
            res.send(err)
        })
}