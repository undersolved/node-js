const http = require("node:http");

const server = http.createServer((req, res) => {
	console.log(`I got an incoming request at ${Date.now()}`);
	// console.log(req.headers);
	res.writeHead(200);

	switch (req.url) {
		case "/":
			return res.end("you are on the homepage");
		case "/about":
			return res.end("you are at the about page");
		case "/contact us":
			return res.end("you are at contact us page");
	}
});

server.listen(8000, () => {
	console.log("server is up on PORT 8000");
});
