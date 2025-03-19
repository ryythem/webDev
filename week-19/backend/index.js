const express = require("express");
const { WebSocket, WebSocketServer, Server } = require("ws");

const app = express();

const httpServer = app.listen(8080);

const wss = new WebSocketServer({ server: httpServer });

wss.on("connection", function connection(ws) {
  ws.on("message", function message(data, isBinary) {
    console.log("Received", data);
  });
  ws.send("hi from server");
});
