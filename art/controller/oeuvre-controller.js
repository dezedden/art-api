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

//=====================================================================================
exports.retrieveOeuvreByField = async (req, res)=> {  //single doc is returned. 
    const description = req.params.desc
    const doc = await Oeuvre.findOne({ description: description})
  
    .then((result)=>{
        res.send(result)
    })
    .catch(err=>{
        res.status(400).send(err)
    })
}

exports.retrieveOeuvreById = async (req, res) => {
    const id= req.params.id
    Oeuvre.findById(id)
        .then(resultat => {
            res.send(resultat)
        })
        .catch(err => {
            res.status.send(err)
        })
}

//=====================================================================================
exports.updateOeuvre = (req, res) => {
    Oeuvre.findById(req.params.id)
        .then(result => {
            result.name = req.body.name
            
            return result.save();
        })
        .then(() => {
            res.send('post updated successfully');
        }).catch(err => {
            res.status(400).send(err);
        })
}


//=====================================================================================
exports.deleteOeuvre = (req, res)=>{
    const id = req.params.id
    Oeuvre.findByIdAndRemove(id)
        .then(doc=>{
            if(!doc) res.send("aucun document trouvé")
            else res.send(doc)
        })
        .catch(err=>{
            res.status(400).send(err)
        })
}