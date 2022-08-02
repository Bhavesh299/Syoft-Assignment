// const router = require('express').Router() ;
const Product = require('../model/productmodel') ;
const express = require('express') ;
const router = express.Router() ;



router.get('/', async(req, res)=>{
    
      try{
        
        const products = await Product.find().lean().exec() ;
        res.status(201).json(products) ;
      }
      catch(err){
        
        res.status(404).json({message: err}) ;

      }
    }
    ) ;

   
    router.post('/', async(req, res)=>{
                                                 
        try{
          
          const products = await Product.create(req.body) ;
          res.status(201).json(products) ;
        }
        catch(err){
          
          res.status(404).json({message: err}) ;
    
        }
     }      
    ) ;

    module.exports = router ;




