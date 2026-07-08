const fs = require("fs");
const content_1 = fs.readFileSync("notes.txt", "utf-8");

// creating a file using writeFileSync(block op)

fs.writeFileSync("copy.txt", "i am a disco dancer", "utf-8");

// write file will always overwrite the content
// use .appendfile sinc to add content

fs.appendFileSync("copy.txt", content_1, "utf-8");

// creating a new folder or directly using mkdirSync

fs.mkdirSync("games");
// use this for creating folders inside folder : below
// fs.mkdirSync('games/xyz/a',{recursive:true})

// remove a directory fs.rmdirSync('games')
// delete a file fs.unlinkSync('copy.txt)'
