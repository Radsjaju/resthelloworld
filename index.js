var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.listen('3000', function () {
    console.log(`Listening on port 3000`)
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/hello', function (req, res) {
    res.send('Hello World');
})

app.use('/greeting', function (req, res) {
    //console.log('info:' + JSON.stringify(req.body));
    res.send('Hello ' + req.body.Name)
})