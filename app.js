const express = require('express')
var path = require('path');
const app = express()
const port = 3000



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var indexRouter = require('./routes/index');
app.use('/', indexRouter);

// app.get('/', (req, res) => res.json(''))

app.listen(port, () => console.log(`Webscrapper listening on port ${port}!`))

module.exports = app;

