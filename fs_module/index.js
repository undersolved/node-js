const fs = require("fs");
const content_1 = fs.readFileSync("notes.txt", "utf-8");

console.log(content_1);

// creating a file using writeFileSync(block op)

fs.writeFileSync('copy.txt','i am a disco dancer','utf-8');







// echo "# node-js" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/undersolved/node-js.git
// git push -u origin main
