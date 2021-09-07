'use strict';

const dynamoose = require('dynamoose');

const PostSchema = new dynamoose.Schema(
  {
    key: {
      type: String,
      hashKey: true,
    },
    id: String,
    article: String,
  },
  {
    saveUnknown: true,
    timestamps: true,
  }
);
const Post = dynamoose.model('Post', PostSchema);

module.exports = Post;
