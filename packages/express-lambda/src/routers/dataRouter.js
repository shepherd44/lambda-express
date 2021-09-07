'use strict';

const { getCurrentInvoke } = require('@vendia/serverless-express');
const timeout = require('connect-timeout');
const routerFactory = require('./routerFactory');
const DataModel = require('../models/DataModel');
const DataService = require('../services/dataService');

const router = routerFactory();

router.get('/', timeout('10s'), (req, res, next) => {
  const { event } = getCurrentInvoke();
  console.debug('api gateway event', JSON.stringify(event));
  const dataService = new DataService({ DataModel });
  dataService
    .getData({
      key: req.query?.key,
      data: req.query?.data,
    })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const dataService = new DataService({ DataModel });
  dataService
    .create({
      key: req.body?.key,
      data: req.body?.data,
    })
    .then((response) => {
      console.log(response);
      res.status(200).json({ ...response });
    })
    .catch(next);
});

router.get('/:key', timeout('10s'), (req, res, next) => {
  const dataService = new DataService({ DataModel });
  dataService
    .getData({ key: req.params?.key })
    .then((response) => {
      res.status(200).json({ ...response });
    })
    .catch(next);
});

module.exports = router;
