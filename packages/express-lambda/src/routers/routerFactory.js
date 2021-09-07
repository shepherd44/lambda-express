'use strict';

const express = require('express');
const cors = require('cors');
const compression = require('compression');

function routerFactory(options = {}) {
  const router = express.Router();
  if (options.compression) router.use(compression());
  router.use(
    cors({
      allowedHeaders: {},
      exposedHeadersa: {},
    })
  );
  router.use(express.json());
  return router;
}

module.exports = routerFactory;
