const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{

    fs.writeFile(__dirname+'/headers1.json', JSON.stringify(req.headers), error=>{
        if(error) console.log(error);
        res.end('ok');
    });

});

server.listen(3000);