const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

const ironCoreConfig = require("./ironcore-config.json");
const privateKey = fs.readFileSync(
    path.join(__dirname, "./private.key"),
    "utf8"
);

http
    .createServer((req, res) => {
        const query = url.parse(req.url, true).query;
        if (req.url.indexOf("/jwt") === 0 && query.userID) {
            const token = jwt.sign({
                    pid: ironCoreConfig.projectId,
                    sid: ironCoreConfig.segmentId,
                    kid: ironCoreConfig.serviceKeyId
                },
                privateKey, {
                    algorithm: "ES256",
                    expiresIn: "2m",
                    subject: '1'
                }
            );
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Request-Method", "*");
            res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
            res.setHeader("Access-Control-Allow-Headers", "*");
            return res.end(token);
        }
        res.writeHead(404);
        res.end();
    })
    .listen(3001);