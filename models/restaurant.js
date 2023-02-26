const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    title: { type: String },
    icon: { type: String },
    time: { type: String },
    rating: { type: String },
    resid: { type: Number },
    rec: { type: String },
    cat: { type: String },
  },
  { collection: "restaurants" }
);

const restaurant = mongoose.model("restaurant", restaurantSchema);

module.exports = restaurant;
