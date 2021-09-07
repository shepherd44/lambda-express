'use strict';

const express = require('express');
const timeout = require('connect-timeout');
const dataRouter = require('./routers/dataRouter');
const exceptionHandler = require('./middlewares/defaultErrorHandler');

const app = express();

app.use(timeout('5s'));
app.use('/data', dataRouter);
app.use(exceptionHandler);

module.exports = app;
