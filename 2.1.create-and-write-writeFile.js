const fs = require("fs").promises;

async function writeFileExample() {
  try {
    // Overfile with new Text
    await fs.writeFile("./test/myFile.txt", "testing from function", "utf8");

    const data = { name: "John", age: 30, city: "New York" };

    // Create File if not Exist
    await fs.writeFile(
      "./test/data.json",
      JSON.stringify(data, null, 2),
      "utf8"
    );

    console.log("Files Created Successfully");
  } catch (err) {
    console.error(err);
  }
}

writeFileExample();
