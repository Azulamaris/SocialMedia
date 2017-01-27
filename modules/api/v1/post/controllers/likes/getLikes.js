var Like = require('../../models/likeModel'),
		Post = require('../../models/postModel');

exports.getLikes = function(req, res) {

	Like.model
    .find({
      postID: req.params.id
    })
    .exec(function (err, like){
			if (err) {
				res.json({
					statusCode: 4
				});
				return;
			}

			res.json(like);
		});
}
