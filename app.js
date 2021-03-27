const express = require("express");
const api = require("indian-stock-exchange");
const app = express();
var bse = api.BSE;
var nse = api.NSE;

app.get("/", (req, res)=>{
    res.send("Daddy Sahil ne api banayi hai , go to https://nseapi.herokuapp.com/symbol_name to get stock price");
});
app.get("/:symbol", (req, res)=>{
    nse.getQuoteInfo(req.params.symbol).then(
        function(price){
                const x = price.data.data[0];
                if(x.buyPrice1==='-'){
                    res.send(x.lastPrice);
                }else{
                    res.send(x.buyPrice1);
                }
        });
});

app.get("/getPrice/:symbol", (req, res)=>{
    nse.getQuoteInfo(req.params.symbol).then(
        function(price){
                const x = price.data.data[0];
                if(x.buyPrice1==='-'){
                    res.send(x.lastPrice);
                }else{
                    res.send(x.buyPrice1);
                }
        });
});

app.listen(process.env.PORT||"3001", ()=>{
    console.log("Server started on localhost 3001");
});


