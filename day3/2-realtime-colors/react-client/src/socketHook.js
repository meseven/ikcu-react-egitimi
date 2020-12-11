import io from "socket.io-client";
let socket;

export const initiateSocket = () => {
	socket = io(process.env.REACT_APP_BACKEND_ENDPOINT, {
		upgrade: false,
		transports: ["websocket"],
		pingTimeout: 60000,
	});

	console.log(`Connecting socket...`);

	socket.on("connect", () => console.log("connected"));
};

export const disconnectSocket = () => {
	console.log("Disconnecting socket...");
	if (socket) socket.disconnect();
};

export const subscribeToColor = (cb) => {
	if (!socket) return true;
	socket.on("receive-color", (msg) => {
		console.log("Websocket event received!");
		return cb(null, msg);
	});
};

export const sendColor = (color) => {
	if (socket) socket.emit("new-color", color);
};
