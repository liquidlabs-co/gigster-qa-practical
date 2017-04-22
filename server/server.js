const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const db = require('./db/init.js');
const user = require('./routes/user.js');
const expense = require('./routes/expense.js');
const report = require('./routes/report.js');

const app = express();

const sessionSecret = process.env.SESSION_SECRET || 'session-secret';

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(
  session({secret: sessionSecret, resave: true, saveUninitialized: true})
);

// routes
app.use('/user', user);
app.use('/expense', expense);
app.use('/report', report);
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  const htmlPath = path.resolve(__dirname, '../public', 'index.html');
  res.sendFile(htmlPath);
});

db.init();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server listening on port: ${port}`));

module.exports = app;