const mongoose = require('mongoose')


require('dotenv').config();
console.log(process.env.DataBase) ;



module.exports = ()=>{

  mongoose.connect(process.env.DataBase) ;
}