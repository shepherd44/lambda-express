'use strict';

const express = require('express');
const cors = require('cors');
const compression = require('compression');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

function routerFactory(options) {
  const router = express.Router();
  router.use(compression());
  router.use(cors());
  router.use(express.json());
  // router.use(express.urlencoded({ extended: true }));
  router.use(awsServerlessExpressMiddleware.eventContext());
  return router;
}

module.exports = routerFactory;
