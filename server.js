var express = require('express');
var path = require('path');
var pg = require('pg');
var bodyParser = require('body-parser');
var cors = require('cors')


var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.listen(app.get('port'), function () {
    console.log('connect success!');
});

app.get('/', function (req, res) {
    res.sendfile('./index.html');
});

//success
app.get('/getitems', function (req, res) {
    var client = new pg.Client(process.env.DATABASE_URL);
    pg.connect(process.env.DATABASE_URL, function (err, client, done) {
        client.query('SELECT * FROM test1', function (err, result) {
            done();
            res.send(result.rows);
        });
    });
})

app.post('/additem', function (req, res) {
    var text = req.param('text');
    var _rows = [];
    //res.send(text);
    var client = new pg.Client(process.env.DATABASE_URL);
    client.connect();
    var insertquery = client.query("insert into test1 (text) values ('" + text + "')");
    insertquery.on("end", function (result) {
        client.query('SELECT * FROM test1', function (err, result) {
            client.end();
            res.send(result.rows);
        });
    });

});
