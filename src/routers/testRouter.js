'use strict';

const routerFactory = require('./routerFactory');

const router = routerFactory();

router.get('/', (req, res) => {
  if (req.apiGateway) {
    console.log(req.apiGateway.event);
  }
  res.json({ url: req.url, originalUrl: req.originalUrl });
});

router.get('/key', (req, res) => {
  console.log(req.url);
  if (req.apiGateway) {
    console.log(req.apiGateway.event);
    console.log(req.apiGateway.context);
  }
  res.json({ url: req.url, originalUrl: req.originalUrl });
});

module.exports = router;
