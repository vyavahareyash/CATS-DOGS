const express = require('express')
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express()
const url = 'mongodb+srv://yash:yash@cluster0.kdb13b7.mongodb.net';
const dbName = '';
require('dotenv').config();
const port = 3000

app.use(express.static("public"))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))

// mongoose.connect(url + '/' + dbName, { useNewUrlParser: true });

app.get('/', (req, res) => res.render('home'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))