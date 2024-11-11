const http = require('http');
const date = new Date();

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`Hello ASL! ${date.toLocaleString()}`);
}).listen(3001, () => {
    console.log(`Hello ASL! ${date.toLocaleString()}`);
});