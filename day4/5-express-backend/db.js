const mongoose = require("mongoose");

module.exports = () => {
	mongoose.connect(
		"mongodb+srv://admin:123456ff@mebiha-db.npfy9.mongodb.net/test",
		{ useNewUrlParser: true }
	);

	mongoose.connection.on("open", () => {
		console.log("MongoDB: Connected");
	});
	mongoose.connection.on("error", (err) => {
		console.log("MongoDB: Error", err);
	});

	mongoose.Promise = global.Promise;
};
