const fs = require("fs");

let arr = [];

fs.readFile("a.txt", "utf8", (err, data) => {
  console.log(data);
  arr = data.split(/\s+/);

  let str = arr.toString();
  str = str.replaceAll(",", " ");

  fs.writeFile("a.txt", str, (err) => {
    console.log(fs.readFileSync("a.txt", "utf8"));
  });
});
