const fs = require('fs');
let dir = '.';
if (process.argv[2]) dir = process.argv[2];
const files = fs.readdirSync(dir);
for (fn in files) {
  console.log(files[fn]);
}