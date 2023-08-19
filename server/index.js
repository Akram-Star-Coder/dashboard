const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');


const app = express();


dotenv.config();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));


app.listen(process.env.PORT, ()=>{
    //calback function when success
    console.log('Connected to Server');
});
