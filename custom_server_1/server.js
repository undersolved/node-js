const http = require("node:http");

const server = http.createServer((req, res) => {
	console.log(`I got an incoming request at ${Date.now()}`);
	res.end(`Response sent at ${Date.now()}`);
});

server.listen(8000, () => {
	console.log("server is up on PORT 8000");
});
