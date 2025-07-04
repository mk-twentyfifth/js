const fs = require("fs").promises;

async function writeWithFileHandle() {
  let fileHandle;

  try {
    fileHandle = await fs.open("./test/fileHandle.txt", "w");

    await fileHandle.write("First line\n");
    await fileHandle.write("Second line\n");
    await fileHandle.write("Third line\n");

    console.log("Content Written Successfully");
  } catch (error) {
    console.error("Error writing to File:", error);
  } finally {
    // it like the cleanup logic
    if (fileHandle) {
      await fileHandle.close();
    }
  }
}

writeWithFileHandle();
