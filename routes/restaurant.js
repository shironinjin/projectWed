const express = require("express");
const router = express.Router();
const resController = require("../controllers/resController")

router.get("/",resController.getres)
router.get("/detail",resController.getdetail)

module.exports = router;