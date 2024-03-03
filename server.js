const http = require("http");

http
  .createServer((req, res) => {
    res.setHeader("content-type", "text/html");
    res.end("<h1>Hello Node!!!!</h1>\n");
  })
  .listen(3000);
