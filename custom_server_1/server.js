const http = require("node:http");

const server = http.createServer((req, res) => {
	console.log(`I got an incoming request at ${Date.now()}`);
	// console.log(req.headers);

	switch (req.url) {
		case "/":
			res.writeHead(200);
			return res.end("you are on the homepage");
		case "/about":
			res.writeHead(200);
			return res.end("you are at the about page");
		case "/contact-us":
			res.writeHead(200);
			return res.end("you are at contact us page");
		default:
			res.writeHead(404);
			return res.end("You are Lost");
	}
});

server.listen(8000, () => {
	console.log("server is up on PORT 8000");
});
