'use strict';

const aws = require('aws-sdk');
const auditLogger = require('/opt/core/auditLogger');

const SQS_API_VERSION = '2012-11-05';

function createSqsClient(version = SQS_API_VERSION) {
  return (sqsClient = new aws.SQS({ apiVersion: version }));
}

exports.handler = function(event, context, callback) {
  auditLogger.writeAsync(event);

  let result = {};
  callback(null, result);
};

module.exports = {};
