const fs = require('fs').promises;
const dirPath = './';

async function listDir() {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });

  const stat = await fs.stat(dirPath)
  console.log("stat", stat)

  console.log(entries)
  console.log(dirPath)

  for (const entry of entries) {
    console.log(`${entry.name} is a ${entry.isDirectory() ? 'directory' : 'file'}`);
  }
}

listDir();