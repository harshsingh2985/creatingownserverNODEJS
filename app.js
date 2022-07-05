// creating own server
const http=require("http")

const PORT=4000;


const hostname="localhost";

const server=http.createServer((req,res)=>{
    // res.end("working on something big")
    // res.end("<h1>hello world welcomes you </h1>")

    // home page
    if(req.url==="/"){
        res.end("<h1>Home-Page</h1>")
    }

    if(req.url==="/about"){
        res.end("<h1>ABOUT-PAGE</h1>")
    }
    if(req.url==="/contact"){
        res.end("<h1>Contact-Page</h1")
    }
    if(req.url==="/services"){
        res.end("<h1>Servies-page</h1>")
    }
    else{
        res.end("<h1>404 page not found</h1>")

    }
    
})

server.listen(PORT,hostname,()=>{
    console.log("server works on http://localhost:4000)")

})