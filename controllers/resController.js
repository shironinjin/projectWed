const Restaurant = require("../models/restaurant");
const Resdetail = require("../models/resdetail");

exports.getres = async (req, res, next) => {
  const restaurant = await Restaurant.find();
  res.status(200).json({
    data: restaurant,
  });
};

exports.getdetail = async (req, res, next) => {
  const resdetail = await Resdetail.find();
  res.status(200).json({
    data: resdetail,
  });
};

exports.getdetailid = async (req, res, next) => {
  const {id} = req.params;
const resdetailid = await Resdetail.find({resid:id});
  res.status(200).json({
    data: resdetailid
  });
};

exports.getthai = async (req, res, next) => {
  const thairestaurant = await Restaurant.find({cat:"thai"});
  res.status(200).json({
    data: thairestaurant,
  });
};

exports.getchinese = async (req, res, next) => {
  const chineserestaurant = await Restaurant.find({cat:"chinese"});
  res.status(200).json({
    data: chineserestaurant,
  });
};

exports.getjapanese = async (req, res, next) => {
  const japaneserestaurant = await Restaurant.find({cat:"japanese"});
  res.status(200).json({
    data: japaneserestaurant,
  });
};

exports.getkorean = async (req, res, next) => {
  const koreanrestaurant = await Restaurant.find({cat:"korean"});
  res.status(200).json({
    data: koreanrestaurant,
  });
};

exports.getrecommend = async (req, res, next) => {
  const recommendrestaurant = await Restaurant.find({rec:"rec"});
  res.status(200).json({
    data: recommendrestaurant,
  });
};


