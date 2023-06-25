const express = require('express');
const path = require("path");
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// file static
app.use(express.static(path.join(__dirname, "public")));

// template handlebars
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine','hbs')
app.set("views", path.join(__dirname, "resources/views"));
console.log("path: ",path.join(__dirname, "resources","views"))


app.get('/home', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
})  