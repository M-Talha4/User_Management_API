const http = require('http');
require('dotenv').config();
const handleRoutes = require('./routes/routes');

const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
    handleRoutes(req, res);
    res.writeHead
});

server.listen(port, () => {
    console.log(`Listening to Server at http://localhost:${port}`);
});
