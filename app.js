const express = require("express");
const app = express();
const request = require("request");

app.get("/", (req, res) => {
  res.send("https://nseapi.herokuapp.com/symbol_name to get stock price");
});
app.get("/:symbol", (req, res) => {
  const url =
    "https://query1.finance.yahoo.com/v8/finance/chart/" +
    req.params.symbol +
    ".NS?region=IN&lang=en-IN&includePrePost=false&interval=2m&useYfid=true&range=1d&corsDomain=in.finance.yahoo.com&.tsrc=finance";
  request(url, function (error, response, body) {
    const data = JSON.parse(body);
    res.send(data.chart.result[0].meta);
  });
});

app.listen(process.env.PORT || "3001", () => {
  console.log("Server started on localhost 3001..");
});
