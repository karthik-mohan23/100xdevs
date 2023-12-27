const fs = require("node:fs");
fs.readFile("a.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const content = data.replace(/\s+/g, " ").trim();
  fs.writeFile("a.txt", content, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("content written successfully");
  });
});
