'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    config = require('./config'),
    routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '500mb' }));
app.use('/api/', routes);
app.get('*', (req, res) => {
    res.status(404).send();
});

app.listen(config.PORT, () => {
    console.log(`listening on ${config.PORT}`);
});

module.exports = app;