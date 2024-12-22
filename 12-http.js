const { log } = require('console')
const http = require('http')

//req - represents incoming requests that is being requested by the web browser
//res - what were sending back
const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if (req.url === '/about'){
        res.end(`this is the about page, you're not supposed to be here yet`)
    }
    res.end(`
       <h1> oops! page not found </h1>
       <h3> or 404 if you may </h3>
       <a href = '/'>back to home</a> `)
})
server.listen(5000)
//the 5000 here is the port we want to listen to