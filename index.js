var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));


app.listen(app.get('port'), function(){
    console.log('connect success!');
});

app.get('/',function (req, res) {
    res.sendfile('./index.html');
});
