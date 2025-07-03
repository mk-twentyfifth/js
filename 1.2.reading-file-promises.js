const fs = require("fs").promises;

async function readFileExample() {
  try {
    const data = await fs.readFile("./test/myFile.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

readFileExample();

const { promisify } = require("util");
const readFileAsync = promisify(require("fs").readFile);

async function readWithPromisify() {
  try {
    const data = await readFileAsync("./test/myFile.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

readWithPromisify();
