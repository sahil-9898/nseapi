var WebSocketClient = require("websocket").client;

var client = new WebSocketClient();

client.on("connectFailed", function (error) {
  console.log("Connect Error: " + error.toString());
});

client.on("connect", function (connection) {
  console.log("WebSocket Client Connected");
  connection.on("error", function (error) {
    console.log("Connection Error: " + error.toString());
  });
  connection.on("close", (connection) => {
    console.log("connection closed");
  });
  connection.send('{"subscribe":["IRCTC.NS", "SBIN.NS"]}');

  connection.on("message", function (message) {
    console.log(message);
  });
});

client.connect("wss://streamer.finance.yahoo.com/", "echo-protocol");
