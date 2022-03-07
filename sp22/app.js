const http = require('http');
const server = http.createServer((req, res) => {
    console.log('url', req.url);
    if(url === '/product'){
        console.log('Product');
    }else{
        console.log('Home');
    }
});
const PORT = 3001;

server.lis