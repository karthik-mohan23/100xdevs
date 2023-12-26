const fs = require("node:fs");
const content = "Some content!";
fs.writeFile("text.txt", content, (err) => {
  if (err) {
    console.error(err);
  }
  console.log("content written successfully");
});
