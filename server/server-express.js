const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const crypto = require("crypto");
const {
    Datastore
} = require("@google-cloud/datastore");
const datastore = new Datastore({
    projectId: "encrypt-my-pii"
});

const app = express();
app.enable("trust proxy");

// const ironCoreConfig = require('./ironcore-config.json');
// const privateKey = fs.readFileSync(path.join(__dirname, './private.key'), 'utf8');

app.use(bodyParser.json());
app.use(cors());

const port = 3001;
const router = express.Router();

// SAVE PII
router.post("/new", (req, res) => {
    const pii = datastore.key("pii");
    const id = (Math.floor(Math.random() * (1000 - 0 + 1)) + 0).toString();

    const entity = {
        key: pii,
        data: {
            id: id,
            title: req.body.title,
            message: req.body.pii
        }
    };
    datastore
        .save(entity)
        .then((data) => {
            res.send(JSON.stringify(data));
        })
        .catch(error => {
            console.log(error);
        });
});

// GET All PII
router.get("/pii", (req, res) => {
    const query = datastore.createQuery("pii");
    datastore.runQuery(query).then(result => {
        res.send(result);
    });
});

app.use("/", router);

app.listen(port, () => {
    console.log("Listening on port " + port);
});