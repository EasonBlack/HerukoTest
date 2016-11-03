var express = require('express');
var path = require('path');
var pg = require('pg');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();


if (!process.env.DATABASE_URL) {
    var webpack = require('webpack');
    var config = require('./client/webpack.config.dev.js');
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath,
        stats: {
            colors: true
        }
    }));
    process.env.DATABASE_URL = "postgres://eason:admin@localhost:5432/demo";
}


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
    var _content = '';
    content.forEach(function (item, i) {
        if (!i) {
            _content += '\'' + item + '\'';
        } else {
            _content += ',\'' + item + '\'';
        }
    })

    var insert = `insert into answer(username, content) values('${username}',ARRAY[${_content}])`;
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

app.get('/answer',function(req,res){
    var select = `select * from answer`;
    var client = new pg.Client(process.env.DATABASE_URL);
    client.connect(function (err) {
        if (err) throw err;
        client.query(select, function (error, results) {
            res.send(results.rows);
            client.end(function (err) {
                if (err) throw err;
            });
        });
    });
});

app.get('/question-type', function (req, res) {
    var select = `select * from item where type='question_type'`;
    var client = new pg.Client(process.env.DATABASE_URL);
    client.connect(function (err) {
        if (err) throw err;
        client.query(select, function (error, results) {
            res.send(results.rows);
            client.end(function (err) {
                if (err) throw err;
            });
        });
    });
})

app.get('/question', function (req, res) {
    var select = `select * from question order by order_num`;
    var client = new pg.Client(process.env.DATABASE_URL);
    client.connect(function (err) {
        if (err) throw err;
        client.query(select, function (error, results) {
            res.send(results);
        });
    });
})

app.post('/question', function (req, res) {
    var insert = '', update = '', queryStr = '';
    var optionsState = '';
    if (req.body.options) {
        optionsState = 'ARRAY[' + req.body.options.split(',').map(o=> '\'' + o + '\'').join(',') + ']';
    } else {
        optionsState = 'ARRAY[]::text[]';
    }

    if (req.body.id) {
        queryStr = `
            update question set type=${req.body.type},
            content = '${req.body.content}',
            options = ${optionsState},
            extra = ${ req.body.extra},
            show =  ${req.body.show},
            order_num = ${req.body.order_num}
            where id = ${req.body.id}
        `;
    } else {
        queryStr = `
            insert into question(type,content,options,extra, show, order_num) 
            values(${req.body.type}, '${req.body.content}', ${optionsState}, ${ req.body.extra}, ${req.body.show}, ${req.body.order_num})
        `;
    }

    var client = new pg.Client(process.env.DATABASE_URL);
    client.connect(function (err) {
        if (err) throw err;
        client.query(queryStr, function (error, results) {
            if (!error) res.send('success');
        });
    });
})
