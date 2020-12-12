const express = require("express");
const router = express.Router();

//Models
const User = require("../models/User");

router.get("/:id", (req, res, next) => {
	const { id } = req.params;

	User.findById(id, (err, data) => {
		if (err) {
			throw err;
		}
		res.json(data);
	});
});

router.post("/register", (req, res, next) => {
	const { username, password } = req.body;

	const user = new User({
		username,
		password,
	});

	user
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;
