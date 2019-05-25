const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.Word
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    console.log(req.params);
    db.Word
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.Word
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: () =>{
    db.Word
      .findOneAndUpdate({
          _id: req.params.id
        }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  deleteMany: (req, res) => {
    db.Word
      .findById({
        _id: req.params.id
      })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }


}