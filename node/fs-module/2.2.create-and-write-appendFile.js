// Append Content to the file
// If file does not exist it create the file

const fs = require("fs").promises;

async function appendToFile() {
  try {
    const logEntry = `${new Date().toISOString()}: Application Started\n`;
    await fs.appendFile("./test/app.log", logEntry, "utf8");

    console.log("Log Entry Added");
  } catch (err) {
    console.log("Error Appending to File:", err);
  }
}

appendToFile();
