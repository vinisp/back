const http = require('http');
const posts = require('./posts/posts.json')

const port = process.env.PORT || 3000;

http.createServer((req,res) => {
    res.writeHead(200, {"Access-Control-Allow-Origin": "https://depp4.herokuapp.com/"})
    res.write(JSON.stringify(posts))
    res.end()
}).listen(port, () => {
    console.log(port)
})