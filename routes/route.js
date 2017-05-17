const express = require('express');
const router = express.Router();

//const Contact = require('../model/contacts');
router.get('/employerzone/register',function(req,res,next){
    res.send('Employer register')
})

router.get('/employerzone/:id',function(req,res,next){
    res.send('Employer Dashboard')
})

/* //Recieve data
router.get('/contacts',function(req,res,next){
    Contact.find(function(err,contacts){
        res.json(contacts);
    })
})

//Add contacts
router.post('/contact',function(req,res,next){
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });
    
    newContact.save(function(err,contact){
        if(err){
            res.json({msg:'failed to add contact'});
        }else{
            res.json({msg:'contact add successfully'});
        }
    })
})

//Delete contacts
router.delete('/contact/:id',function(req,res,next){
    //delete id
    Contact.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json("error deleting record "+err);
        }else{
            res.json(result);
        }
    })
})*/

module.exports = router;