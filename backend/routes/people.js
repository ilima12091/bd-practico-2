const express = require("express");
const { getPeople } = require("../controllers/people.controller");

const router = express.Router();

router.get("/", getPeople);

module.exports = router;
