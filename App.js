const http = require('http');

const server = http.createServer(function(req, res){

    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }
});


server.listen(3000);

console.log('Listening on Port 3000...');