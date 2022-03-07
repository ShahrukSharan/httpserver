const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Home");
        res.end();
    } else if (req.url === "/about") {
        res.write("About");
        res.end();
    } else if (req.url === "/contact") {
        res.write("Contact");
        res.end();
    } else {
        res.write('Not Found');
        res.end();
    }
})

server.listen(5000);

console.log('server is running on port 5000');