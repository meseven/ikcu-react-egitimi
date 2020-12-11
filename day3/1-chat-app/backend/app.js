const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const cors = require('cors');

app.use(cors());

app.get('/', (req, res, next) => {
	res.end('hello express');
});

io.on('connection', (socket) => {
	console.log('a user connected');

	socket.broadcast.emit('new-user', 'a user connected');

	socket.on('new-message', (message) => {
		console.log('Yeni mesaj: ' + message);
		socket.broadcast.emit('receive-message', message);
	});

	socket.on('disconnect', () => {
		console.log('a user disconnected');
	});
});

http.listen(4000, () => {
	console.log('listening on *:4000');
});
