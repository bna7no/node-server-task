import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
    let filePath = "";
    let statusCode = 200;

    if (req.url === "/home") {
        filePath = "home.html";
    } else if (req.url === "/contact") {
        filePath = "contact.html";
    } else {
        filePath = "404.html";
        statusCode = 404;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Server Error");
            return;
        }

        res.writeHead(statusCode, { "Content-Type": "text/html" });
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});