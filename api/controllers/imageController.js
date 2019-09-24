const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ImageSchema = new Schema({
  img: {
    type: String
  },
  title: {
    type: String
  }
});

const Image = mongoose.model("Image", ImageSchema, "images");

exports.getImages = function(req, res) {
  console.log("called get images: " + new Date());
  Image.find({})
    .exec()
    .then(function(images) {
      console.log("yay");
      res.json(images);
    })
    .catch(function(error) {
      console.log("error: " + error);
      res.send(error);
    });
};

exports.createImage = function(req, res) {
  console.log("Adding image: " + req.body.title + " :: " + req.body.img);
  var newImg = new Image(req.body);
  newImg.save(function(err, img) {
    if (err) {
      res.send(err);
    } else {
      res.send(img);
    }
  });
};

exports.updateImage = function(req, res) {
  console.log("Updating image title: " + req.body.title);
  Image.updateOne({ _id: req.params.imageId }, req.body, function(err) {
    if (err) {
      res.send(err);
    } else {
      res.send();
    }
  });
};

exports.deleteImage = function(req, res) {
  console.log("Deleting image: " + req.params.imageId);
  Image.deleteOne({ _id: req.params.imageId }, function(err) {
    if (err) {
      res.send(err);
    } else {
      res.send();
    }
  });
};


//"Routes" to forward the supported requests 
//(and any information encoded in request URLs) to the appropriate controller functions.

//CONTROLLER:
//Controller functions to get the requested data from the models, 
//create an HTML page displaying the data, 
//and return it to the user to view in the browser.