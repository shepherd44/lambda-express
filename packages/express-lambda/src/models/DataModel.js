'use strict';

const dynamoose = require('dynamoose');

const DataSchema = new dynamoose.Schema(
  {
    key: {
      type: String,
      hashKey: true,
    },
    data: {
      type: String,
      rangeKey: true,
    },
  },
  {
    saveUnknown: true,
    timestamps: true,
  }
);
const Data = dynamoose.model('Data', DataSchema, { create: false });

module.exports = Data;
