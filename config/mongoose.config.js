const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.MONGO_URI, 
    {
        useNewUrlParser: true,
        useCreateIndex:true,
        useUnifiedTopology: true
    }
)
.then(resp=>{
    console.log("connected");
});