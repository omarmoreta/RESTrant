const mongoose = require("mongoose");

//Schema
const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: "/images/default.jpg" },
  cuisines: { type: String, required: true },
  city: { type: String, default: "Anytown" },
  state: { type: String, default: "USA" },
  founded: {
    type: Number,
    min: [1673, " Surely no that old?!"],
    max: [new Date().getFullYear(), " Hey, this year is in the future!"],
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

//Helper Method
placeSchema.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`;
};

//Model
const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
