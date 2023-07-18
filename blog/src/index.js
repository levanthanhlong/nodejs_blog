const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3000;
const route = require('./routes');

// HTTP logger
app.use(morgan('combined'));

// file static
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(
    express.json({
        deprecated: true,
    }),
);

// template handlebars 
        app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// route init
route(app);

// add port
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
