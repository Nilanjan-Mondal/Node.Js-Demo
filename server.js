const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url == '/home') res.end('Welcome to home page');
    else res.end('hello World');
});  // 192.168.0.105:3000  -> ip:port -> socket address

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});