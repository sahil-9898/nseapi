const express = require("express");
const api = require("indian-stock-exchange");
const app = express();
var bse = api.BSE;
var nse = api.NSE;

app.get("/", (req, res)=>{
    res.send("Home");
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


