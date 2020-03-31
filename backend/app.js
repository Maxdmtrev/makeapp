const express = require ('express');
const cookieParser = require ('cookie-parser');
const logger = require ('morgan');
const config = require('config');
const session = require ('express-session');
const Filestore = require ('session-file-store') (session);
const indexRouter = require ('./routes/index');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
require('dotenv').config();

const app = express ();

app.use (logger ('dev'));
app.use (session ({
  store: new Filestore (),
  key: 'user_sid',
  secret: 'anything',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }
}));
app.use (bodyParser.urlencoded ({extended: true}));
app.use (bodyParser.json ());

app.use (cookieParser ());
app.use ('/', indexRouter);

const PORT = config.get('port') || 5000;

async function start() {
  try {
    mongoose.connect (`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clusterelbrus-ntmbz.mongodb.net/makeApp?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    app.listen(PORT, () => console.log(`Server has been started on ${PORT}...`));
  } catch(e) {
    console.log(`Server error`, e.message);
  }
}

start();

