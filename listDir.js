import fs from "fs/promises"

async function listDir(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  
  const stat = await fs.stat(dirPath)
  console.log("stat", stat)
  
  console.log(entries)
  console.log(dirPath)
  
  for (const entry of entries) {
    console.log(`${entry.name} is a ${entry.isDirectory() ? 'directory' : 'file'}`);
  }
}

const dirPath = './';
listDir(dirPath);