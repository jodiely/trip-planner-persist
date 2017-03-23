var Promise = require('bluebird');
var router = require('express').Router();

var dayRouter = require('./day')

var db = require('../models');
var Hotel = db.model('hotel');
var Restaurant = db.model('restaurant');
var Activity = db.model('activity');
var Place = db.model('place');
var Day = db.model('day');

router.use('/api/days', dayRouter)

router.get('/', function(req, res, next) {
	Promise.all([
		Hotel.findAll({ include: [Place] }),
		Restaurant.findAll({ include: [Place] }),
		Activity.findAll({ include: [Place] }),
		Day.findOrCreate({
			where: {number: 1}
		})
	])
	.spread(function(hotels, restaurants, activities, days) {
		console.log('ddd', days)
		res.render('index', {
			hotels: hotels,
			restaurants: restaurants,
			activities: activities
		})
	})
	.catch(next)
})

router.get('/api', (req, res, next) =>
    Promise.props({
        hotels: Hotel.findAll({ include: [Place] }),
        restaurants: Restaurant.findAll({ include: [Place] }),
        activities: Activity.findAll({ include: [Place] }),
		days: Day.findAll({})
    })
        .then(data => res.json(data))
        .catch(next)
)





// Example:
//
// Use Fetch (built in browser API):
//
//   fetch('/api').then(res => json()).then(doSomethingWithIt)
//
// Use jQuery's $.get:
//
//   $.get('/api').then(doSomethingWithIt)
//
// Or:
//
//   $.ajax('/api', {method: 'get'}).then(doSomethingWithIt)






// Use Fetch (built in browser API):
//
//   IDK, look it up on MDN?
//
// Use jQuery's $.post:
//
//   $.post('/api/echo', {hello: 'world'}).then(doSomethingWithIt)
router.post('/api/echo', (req, res) => res.json(req.body))

router.post('/api/hotels',
	(req, res, next) =>
		Hotel.create(req.body)
			.then(hotel => res.json(hotel))
			.catch(next))

module.exports = router;