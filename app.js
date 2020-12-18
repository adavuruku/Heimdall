const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var cors = require('cors')

const app = express();

app.use(cors());

app.use(morgan('dev')); //to http request

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


const questionsRoutes = require('./app/routes/questions');

app.use('/heimdall',questionsRoutes);

app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status=404;
    next(error);
});


app.use((error, req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error : {
            message: error.message
        }
    });
});

module.exports = app;