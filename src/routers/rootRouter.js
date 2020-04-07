'use strict';

const compression = require('compression');
const routerFactory = require('./routerFactory');

const router = routerFactory();

if (process.env.NODE_ENV === 'test') {
  router.use('/sam', compression());
}

router.get('/', (req, res) => {
  console.log(req.url);
  if (req.apiGateway) {
    console.log(req.apiGateway.event);
    console.log(req.apiGateway.context);
  }
  res.json({ url: req.url, originalUrl: req.originalUrl });
});

router.post('/', (req, res) => {
  res.json({ url: req.url, originalUrl: req.originalUrl });
})

module.exports = router;
