const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const keys = require('./config/keys');

const app = express();

const authRouter = require('./routes/authRoutes');
const articleRouter = require('./routes/articleRoutes');
const listRouter = require('./routes/listRoutes');

mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .catch((e) => console.log(e));

mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

require('./services/passport');

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(
  session({
    secret: 'Insert randomized text here',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/favorites', (req, res) => {
  res.redirect('/');
});

app.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

app.use('/auth/google', authRouter);
app.use('/articles', articleRouter, (req, res) => {
  res.send(res.locals.articles);
});

app.use('/api/lists', listRouter, (req, res) => {
  res.send(res.locals);
});

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build/')));

  app.get('/', (req, res) =>
    res.status(200).sendFile(path.join(__dirname, '../index.html'))
  );
}

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(5000);
