const db = require("../models");

// Defining methods for the Groups Controller //

module.exports = {

  create: function (req, res) {
    db.Group
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      // console.log(dbModel))
      .catch(err => res.status(422).json(err));
  },

  deleteMember: (req, res) => {
    db.Group.findByIdAndUpdate(req.params.id, { $pull: { user: { id: req.body.memberId } } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
