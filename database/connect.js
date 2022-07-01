const mongoose = require('mongoose')

const connectToDB = ((url)=>{
    return mongoose.connect(url,{
        useNewUrlParser: true,
    }).then(()=>{
        console.log("Connected to DB.");
    }).catch((error)=>{
        console.log(error);
    });
});

module.exports = connectToDB;