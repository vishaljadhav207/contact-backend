const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send({ message: "get all contacts" });
});
router.route("/:id").get((req, res) => {
  res.send({ message: "get contact" });
});
router.route("/").post((req, res) => {
  res.send({ message: "create contact" });
});
router.route("/:id").put((req, res) => {
  res.send({ message: `update contact for ${req.params.id}` });
});
router.route("/:id").get((req, res) => {
  res.send({ message: `delete contact ${req.params.id}` });
});
router.route("/").get((req, res) => {
  res.send({ message: "get all contacts" });
});

module.exports = router;
