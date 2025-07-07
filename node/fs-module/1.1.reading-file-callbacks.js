import fs from "fs";

// for text file
fs.readFile("./test/myFile.txt", "utf-8", (error, data) => {
  if (error) {
    console.error(error);
  }
  console.log(data);
});

// for image file
fs.readFile("./test/image.png", (error, data) => {
  if (error) throw error;
  console.log(data.length, "byte");
});
