'use strict';

const routerFactory = require('./routerFactory');

const sqsRouter = routerFactory();

sqsRouter.get('/', (req, res) => {
  if (req.apiGateway) {
    console.log(req.apiGateway.event);
  }
  res.json({ url: req.url, originalUrl: req.originalUrl });
});

sqsRouter.get('/', (req, res) => {
  console.log(req.url);
  if (req.apiGateway) {
    console.log(req.apiGateway.event);
    console.log(req.apiGateway.context);
  }
  res.json({ url: req.url, originalUrl: req.originalUrl });
});

module.exports = sqsRouter;
