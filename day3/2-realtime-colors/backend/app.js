const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const cors = require("cors");

app.use(cors());

app.get("/", (req, res, next) => {
	res.end("hello express");
});

io.on("connection", (socket) => {
	console.log("a user connected");

	// socket.broadcast.emit("new-user", "a user connected");

	socket.on("new-color", (color) => {
		console.log("Yeni renk: " + color);
		socket.broadcast.emit("receive-color", color);
	});

	socket.on("disconnect", () => {
		console.log("a user disconnected");
	});
});

http.listen(4000, () => {
	console.log("listening on *:4000");
});
