const http = require('http');
const handleRoutes = require('./routes/routes');

const server = http.createServer((req, res) => {
    handleRoutes(req, res);
    res.writeHead
});

server.listen(3000, () => {
    console.log("listening to Server at http://localhost:3000");
});