var data = require("../data.json");

exports.addFriend = function(req, res) {    
	res.render('add', data);

	var newFriend = {};
	newFriend["name"] = req.query.name;
	newFriend["description"] = req.query.description;
	newFriend["imageURL"] = "http://lorempixel.com/400/400/people";
 
	data["friends"].push(newFriend);
}