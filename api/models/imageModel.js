const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ImageSchema = new Schema({
  img: {
    type: String
  }
});

module.exports = mongoose.model("Images", ImageSchema, "images");
