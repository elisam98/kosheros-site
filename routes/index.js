var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')

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
router.get('/app-stores/:storeName', function(req, res, next) {
  fetch(`http://updates.safetelecom.net/api/v2/stores/${req.params.storeName}`)
    .then(res => res.json())
    .then(json => {
        res.render('store-listing', { title: 'App Stores | KosherOS by SafeTelecom | Premium Kosher Smartphone Technology', store: json, timestamp: new Date(Date.now()) });
    })
});
router.get('/retail', function(req, res, next) {
  res.render('retail', { title: 'Store Locator | KosherOS by SafeTelecom | Premium Kosher Smartphone Technology' });
});
router.get('/support', function(req, res, next) {
  res.render('support', { title: 'Support | KosherOS by SafeTelecom | Premium Kosher Smartphone Technology' });
});

router.get('/status', function(req, res, next) {
  fetch(`https://api.trello.com/b/22l4ovPz/system-updates.json`)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        res.render('status', { title: 'System Status | KosherOS by SafeTelecom | Premium Kosher Smartphone Technology', cards: json.cards });
    })
});

router.get('/sitemap.xml', function(req, res, next) {
  res.sendFile('./public/sitemap.xml');
});
router.get('/store_sitemap.xml', function(req, res, next) {
  res.sendFile('./public/store_sitemap.xml');
});

module.exports = router;
