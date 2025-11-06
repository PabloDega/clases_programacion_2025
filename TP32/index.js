let http = require("http");
let fs = require("fs");
let url = require("url");

http.createServer((req, res) => {
  fs.readFile("index.html", (error, data) => {
    res.writeHead(200, {"Content-type": "text/html"});
    res.write(data);
    //res.end();
    let direccion = url.parse(req.url, true);
    let sede = direccion.query.sede;
    console.log(sede)
    //console.log(direccion);
  })
}).listen(4000)

console.log("Servidor activo en http://localhost:4000");