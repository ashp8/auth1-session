const session = require('express-session');
const mongoDBsession = require('connect-mongodb-session')(session);
const store = mongoDBsession({
    uri: process.env.MONGO_URI,
    collection: "mySessions"
});
module.exports = session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store
});