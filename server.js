var express = require('express');
var path = require('path');
var pg = require('pg');
var bodyParser = require('body-parser');
var cors = require('cors')

var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.use('/static', express.static(path.join(__dirname, 'client')));

app.listen(app.get('port'), function () {
    console.log('connect success!');
});

app.get('/', function (req, res) {
    res.sendfile('./client/login.html');
});

app.get('/main', function (req, res) {
    res.sendfile('./client/index.html');
});

//success
app.post('/login', function (req, res) {
    var name = req.body.name;
    var password = req.body.password;
    var query = "select * from user_account where name='" + name + "' and password='" + password + "'";
    var client = new pg.Client(process.env.DATABASE_URL);
    pg.connect(process.env.DATABASE_URL, function (err, client, done) {
        client.query(query, function (err, result) {
            done();
            if (result.rows.length) {
                res.send({
                    msg: 'success',
                    name: name,
                    token: '@dmin'
                });
            } else {
                res.send({
                    msg: 'fail'
                });
            }
        });
    });
});

app.post('/answer', function (req, res) {
    var username = req.body.username;
    var content = req.body.content;
    console.log(username);

    var _content = content.reduce((str, o, i)=>{
        if(!i) {
            str +=  '\'' + o +  '\'';
        }  else {
            str +=  ',\'' + o +  '\'';
        }

    }, '');
    console.log(_content);
    var insert = `insert into answer(username, content) values('${username}',ARRAY[${_content}])`;
    console.log(insert);
    var client = new pg.Client(process.env.DATABASE_URL);
    pg.connect(process.env.DATABASE_URL, function (err, client, done) {
        client.query(insert, function (err, result) {
            done();
            if (result && result.rowCount) {
                res.send({
                    msg: 'success'
                })
            }
        });
    });

});

app.get('/getitems2', function (req, res) {
    var client = new pg.Client(process.env.DATABASE_URL);
    pg.connect(process.env.DATABASE_URL, function (err, client, done) {
        client.query('SELECT * FROM test2', function (err, result) {
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

app.get('/getitems', function (req, res) {
    var client = new pg.Client(process.env.DATABASE_URL);
    pg.connect(process.env.DATABASE_URL, function (err, client, done) {
        client.query('SELECT * FROM test1', function (err, result) {
            done();
            res.send(result.rows);
        });
    });
})
