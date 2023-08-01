const express = require('express');
const cors = require('cors');

const loginRoute = require('./routes/login.route')

const app = express();
app.use(cors());

app.use(express.json());


app.use('/login', loginRoute)


module.exports = app;