require("dotenv").config();
const port = process.env.PORT || 3001;
const routes = require("./routes");
const express = require("express");
// const posts = require("../posts/posts.json");
var cors = require("cors");

require("./database/index");

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);
app.listen(port);
