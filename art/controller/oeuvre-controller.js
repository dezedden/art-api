const Oeuvre = require('../model/oeuvre-model')

exports.createOeuvre = (req, res, next)=>{
    const oeuvre = new Oeuvre({
        name:req.body.name,
        description: req.body.description
    })
    oeuvre.save()
    .then(() => {
        res.send("oeuvre ajouté avec succès")
    })
    .catch(err => {
        res.status(400).send(err)
    })
}