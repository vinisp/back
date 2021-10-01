const http = require('http');
const posts = require('./posts/posts.json')

const port = process.env.PORT || 3000;

http.createServer((req,res) => {
    res.write(JSON.stringify(posts))
    res.end()
}).listen(port, () => {
    console.log(port)
})