const bodyParser = require("body-parser");
var express = require("express");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api", (req, res, next) => {
    console.log(req.body)
    res.json(req.body)
})
app.get("/api", (req, res, next) => {
    if (req.query.timeFrame == null) {
        res.json(
            { data: '456' }
        );
    }
    else {
        res.json(
            { data: '456' }
        );
    }
});

app.listen(process.env.PORT, () => {
    console.log("Server running ");
});