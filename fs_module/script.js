// what is blocking code, non blocking code, synchronous

const fs = require("node:fs");

// task : read the content of notes.txt file

console.log("start of script".toUpperCase());

// const contents = fs.readFileSync("notes.txt", "utf-8");
// console.log(contents);

// SYNC => Blocking operations -->
// suppose it takes 1 min to read a 1GB txt file
// so the operations will be blocked for 1 min until the file is read completely, this will block the further line of codes to execute until the file is completely read

// non blocking operation
// [ASYNC] for this you have to add a callback function

fs.readFile("notes.txt", "utf-8", (error, data) => {
	if (error) console.log(error);
	else console.log("here are the content", data);
});

console.log("end of script".toUpperCase());

// this will be the output
// START OF SCRIPT
// END OF SCRIPT
// here are the content Honestly beginner who are learning from 0 . This course is not for them. Go in youtube, Start learning js from 0 then come here. It's easy after that. I am from biology background but still understanding well . Hitesh Sir is great teaching student simply.
// this will not block the ops, will keep reading in bg and then show the output once when its done, rest of the code will be executed before without being blocked by the SYnc ops
