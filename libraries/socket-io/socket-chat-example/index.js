// libraries\socket-io\socket-chat-example\index.js

import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { Server } from "socket.io";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

// open the database file​(create db & connect)
const db = await open({
  filename: "chat.db",
  driver: sqlite3.Database,
});

// create "message" table (you can ignore the "client_offset" column for now)
await db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_offset TEXT UNIQUE,
    content TEXT
    )
  `);

const app = express();
const server = createServer(app);
const io = new Server(server, {
  connectionStateRecovery: {},
});

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

// event listener for connection from client
io.on("connection", (socket) => {
  // event listener
  socket.on("chat message", async (msg) => {
    let result;
    try {
      result = await db.run("INSERT INTO messages (content) VALUES (?)", msg);
    } catch (error) {
      console.log(error);
    }

    io.emit("chat message", msg, result.lastID);
  });
});

if (!socket.recovered) {
  try {
    await db.each(
      `SELECT id, content FROM messages WHERE id > ?`,
      [socket.handshake.auth.serverOffset || 0],
      (_err, row) => {
        socket.emit("chat message", row.content, row.id);
      }
    );
  } catch (error) {
    console.log(error);
  }
}

server.listen(3001, () => {
  console.log("server running at http://localhost:3001");
});
