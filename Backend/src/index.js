const express= require('express') ;
const cors = require('cors') ;

const app = express() ;
app.use(cors()) ;
app.use(express.json()) ;
// const {register, login, getUser} = require('./controller/authcontroller') ;
const products = require('./controller/productcontroller') ;
 
// app.post('/register', register) ;
// app.post('/login', login) ;
// app.get('/products', products) ;
app.use('/products', products) ;


// const app = require('./index') ;
const connect = require('./config/db') ;

const port= process.env.PORT || 8000 ;

app.listen(port, async()=>{

  try{

    await connect() ;
    console.log(`Connected to port ${port}`) ;
  }
  catch(err){

    console.log(`Error connecting to port ${port}`) ;
  }
})





// module.exports = app ;