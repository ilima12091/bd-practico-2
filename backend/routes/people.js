const express = require("express");
const { getPeople, editPerson } = require("../controllers/people.controller");

const router = express.Router();

router.get("/", getPeople);
router.put("/", editPerson);

module.exports = router;
