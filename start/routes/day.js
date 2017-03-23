var Promise = require('bluebird');
var dayRouter = require('express').Router();

var db = require('../models');
var Hotel = db.model('hotel');
var Restaurant = db.model('restaurant');
var Activity = db.model('activity');
var Place = db.model('place');
var Day = db.model('day');

dayRouter.get('/', function(req, res, next) {
    console.log('firing!')
    return Hotel.findAll({ include: [Place] })
        .then(function(data){
            console.log("ahhhhh", data)
        })
    
})

dayRouter.get('/:id', function(req, res, next) {
    
})


dayRouter.post('/:day', function(req, res, next) {
    //post day to database 
    Day.create({
        number: req.params.day++
    })
    .then(function(day){
        res.end();
    })

})


dayRouter.delete('/:id', function(req, res, next) {
    
})


dayRouter.put('/:id/hotels', function(req, res, next) {

})

dayRouter.put('/:id/restaurants', function(req, res, next) {
    
})

dayRouter.put('/:id/activities', function(req, res, next) {
    
})

dayRouter.delete('/:id/hotels/:id', function(req, res, next) {
    
})

dayRouter.delete('/:id/restaurants/:id', function(req, res, next) {
    
})

dayRouter.delete('/:id/activities/:id', function(req, res, next) {
    
})



module.exports = dayRouter