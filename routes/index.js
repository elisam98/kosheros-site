var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home | KosherOS by SafeTelecom | Premium Kosher Smartphone Technology' });
});
router.get('/kosher-os', function(req, res, next) {
  res.render('kosher-os', { title: 'About KosherOS | KosherOS by SafeTelecom | Premium Kosher Smartphone Technology' });
});
router.get('/shop', function(req, res, next) {
  res.render('shop', { title: 'Shop Online | KosherOS by SafeTelecom | Premium Kosher Smartphone Technology' });
});
router.get('/shop/*', function(req, res, next) {
  res.render('shop', { title: 'Shop Online | KosherOS by SafeTelecom | Premium Kosher Smartphone Technology' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us | KosherOS by SafeTelecom | Premium Kosher Smartphone Technology' });
});
router.get('/app-stores', function(req, res, next) {
  res.render('app-stores', { title: 'App Stores | KosherOS by SafeTelecom | Premium Kosher Smartphone Technology' });
});
router.get('/retail', function(req, res, next) {
  res.render('retail', { title: 'Store Locator | KosherOS by SafeTelecom | Premium Kosher Smartphone Technology' });
});

router.get('/sitemap.xml', function(req, res, next) {
  res.sendFile('./public/sitemap.xml');
});
router.get('/store_sitemap.xml', function(req, res, next) {
  res.sendFile('./public/store_sitemap.xml');
});

module.exports = router;
