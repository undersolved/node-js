const http = require("node:http");
const fs = require("node:fs");
const server = http.createServer((req, res) => {
	const method = req.method;
	const path = req.url;

	const log = `\n [${new Date().toLocaleString("en-IN")}] : ${method} ${path}`;
	fs.appendFileSync("log.txt", log, "utf-8");

	switch (method) {
		case "GET": {
			switch (path) {
				case "/":
					return res.writeHead(200).end("welcome to homepage");
				case "/contact-us":
					return res.writeHead(200).end("xyz@gmail.com");
				case "/tweet":
					return res.writeHead(200).end("Tweet-1 \n Tweet-2");
				// default:
				// 	return res.writeHead(404).end("check URL please");
			}
		}
        break;

		case "POST": {
			switch (path) {
				case "/tweet":
					return res.writeHead(201).end("New tweet added");
			}
		}
	}
	return res.writeHead(404).end("you are wrong man");
});

server.listen(8000, () => {
	console.log("server is UP on PORT 8000");
});
