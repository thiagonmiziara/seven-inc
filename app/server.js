const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const server = express();

const db = require("./models/index");
db.sequelize.sync();

server.use(cors());
server.use(express.json());
server.use(routes);

server.get('/', (req, res) => {
    res.send('Hello World!');
});

server.listen(3000);