const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const keys = require('./config/keys');

const app = express();

const authRouter = require('./routes/authRoutes');

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

app.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

app.use('/auth/google', authRouter);

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build/')));

  app.get('/', (req, res) =>
    res.status(200).sendFile(path.join(__dirname, '../index.html'))
  );
}

app.listen(5000);
