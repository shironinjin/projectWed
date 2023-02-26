const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resdetailSchema = new Schema({
    resid:{type:Number},
    title:{type:String},
    detail:{tyepe:String},
    picture:{type:String},
    rating:{type:String},
    time:{type:String},
    phone:{type:String},
    maps:{type:String},
    facebook:{type:String},

},{
    collection:"resdetails"
});

const resdetail = mongoose.model("resdetail",resdetailSchema);

module.exports = resdetail;
