var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me', content: 'Hi! I am Fatima Jalil, currently studying in Georgian college' })
})
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Say Hi', content: 'You can reach me' })
})

module.exports = router;
