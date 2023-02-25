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
