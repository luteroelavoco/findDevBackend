require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const routes = require('./routes');
const {setupWebSocket} = require('./websocket')


mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.vwan4.mongodb.net/omnistack10?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express();
const server = http.Server(app);
setupWebSocket(server);

app.use(express.json());
app.use(cors());
app.use(routes);

server.listen(3333);
