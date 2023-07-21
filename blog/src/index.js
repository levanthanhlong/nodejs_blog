const express = require('express');
const path = require('path');
const   methodOverride = require('method-override')
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

//connect to mongoDb
db.connect();


// HTTP logger
app.use(morgan('combined'));

// file static
app.use(express.static(path.join(__dirname, 'public')));

// methodOverride
app.use(methodOverride('_method'))

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
app.engine('.hbs', handlebars({
        extname: '.hbs' ,
        helpers: {
            sum: (a, b) => a+b,
        }

    }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// route init
route(app);

// add port
app.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}`);
});
