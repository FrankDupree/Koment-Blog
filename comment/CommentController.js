var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var Comment = require('./comment');



// RETURNS ALL THE COMMENTS IN THE DATABASE
router.get('/', function (req, res) {
    Comment.find({}, function (err, comments) {
        if (err) return res.status(500).send("There was a problem finding comments.");
        res.status(200).send(comments);
    });
});


// CREATES A NEW COMMENT
router.post('/', function (req, res) {
    Comment.create({
            parent_comment_id : req.body.parent_comment_id || null,
            comment : req.body.comment, 
            user_id : req.body.user_id
        },
        function (err, comment) {
        	console.log(err)
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(comment);
        });
});


module.exports = router;