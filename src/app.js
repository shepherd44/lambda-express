'use strict';

// const path = require('path');
const express = require('express');
const testRouter = require('./routers/testRouter');
const rootRouter = require('./routers/rootRouter');

const app = express();

// app.set('views', path.join(__dirname, 'views'));

app.use('/', rootRouter);
app.use('/test', testRouter);

module.exports = app;
