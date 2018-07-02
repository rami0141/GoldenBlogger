const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

//binds app to our express server
const app = express();

//API file for interacting with MongoDB
const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder - look for the path of dist
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/GoldenBlogger/index.html'));
});

// Set Port
const port = '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log('Running on port: 3000'));
