const http = require("node:http");

const server = http.createServer((req, res) => {
	console.log("I got an incoming request");
	res.writeHead(200);
	res.end("thank you for sending request");
});

server.listen(8000, () => {
	console.log("server is running on 8000");
});
