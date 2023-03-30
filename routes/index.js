var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About-Us' });
});

// ------contact--------------------//
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact-Us' });
});


// -----services--------------------//
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

// -------seo_services.ejs-----------//
router.get('/seo-services', function(req, res, next) {
  res.render('seo_services', { title: 'SEO-Services' });
});

// --------socialMedia.ejs---------------//
router.get('/social-media', function(req, res, next) {
  res.render('socialMedia', { title: 'Social-Media' });
});

// ------Digital.ejs----------------------//
router.get('/digital-services', function(req, res, next) {
  res.render('Digital', { title: 'Digital-Services' });
});

// -------Development---------------------//
router.get('/development-services', function(req, res, next) {
  res.render('Development', { title: 'Development-Services' });
});

// -----Content-----------------------//
router.get('/content-services', function(req, res, next) {
  res.render('Content', { title: 'Content-Services' });
});

// -------Interactive--------------------//
router.get('/interactive-services', function(req, res, next) {
  res.render('Interactive', { title: 'Interactive-Services' });
});

// -------blogs.ejs-----------------------//
router.get('/blogs-news', function(req, res, next) {
  res.render('blogs', { title: 'Blogs & News' });
});


module.exports = router;
