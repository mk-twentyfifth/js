import fs from "fs";

try {
  const data = fs.readFileSync("./test/myFile.txt", "utf-8");
  console.log(data);
} catch (err) {
  console.log(err);
}
