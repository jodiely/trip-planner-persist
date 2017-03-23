var Promise = require('bluebird');
var dayRouter = require('express').Router();

var db = require('../models');
var Hotel = db.model('hotel');
var Restaurant = db.model('restaurant');
var Activity = db.model('activity');
var Place = db.model('place');

dayRouter.get('/', function(req, res, next) {
    //return and array of day objects of hotels, restaurants and acitivities for each day
    //querying the database for the day objects 
    console.log('adding days') 
    
})

dayRouter.get('/:id', function(req, res, next) {
    
})


dayRouter.post('/', function(req, res, next) {
    //post day to database 
})

dayRouter.put('/:id/hotels', function(req, res, next) {

})

dayRouter.put('/:id/restaurants', function(req, res, next) {
    
})

dayRouter.put('/:id/activities', function(req, res, next) {
    
})

dayRouter.delete('/:id/hotels', function(req, res, next) {
    
})

dayRouter.delete('/:id/restaurants', function(req, res, next) {
    
})

dayRouter.delete('/:id/activities', function(req, res, next) {
    
})

dayRouter.delete('/:id', function(req, res, next) {
    
})


module.exports = dayRouter