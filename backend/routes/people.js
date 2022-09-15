const express = require("express");
const {
  getPeople,
  editPerson,
  deletePerson,
} = require("../controllers/people.controller");

const router = express.Router();

router.get("/", getPeople);
router.put("/", editPerson);
router.delete("/:ci", deletePerson);

module.exports = router;
