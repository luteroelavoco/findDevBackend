require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.vwan4.mongodb.net/omnistack10?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express();

app.use(cors());
app.listen(3333);
