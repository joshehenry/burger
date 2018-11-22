var burgers = require("../models/burger.js");
 var express = require('express');
 var router = express.Router();

 router.get('/', function(req, res){

    burgers.selectAll(function(data) {

        var hbsObject = {

            burgers: data
        };
        res.render('index', hbsObject);
    })
 })

 router.post('/burgers', function(req, res){

    burgers.insertOne([
        'burger_name'
    ], [
        req.body.burger_name
    ], function(data) {

        res.redirect('/');
    })

});

 router.put('/burgers/:id', function(req, res){

    burgers.updateOne({
        devoured: true},

        condition, function(data){

            res.redirect('/')
        });


    })
    
    module.exports = router;