// creating our own server in the Module in the Node js
const http=require("http");


const PORT=3600;

const hostname="localhost";

// till contitued after 1 hrs 

const server=http.createServer((req,res)=>{
    // console.log(req.url)---->it will return the url of the same kind bro.
    // req.end("congrats on creting ownserver by yourself bro");
    // but we can return the html file as well in the
    
    res.end("<h1>Hello world</h1>")



})

server.listen(PORT,hostname,()=>{
    console.log(`everything working fine at http://${hostname}:${PORT}`)

    
})

