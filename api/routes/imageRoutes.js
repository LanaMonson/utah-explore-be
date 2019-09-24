module.exports = function(app) {
  const imagesController = require("../controllers/imageController");

  app
    .route("/images")
    .get(imagesController.getImages)
    .post(imagesController.createImage);

  app
    .route("/images/:imageId")
    .put(imagesController.updateImage)
    .delete(imagesController.deleteImage);
};

//Routing is the ability to move between different parts of an application 
//when a user enters a URL or clicks an element 
//(link, button, icon, image etc) within the application.

//router is a networking device that forwards data packets between computer networks

//Routing refers to determining how an application responds to a client request 
//to a particular endpoint, which is a URI (or path) 
//and a specific HTTP request method (GET, POST, and so on).
//Each route can have one or more handler functions, 
//which are executed when the route is matched.

//Route definition takes the following structure:
//app.METHOD(PATH, HANDLER)
//Where:

//app is an instance of express.
//METHOD is an HTTP request method, in lowercase.
//PATH is a path on the server.
//HANDLER is the function executed when the route is matched.