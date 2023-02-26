const express = require("express");
const router = express.Router();
const resController = require("../controllers/resController")

router.get("/",resController.getres)
router.get("/detail",resController.getdetail)

router.get("/detail/:id",resController.getdetailid)

router.get("/thai",resController.getthai)
router.get("/chinese",resController.getchinese)
router.get("/japanese",resController.getjapanese)
router.get("/korean",resController.getkorean)

router.get("/recommend",resController.getrecommend)

module.exports = router;