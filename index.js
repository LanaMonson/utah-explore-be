var express = require('express'),
    app = express(),//standard creation pattern for Express is:
    // Import the Express module --> var express = require('express');  
    // Create a new Express Instance --> var app = express();
    port = process.env.PORT || 7777, //app.listen() --> you can set the environment variable PORT to tell your web server what port to listen on
    cors = require('cors'), //is a node.js package for providing a Connect/Express middleware that can be used to enable Cross-Origin Resource Sharing with various options
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

const workingConnectionString = 'mongodb+srv://john-doe:helloworld@helloworldcluster-sk0i7.mongodb.net/utah?retryWrites=true&w=majority';
const newConnectionString = 'mongodb+srv://test:test@utahimages-srcls.mongodb.net/utah?retryWrites=true&w=majority';

mongoose.connect(newConnectionString, { useNewUrlParser: true });


app.use(cors());  // allow cross origin requests from our UI
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/imageRoutes'); // importing route
routes(app); // register the route

app.listen(port);
console.log('Hello World RESTful API server started on: ' + port);


/*
bodyParser.urlencoded([options])
Returns middleware that only parses urlencoded bodies 
and only looks at requests where the Content-Type header matches the type option. 
This parser accepts only UTF-8 encoding of the body 
and supports automatic inflation of gzip and deflate encodings.

A new body object containing the parsed data is populated on the request object 
after the middleware (i.e. req.body). 
This object will contain key-value pairs, 
where the value can be a string or array (when extended is false), 
or any type (when extended is true).

Options
The urlencoded function takes an optional options object 
that may contain any of the following keys:
extended
The extended option allows to choose between parsing the URL-encoded data 
with the querystring library (when false) or the qs library (when true). 
The "extended" syntax allows for rich objects 
and arrays to be encoded into the URL-encoded format, 
allowing for a JSON-like experience with URL-encoded. 
For more information, please see the qs library.


app.use(bodyParser.json()) basically tells the system that you want json to be used.

bodyParser.urlencoded({extended: ...}) basically tells the system 
whether you want to use a simple algorithm for shallow parsing (i.e. false) 
or complex algorithm for deep parsing that can deal with nested objects (i.e. true)

*/