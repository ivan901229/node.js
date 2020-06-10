const http = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    console.log(req.headers);
    res.end(`
        <h2>Hello 456</h2>
        <p>${req.url}</p>
    `);
});

server.listen(3000);