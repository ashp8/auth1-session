require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const session = require('./config/session.config');
const router = require('./router/index');
const mongoose = require('./config/mongoose.config');
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGO_URI;

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(session);
app.use('/', router);
app.set('view engine', "ejs");

app.listen(PORT, ()=> console.log(`http://localhost:${PORT}/`));
