var express = require('express');
var path = require('path');
var pg = require('pg');
var client = new pg.Client(process.env.DATABASE_URL);

var app = express();
app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'build')));

app.listen(app.get('port'), function(){
    console.log('connect success!');
});

app.get('/',function (req, res) {
    res.sendfile('./index.html');
});


app.get('/db', function (request, response) {
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        client.query('SELECT * FROM test_table', function(err, result) {
            done();
            if (err)
            { console.error(err); response.send("Error " + err); }
            else
            { response.send({results: result.rows}); }
        });
    });
})

app.post('/add',function(req, res){
    var text = req.param('text');
    client.query("INSERT INTO test_table(text) values($1)", [text]);
    client.query('SELECT * FROM test_table', function(err, result) {
        done();
        if (err)
        { console.error(err); response.send("Error " + err); }
        else
        { response.send({results: result.rows}); }
    });
});

app.get('/createtable',function(){
    //var client = new pg.Client(process.env.DATABASE_URL);
    client.connect();
    var query = client.query('CREATE TABLE test_table(id SERIAL PRIMARY KEY, text VARCHAR(40) not null)');
    query.on('end', function() { client.end(); });
})