const express = require("express");
const router = express.Router();
const movieController = require("../controller/controller");

router.post("/", movieController.postMovie);

router.get("/", movieController.getMovie);


module.exports = router;
