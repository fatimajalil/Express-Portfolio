// use express
let express = require('express')
// instanciate express router
let router = express.Router();

// getting projects view
router.get('/', function(req, res, next) {
    res.render('projects/index', { title: 'Portfolio' });
});
// making public
module.exports = router;
