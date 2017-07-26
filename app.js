const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/door_man')
	.then(() => console.log('Connected to mongo.'));

routes(app);

module.exports = app;