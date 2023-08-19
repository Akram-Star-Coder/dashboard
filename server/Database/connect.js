const mongoose = require('mongoose');



const connect = ()=>{
    mongoose.connect(process.env.MONGO, {
        useNewUrlParser :true, 
        useUnifiedTopology : true, 

    }).then(()=>{
        console.log('Connected to MongoDb');
    }).catch((e)=>{
        console.error(e.message);
    })
}





module.exports = connect;