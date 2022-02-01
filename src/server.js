const port = process.env.PORT || 3000;
const routes = require("./routes");
const express = require("express");
const posts = require("../posts/posts.json");

const app = express();

app.use(express.json());
app.use(routes);
app.listen(port);
