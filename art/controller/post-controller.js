const Post = require('../model/post-model');

exports.addPost = (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image
  });
  post
    .save()
    .then(() => {
      // console.log(req.body.title);
      res.send('post added successfully');
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

exports.showPost = (req, res, next) => {
    Post.find()
        .then(result => {
            res.send (result)
        })
        .catch(err => {
            res.status(400).send(err)
        })
}

exports.singlePost = (req, res, next) => {
    Post.findById(req.params.id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(400).send(err)
        })

}

exports.updatePost = (req, res, next) => {
    Post.findById(req.body.id)
        .then(result => {
            result.title = req.body.title;
            result.description = req.body.description;
            result.image = req.body.image;
            return result.save();
        })
        .then(() => {
            res.send('post updated successfully');
        }).catch(err => {
            res.status(400).send(err);
        })
}

exports.deletePost = (req, res, next) => {
    Post.findByIdAndDelete(req.params.id)
        .then(() => {
            res.send("Post deleted")
        })
        .catch(err => {
            res.status(400).send(err)
        })
}