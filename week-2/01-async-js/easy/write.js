const fs = require("fs");

const str = "mugiwara luffy";

fs.writeFile("a.txt", str, (err) => {
  console.log(fs.readFileSync("a.txt", "utf8"));
});
