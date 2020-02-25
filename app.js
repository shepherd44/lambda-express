'use strict';

// const path = require('path');
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const app = express();
const router = express.Router();

if (process.env.NODE_ENV === 'test') {
  router.use('/sam', compression());
} else {
  router.use(compression());
}

router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(awsServerlessExpressMiddleware.eventContext());

// app.set('views', path.join(__dirname, 'views'));

router.get('/', (req, res) => {
  res.json({});
});

app.use('/', router);

module.exports = app;
