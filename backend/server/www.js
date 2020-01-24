const express = require ('express');
const http = require ('http');
const cookieParser = require ('cookie-parser');
const logger = require ('morgan');
const session = require ('express-session');
const Filestore = require ('session-file-store') (session);
const indexRouter = require ('../routes/index');
const bodyParser = require ('body-parser');


const mongoose = require ('mongoose');
const app = express ();
mongoose.connect ('mongodb://localhost:27017/todolist', {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false});


app.use (logger ('dev'));
const port = '5000';
app.set ('port', port);

app.use (session ({
  store: new Filestore (), key: 'user_sid', secret: 'anything', resave: false, saveUninitialized: false, cookie: {
    expires: 600000
  }
}));
app.use (bodyParser.urlencoded ({extended: true}));
app.use (bodyParser.json ());

app.use (cookieParser ());
app.use ('/', indexRouter);

const server = http.createServer (app);

server.listen (port);