// what is blocking code, non blocking code, synchronous

const fs = require("node:fs");

// task : read the content of notes.txt file

console.log("start of script".toUpperCase());

const contents = fs.readFileSync("notes.txt", "utf-8");
console.log(contents);

// SYNC => Blocking operations --> 
// suppose it takes 1 min to read a 1GB txt file
// so the operations will be blocked for 1 min until the file is read completely, this will block the further line of codes to execute until the file is completely read


console.log("end of script".toUpperCase());
