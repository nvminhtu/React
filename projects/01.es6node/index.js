// code server o day
var express = require('express');
var app = express();

// set view ???
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));
app.listen(3000);

app.get('/',function(req,res) {
    res.render('home');
});
