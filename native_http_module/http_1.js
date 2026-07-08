const http = require("node:http");

const server = http.createServer((req, res) => {
	console.log("i got an incoming request");
	res.writeHead(200);
	res.end("thanks for visiting my response");
});

server.listen(8000, () => {
	console.log("server is up and runnning on port 8000");
});
