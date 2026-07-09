const http = require("node:http");

const server = http.createServer((req, res) => {
	console.log(`I got an incoming request at ${Date.now()}`);
	console.log(req.headers);
	res.writeHead(200);
	res.end(`Request ended at ${Date.now()}`);
});

server.listen(8000, () => {
	console.log("server is up on PORT 8000");
});
