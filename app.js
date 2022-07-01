const express = require('express');
const app = express();
const routes = require('./routes/routes');
const connectToDB = require("./database/connect");
require('dotenv').config();

//read data from .env file
const port = process.env.PORT || 5000;
const url = process.env.MONGO_DB_URL;

//Middlewares
app.use(express.static('./public'));
app.use(express.json());

//routes
app.use('/api/v1/tasks',routes)

const start = async () =>{
    try{
        await connectToDB(url);
        app.listen(port,()=>{
            console.log(`Server is listening on port ${port}...`);
        });
    }catch (error) {
        console.log(error);
    }
}

start();