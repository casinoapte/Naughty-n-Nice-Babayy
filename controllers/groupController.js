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
  
};
