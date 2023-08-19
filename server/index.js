const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser')
const clientRoutes = require('./Routes/clientRoutes');
const generalRoutes = require('./Routes/generalRoutes');
const managementRoutes = require('./Routes/managementRoutes');
const salesRoutes = require('./Routes/salesRoutes');


const app = express();


dotenv.config();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


app.listen(process.env.PORT, ()=>{
    //calback function when success
    console.log('Connected to Server');
});


app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);
