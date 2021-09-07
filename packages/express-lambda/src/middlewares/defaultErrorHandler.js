'use strict';

const defaultErrorHandler = (error, req, res, next) => {
  console.error('defaultErrorHandler::error::', error);
  let status = error.status || error.statusCode || 500;
  let message = error.message || 'Internal Error';
  if (error.code === 'ETIMEDOUT' && error.name === 'ServiceUnavailableError') {
    status = 504;
    message = error.message;
  }

  res.status(status);
  res.send({ status, message, error });
};

module.exports = defaultErrorHandler;
