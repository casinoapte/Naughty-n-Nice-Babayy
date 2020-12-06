const router = require("express").Router();
const groupsController = require("../../controllers/groupController");
const db = require("../../models");

router.get("/:name/:pw", (req, res) => {
  db.Group.findOne({
    name: req.params.name,
    password: req.params.pw
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  db.Group.findOne({
    _id: req.params.id,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(500).json(err);
    });
});

// Find Group by ID //

// router.get("/find/:id", (req, res) => {
//   console.log("done");
//   db.Group.findById(req.params.id)
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.send(500).json(err);
//     });
// });


router.put("/:id", (req, res) => {
  db.Group.findByIdAndUpdate(req.params.id, { $push: { user: req.body } })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// Matches with "/api/group"
router.route("/").post(groupsController.create);



module.exports = router;
