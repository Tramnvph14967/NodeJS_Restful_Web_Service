const http = require('http');
const server = http.createServer((req, res) => {
    console.log('url', req.url);
    const url = req.url;
    if(url === '/product'){
        // console.log('Product');
        res.setHeader('content-Type','text/html');
        res.write("<html>");
            res.write("<body>");
                res.write("<h1>Product Page</h1>")
            res.write("<html>");
        res.write("<body>");
        res.end();
    }
    else if(url === '/user'){
        // console.log('Product');
        res.setHeader('content-Type','text/html');
        res.write("<html>");
            res.write("<body>");
                res.write("<ul><li>User_1</li></ul>")
            res.write("<html>");
        res.write("<body>");
        res.end();
    }
    else{
        // console.log('Home');
        res.setHeader('content-Type','text/html');
        res.write("<html>");
            res.write("<body>");
                res.write("<h1>Home Page</h1>")
            res.write("<html>");
        res.write("<body>");
        res.end();
    }
});
const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Server running post ${PORT}`);
})