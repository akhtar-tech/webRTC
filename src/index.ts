import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const port = 8080;
const app = express();
app.use(cors);
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    //allowedHeaders: ['Content-Type', 'Authorization'],
    //credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
