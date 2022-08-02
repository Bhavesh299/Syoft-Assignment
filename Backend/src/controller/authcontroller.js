const router = require('express').Router() ;
const {auths} = require('../model/authmodel') ;
const express = require('express') ;
const cors = require('cors') ;


router.get('/', cors(), async(req, res)=>{
      
      try{
         
         const auths = await auths.find().lean().exec() ;
         res.status(201).json(auths) ;
      }
      catch(err){
         
         res.status(404).json({message: err}) ;
    
      }
    }
    ) ;

    router.post('/', cors(), async(req, res)=>{
                                                      
          try{
             
             const auth = await auths.create(req.body) ;
             res.status(201).json(auth) ;
          }
          catch(err){
             
             res.status(404).json({message: err}) ;
        
          }
      }     
    ) ;

    module.exports = router ;
    