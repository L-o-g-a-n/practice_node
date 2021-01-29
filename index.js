const express = require('express');
const app = express();
const http = require('http');
const { nextTick } = require('process');
const server = http.createServer(app);

const { PORT } = require('./env');

server.listen(PORT);

server.on('listening', () => {
    console.log(`server running on the ${PORT}`);
});

// app.get('/', (req, res) => {
//     res.send('wow!!!');
// });

app.use('/hello', (req, res) => {
    res.send('nice to meet you!');
});

