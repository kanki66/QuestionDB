const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const questionRoutes = require('./api/routes/questions');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

let db = [];

app.use('/questions', questionRoutes);

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})
module.exports = app;