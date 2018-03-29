var mongoose = require('mongoose');
var User = require('../user/user');
var Comment = require('./comment');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CommentSchema = new mongoose.Schema({

  parent_comment_id: {
  	type: Schema.Types.ObjectId,
    ref: 'Comment'
  },

  comment: {
  	type: String,
    required: true
  },

  created_date: {
    type: Date,
    default: Date.now
  },

  user_id:{ 
  	type: Schema.Types.ObjectId, ref: 'User',
  	required: true 
  }

});

mongoose.model('Comment', CommentSchema);

module.exports = mongoose.model('Comment');


